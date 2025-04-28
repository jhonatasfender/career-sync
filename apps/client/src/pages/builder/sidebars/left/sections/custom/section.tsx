import { t } from "@lingui/core/macro";
import { createId } from "@paralleldrive/cuid2";
import { DotsSixVertical, Envelope, Plus, X } from "@phosphor-icons/react";
import type { CustomField as ICustomField } from "@reactive-resume/schema";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import debounce from "lodash.debounce";

import { useBasics } from "@career-sync/client/hooks/use-basics";
import { useResumeStore } from "@career-sync/client/stores/resume";

type CustomFieldProps = {
  field: ICustomField;
  onChange: (field: ICustomField) => void;
  onRemove: (id: string) => void;
};

const CustomField = ({ field, onChange, onRemove }: CustomFieldProps) => {
  const controls = useDragControls();

  const handleChange = (key: "icon" | "name" | "value", value: string) => {
    onChange({ ...field, [key]: value });
  };

  return (
    <Reorder.Item
      value={field}
      dragListener={false}
      dragControls={controls}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="flex items-end justify-between">
        <Button
          size="icon"
          variant="ghost"
          className="shrink-0"
          onPointerDown={(e) => {
            controls.start(e);
          }}
        >
          <DotsSixVertical />
        </Button>

        <Popover>
          <Tooltip content={t`Icon`}>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost" className="shrink-0">
                {field.icon ? <i className={cn(`ph ph-${field.icon}`)} /> : <Envelope />}
              </Button>
            </PopoverTrigger>
          </Tooltip>
          <PopoverContent side="bottom" align="start" className="flex flex-col gap-y-1.5 p-1.5">
            <Input
              value={field.icon}
              placeholder={t`Enter Phosphor Icon`}
              onChange={(e) => {
                handleChange("icon", e.target.value);
              }}
            />
            <p className="text-xs opacity-80">
              {t`Visit `}
              <a
                href="https://phosphoricons.com/"
                target="_blank"
                className="underline"
                rel="noopener noreferrer nofollow"
              >
                {t`Phosphor Icons`}
              </a>
              {t` for a list of available icons`}
            </p>
          </PopoverContent>
        </Popover>

        <Input
          className="mx-2"
          placeholder={t`Name`}
          value={field.name}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
        />

        <Input
          className="mx-2"
          placeholder={t`Value`}
          value={field.value}
          onChange={(e) => {
            handleChange("value", e.target.value);
          }}
        />

        <Button
          size="icon"
          variant="ghost"
          className="shrink-0"
          onClick={() => {
            onRemove(field.id);
          }}
        >
          <X />
        </Button>
      </div>
    </Reorder.Item>
  );
};

type Props = { className?: string };

export const CustomFieldsSection = ({ className }: Props) => {
  const setValue = useResumeStore((s) => s.setValue);
  const customFields = useResumeStore((s) => s.resume.data.basics.customFields);
  const { exists, update } = useBasics();

  const persist = debounce((fields: ICustomField[]) => {
    if (exists) update.mutate({ customFields: fields });
  }, 500);

  const setAndPersist = (fields: ICustomField[]) => {
    setValue("basics.customFields", fields);
    persist(fields);
  };

  const onAdd = () => {
    setAndPersist([...customFields, { id: createId(), icon: "envelope", name: "", value: "" }]);
  };

  const onChange = (field: ICustomField) => {
    const fields = customFields.map((f) => (f.id === field.id ? field : f));
    setAndPersist(fields);
  };

  const onReorder = (fields: ICustomField[]) => {
    setAndPersist(fields);
  };

  const onRemove = (id: string) => {
    setAndPersist(customFields.filter((f) => f.id !== id));
  };

  return (
    <div className={cn("space-y-4", className)}>
      <AnimatePresence>
        <Reorder.Group axis="y" className="space-y-4" values={customFields} onReorder={onReorder}>
          {customFields.map((field) => (
            <CustomField key={field.id} field={field} onChange={onChange} onRemove={onRemove} />
          ))}
        </Reorder.Group>
      </AnimatePresence>

      <Button variant="link" onClick={onAdd}>
        <Plus className="mr-2" />
        <span>{t`Add a custom field`}</span>
      </Button>
    </div>
  );
};

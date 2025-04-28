/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/core/macro";
import { X } from "@phosphor-icons/react";
import { defaultSkill, skillSchema } from "@reactive-resume/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Badge,
  BadgeInput,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Slider,
} from "@reactive-resume/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { useSkills } from "@career-sync/client/hooks/use-skills";
import type { SkillModel } from "@career-sync/client/services/skills/skills";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";

const formSchema = skillSchema;
type FormValues = z.infer<typeof formSchema>;

export const SkillsDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("skills");
  const { create, update, remove } = useSkills();

  const form = useForm<FormValues>({
    defaultValues: mode === "update" && payload.item ? payload.item : defaultSkill,
    resolver: zodResolver(formSchema),
  });

  const [pendingKeyword, setPendingKeyword] = useState("");

  const onSubmit = (values: FormValues) => {
    const payloadForApi: Omit<SkillModel, "id"> = {
      name: values.name,
      description: values.description || undefined,
      level: values.level,
      keywords: values.keywords,
    };

    if (mode === "create") {
      create.mutate(payloadForApi, { onSuccess: close });
    } else {
      update.mutate(
        { id: (payload.item as FormValues).id, payload: payloadForApi },
        { onSuccess: close },
      );
    }
  };

  if (mode === "delete") {
    return (
      <AlertDialog open onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>{t`Delete Skill?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this skill? This action cannot be undone.`}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
            <AlertDialogAction
              variant="error"
              onClick={() => {
                if (payload.item?.id) {
                  remove.mutate(payload.item.id, { onSuccess: close });
                }
              }}
            >
              {t`Delete`}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <SectionDialog<FormValues>
      id="skills"
      form={form}
      defaultValues={defaultSkill}
      pendingKeyword={pendingKeyword}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Name`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Description`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="level"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Level`}</FormLabel>
              <FormControl className="py-2">
                <div className="flex items-center gap-x-4">
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                  {field.value > 0 ? (
                    <span className="text-base font-bold">{field.value}</span>
                  ) : (
                    <span className="text-base font-bold">{t`Hidden`}</span>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="keywords"
          control={form.control}
          render={({ field }) => (
            <div className="space-y-3 sm:col-span-2">
              <FormItem>
                <FormLabel>{t`Keywords`}</FormLabel>
                <FormControl>
                  <BadgeInput {...field} setPendingKeyword={setPendingKeyword} />
                </FormControl>
                <FormDescription>
                  {t`You can add multiple keywords by separating them with a comma or pressing enter.`}
                </FormDescription>
                <FormMessage />
              </FormItem>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                <AnimatePresence>
                  {field.value.map((item, index) => (
                    <motion.div
                      key={item}
                      layout
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                      exit={{ opacity: 0, x: -50 }}
                    >
                      <Badge
                        className="cursor-pointer"
                        onClick={() => {
                          field.onChange(field.value.filter((v) => item !== v));
                        }}
                      >
                        <span className="mr-1">{item}</span>
                        <X size={12} weight="bold" />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        />
      </div>
    </SectionDialog>
  );
};

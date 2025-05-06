import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/core/macro";
import { createId } from "@paralleldrive/cuid2";
import { defaultReference, referenceSchema } from "@reactive-resume/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RichInput,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AiActions } from "@career-sync/client/components/ai-actions";
import { useReferences } from "@career-sync/client/hooks/use-reference";
import type { ReferenceModel } from "@career-sync/client/services/reference/reference";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = referenceSchema.extend({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  summary: z.string(),
  url: z.object({ label: z.string(), href: z.string() }),
  visible: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export const ReferencesDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("references");
  const { create, update, remove } = useReferences();

  const form = useForm<FormValues, unknown, FormValues>({
    defaultValues: {
      ...defaultReference,
      id: mode === "update" && payload.item?.id ? payload.item.id : createId(),
      ...(mode === "update" && payload.item ? payload.item : {}),
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    const payloadForApi: Omit<ReferenceModel, "id"> = {
      name: values.name,
      description: values.description ?? undefined,
      url: values.url.href ?? undefined,
      summary: values.summary ?? undefined,
    };

    if (mode === "create") {
      create.mutate(payloadForApi, { onSuccess: close });
    } else if (payload.item?.id) {
      update.mutate({ id: payload.item.id, payload: payloadForApi }, { onSuccess: close });
    }
  };

  if (mode === "delete") {
    return (
      <AlertDialog open onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>{t`Delete Reference?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this reference? This action cannot be undone.`}
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
      id="references"
      form={form}
      defaultValues={defaultReference}
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
          name="url"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Website`}</FormLabel>
              <FormControl>
                <URLInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="summary"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{t`Summary`}</FormLabel>
              <FormControl>
                <RichInput
                  {...field}
                  content={field.value}
                  footer={(editor) => (
                    <AiActions
                      value={editor.getText()}
                      onChange={(value) => {
                        editor.commands.setContent(value, true);
                        field.onChange(value);
                      }}
                    />
                  )}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};

/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/macro";
import { awardSchema, defaultAward } from "@reactive-resume/schema";
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
import type { z } from "zod";

import { AiActions } from "@career-sync/client/components/ai-actions";
import { useAwards } from "@career-sync/client/hooks/use-award";
import type { AwardModel } from "@career-sync/client/services/award/award";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = awardSchema;
type FormValues = z.infer<typeof formSchema>;

export const AwardsDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("awards");
  const { create, update, remove } = useAwards();

  const form = useForm<FormValues>({
    defaultValues: mode === "update" && payload.item ? payload.item : defaultAward,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    const payloadForApi: Omit<AwardModel, "id"> = {
      title: values.title,
      awarder: values.awarder || undefined,
      date: values.date ? new Date(values.date).toISOString() : null,
      website: values.website.href || undefined,
      summary: values.summary || undefined,
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
            <AlertDialogTitle>{t`Delete Award?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this award? This action cannot be undone.`}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
            <AlertDialogAction
              variant="error"
              onClick={() => {
                if (payload.item?.id) remove.mutate(payload.item.id, { onSuccess: close });
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
      id="awards"
      form={form}
      defaultValues={defaultAward}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Title`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="awarder"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Awarder`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Date`}</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="website"
          control={form.control}
          render={({ field }) => (
            <FormItem>
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
                      onChange={(val) => {
                        editor.commands.setContent(val, true);
                        field.onChange(val);
                      }}
                    />
                  )}
                  onChange={(val) => {
                    field.onChange(val);
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

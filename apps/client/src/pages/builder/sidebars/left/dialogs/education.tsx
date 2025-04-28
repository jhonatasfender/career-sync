/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/core/macro";
import { defaultEducation, educationSchema } from "@reactive-resume/schema";
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
import { useEducations } from "@career-sync/client/hooks/use-education";
import type { EducationModel } from "@career-sync/client/services/education/education";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = educationSchema;

type FormValues = z.infer<typeof formSchema>;

export const EducationDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("education");
  const { create, update, remove } = useEducations();

  const form = useForm<FormValues>({
    defaultValues: mode === "update" && payload.item ? payload.item : defaultEducation,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    const payloadForApi: Omit<EducationModel, "id"> = {
      institution: values.institution,
      area: values.area,
      studyType: values.studyType || undefined,
      startDate: values.startDate ? new Date(values.startDate).toISOString() : null,
      endDate: values.endDate ? new Date(values.endDate).toISOString() : null,
      gpa: values.gpa ? Number(values.gpa) : undefined,
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

  // Delete dialog
  if (mode === "delete") {
    return (
      <AlertDialog open onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>{t`Delete Education?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this education entry? This action cannot be undone.`}
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
      id="education"
      form={form}
      defaultValues={defaultEducation}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="institution"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Institution`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="area"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Area of Study`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="studyType"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Type of Study`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="gpa"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>GPA</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="website"
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
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="startDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Start Date`}</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="endDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`End Date`}</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};

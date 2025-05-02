/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@lingui/core/macro";
import { defaultVolunteer, volunteerSchema } from "@reactive-resume/schema";
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
import { useVolunteers } from "@career-sync/client/hooks/use-volunteer";
import type { VolunteerModel } from "@career-sync/client/services/volunteer/volunteer";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = volunteerSchema;
type FormValues = z.input<typeof formSchema>;

export const VolunteerDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("volunteer");
  const { create, update, remove } = useVolunteers();

  const form = useForm<FormValues>({
    defaultValues: mode === "update" && payload.item ? payload.item : defaultVolunteer,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    const payloadForApi: Omit<VolunteerModel, "id"> = {
      organization: values.organization,
      position: values.position || undefined,
      startDate: values.startDate ? new Date(values.startDate).toISOString() : undefined,
      endDate: values.endDate ? new Date(values.endDate).toISOString() : undefined,
      location: values.location || undefined,
      url: values.url.href || undefined,
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
            <AlertDialogTitle>{t`Delete Volunteer?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this volunteer experience? Esta ação é irreversível.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
            <AlertDialogAction
              variant="error"
              onClick={() =>
                payload.item?.id && remove.mutate(payload.item.id, { onSuccess: close })
              }
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
      id="volunteer"
      form={form}
      defaultValues={defaultVolunteer}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="organization"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Organization`}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="position"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Position`}</FormLabel>
              <FormControl>
                <Input {...field} />
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
        <FormField
          name="location"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Location`}</FormLabel>
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

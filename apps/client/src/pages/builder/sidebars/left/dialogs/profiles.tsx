// dialogs/ProfilesDialog.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { t, Trans } from "@lingui/macro";
import { defaultProfile, profileSchema } from "@reactive-resume/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Avatar,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@reactive-resume/ui";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { BrandIcon } from "@career-sync/client/components/brand-icon";
import { useProfiles } from "@career-sync/client/hooks/use-profile";
import { useDialog } from "@career-sync/client/stores/dialog";

import { SectionDialog } from "../sections/shared/section-dialog";
import { URLInput } from "../sections/shared/url-input";

const formSchema = profileSchema;
type FormValues = z.infer<typeof formSchema>;

export const ProfilesDialog = () => {
  const { mode = "create", payload, close } = useDialog<FormValues>("profiles");

  const { create, update, remove } = useProfiles();

  const form = useForm<FormValues>({
    defaultValues: mode === "update" && payload?.item ? payload.item : defaultProfile,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    const payloadToApi = {
      ...values,
      url: values.url.href,
    };

    if (mode === "create") {
      create.mutate(payloadToApi, { onSuccess: close });
    } else {
      update.mutate(
        { id: (payload?.item as FormValues).id, payload: payloadToApi },
        { onSuccess: close },
      );
    }
  };

  if (mode === "delete") {
    return (
      <AlertDialog open onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <AlertDialogHeader>
            <AlertDialogTitle>{t`Delete Profile?`}</AlertDialogTitle>
            <AlertDialogDescription>
              {t`Are you sure you want to delete this profile? This action cannot be undone.`}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
            <AlertDialogAction
              variant="error"
              onClick={() => {
                if (payload?.item?.id) {
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
      id="profiles"
      form={form}
      defaultValues={defaultProfile}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="network"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Network`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder="GitHub" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t`Username`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder="john.doe" />
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
                <URLInput {...field} placeholder="https://github.com/johndoe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="icon"
          control={form.control}
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel htmlFor="iconSlug">{t`Icon`}</FormLabel>
              <FormControl>
                <div className="flex items-center gap-x-2">
                  <Avatar className="size-8 bg-white p-1.5">
                    <BrandIcon slug={field.value} />
                  </Avatar>
                  <Input {...field} placeholder="github" onChange={field.onChange} />
                </div>
              </FormControl>
              <FormMessage />
              <FormDescription className="ml-10">
                <Trans>
                  Powered by{" "}
                  <a
                    href="https://simpleicons.org/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium"
                  >
                    Simple Icons
                  </a>
                </Trans>
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </SectionDialog>
  );
};

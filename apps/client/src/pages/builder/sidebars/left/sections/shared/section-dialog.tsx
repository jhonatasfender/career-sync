import { t } from "@lingui/core/macro";
import { createId } from "@paralleldrive/cuid2";
import { CopySimple, PencilSimple, Plus } from "@phosphor-icons/react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { SectionItem, SectionWithItem } from "@reactive-resume/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  ScrollArea,
} from "@reactive-resume/ui";
import { produce } from "immer";
import get from "lodash.get";
import { useEffect } from "react";
import { FormProvider, type UseFormReturn } from "react-hook-form";

import type { DialogName } from "@career-sync/client/stores/dialog";
import { useDialog } from "@career-sync/client/stores/dialog";
import { useResumeStore } from "@career-sync/client/stores/resume";

type Props<T extends SectionItem> = {
  id: DialogName;
  form: UseFormReturn<T>;
  defaultValues: T;
  pendingKeyword?: string;
  children: React.ReactNode;
  onSubmit?: (values: T) => void | Promise<void>;
};

export const SectionDialog = <T extends SectionItem>({
  id,
  form,
  defaultValues,
  pendingKeyword,
  children,
  onSubmit,
}: Props<T>) => {
  const { isOpen, mode, close, payload } = useDialog<T>(id);

  const setValue = useResumeStore((s) => s.setValue);
  const section = useResumeStore((s) =>
    get(s.resume?.data?.sections, id),
  ) as SectionWithItem<T> | null;

  const isCreate = mode === "create";
  const isUpdate = mode === "update";
  const isDelete = mode === "delete";
  const isDuplicate = mode === "duplicate";

  useEffect(() => {
    if (isOpen) onReset();
  }, [isOpen]);

  const internalSubmit = (values: T) => {
    if (!section) return;

    if (isCreate || isDuplicate) {
      if (pendingKeyword && "keywords" in values) values.keywords.push(pendingKeyword);
      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]) => {
          draft.push({ ...values, id: createId() });
        }),
      );
    }

    if (isUpdate) {
      if (!payload.item?.id) return;
      if (pendingKeyword && "keywords" in values) values.keywords.push(pendingKeyword);
      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]) => {
          const idx = draft.findIndex((it) => it.id === payload.item?.id);
          if (idx !== -1) draft[idx] = values;
        }),
      );
    }

    if (isDelete) {
      if (!payload.item?.id) return;
      setValue(
        `sections.${id}.items`,
        produce(section.items, (draft: T[]) => {
          const idx = draft.findIndex((it) => it.id === payload.item?.id);
          if (idx !== -1) draft.splice(idx, 1);
        }),
      );
    }

    close();
  };

  const handleSubmit = onSubmit ?? internalSubmit;

  const onReset = () => {
    if (isCreate) form.reset({ ...defaultValues, id: createId() } as T);
    if (isUpdate) form.reset({ ...defaultValues, ...payload.item });
    if (isDuplicate) form.reset({ ...payload.item, id: createId() } as T);
    if (isDelete) form.reset({ ...defaultValues, ...payload.item });
  };

  if (isDelete) {
    return (
      <AlertDialog open={isOpen} onOpenChange={close}>
        <AlertDialogContent className="z-50">
          <FormProvider {...form}>
            <Form {...form}>
              <form>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t`Are you sure you want to delete this item?`}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t`This action can be reverted by clicking on the undo button in the floating toolbar.`}
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>{t`Cancel`}</AlertDialogCancel>
                  <AlertDialogAction variant="error" onClick={form.handleSubmit(handleSubmit)}>
                    {t`Delete`}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </Form>
          </FormProvider>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="z-50">
        <FormProvider {...form}>
          <Form {...form}>
            <ScrollArea>
              <form
                className="max-h-[60vh] space-y-6 lg:max-h-fit"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex items-center space-x-2.5">
                      {isCreate && <Plus />}
                      {isUpdate && <PencilSimple />}
                      {isDuplicate && <CopySimple />}
                      <h2>
                        {isCreate && t`Create a new item`}
                        {isUpdate && t`Update an existing item`}
                        {isDuplicate && t`Duplicate an existing item`}
                      </h2>
                    </div>
                  </DialogTitle>
                  <VisuallyHidden>
                    <DialogDescription />
                  </VisuallyHidden>
                </DialogHeader>

                {children}

                <DialogFooter>
                  <Button type="submit">
                    {isCreate && t`Create`}
                    {isUpdate && t`Save Changes`}
                    {isDuplicate && t`Duplicate`}
                  </Button>
                </DialogFooter>
              </form>
            </ScrollArea>
          </Form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

import { t } from "@lingui/core/macro";
import { DownloadSimple } from "@phosphor-icons/react";
import { KeyboardShortcut } from "@reactive-resume/ui";

import { useDialog } from "@career-sync/client/stores/dialog";

import { BaseListItem } from "./base-item";

export const ImportResumeListItem = () => {
  const { open } = useDialog("import");

  return (
    <BaseListItem
      start={<DownloadSimple size={18} />}
      title={
        <>
          <span>{t`Import an existing resume`}</span>
          <KeyboardShortcut className="ml-2">^I</KeyboardShortcut>
        </>
      }
      description={t`LinkedIn, JSON Resume, etc.`}
      onClick={() => {
        open("create");
      }}
    />
  );
};

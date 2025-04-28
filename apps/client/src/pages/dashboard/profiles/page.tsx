import { t } from "@lingui/core/macro";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PencilSimple,
  Plus,
  Trash,
  TwitterLogo,
} from "@phosphor-icons/react";
import type { Profile } from "@reactive-resume/schema";
import { Button } from "@reactive-resume/ui";

import { PageLayout } from "@career-sync/client/components/page-layout";
import { useProfiles } from "@career-sync/client/hooks/use-profile";
import { useDialog } from "@career-sync/client/stores/dialog";

const ProfileGridView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Profile[];
  handleEdit: (profile: Profile) => void;
  handleDelete: (profile: Profile) => void;
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "github": {
        return <GithubLogo className="size-6" weight="duotone" />;
      }
      case "linkedin": {
        return <LinkedinLogo className="size-6" weight="duotone" />;
      }
      case "twitter": {
        return <TwitterLogo className="size-6" weight="duotone" />;
      }
      case "instagram": {
        return <InstagramLogo className="size-6" weight="duotone" />;
      }
      case "facebook": {
        return <FacebookLogo className="size-6" weight="duotone" />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((profile) => (
        <div
          key={profile.network}
          className="group flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              {getIcon(profile.icon)}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{profile.network}</h3>
              <p className="text-sm text-gray-500">@{profile.username}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
                title={t`Edit Profile`}
                onClick={() => {
                  handleEdit(profile);
                }}
              >
                <PencilSimple className="size-4" weight="duotone" />
              </button>
              <button
                className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                title={t`Delete Profile`}
                onClick={() => {
                  handleDelete(profile);
                }}
              >
                <Trash className="size-4" weight="duotone" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <a
              href={profile.url.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {profile.url.href}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProfileListView = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: Profile[];
  handleEdit: (profile: Profile) => void;
  handleDelete: (profile: Profile) => void;
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "github": {
        return <GithubLogo className="size-6" weight="duotone" />;
      }
      case "linkedin": {
        return <LinkedinLogo className="size-6" weight="duotone" />;
      }
      case "twitter": {
        return <TwitterLogo className="size-6" weight="duotone" />;
      }
      case "instagram": {
        return <InstagramLogo className="size-6" weight="duotone" />;
      }
      case "facebook": {
        return <FacebookLogo className="size-6" weight="duotone" />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="space-y-4">
      {data.map((profile) => (
        <div
          key={profile.network}
          className="flex items-center justify-between rounded-lg border bg-background p-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50">
              {getIcon(profile.icon)}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{profile.network}</h3>
              <p className="text-sm text-gray-500">@{profile.username}</p>
              <a
                href={profile.url.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {profile.url.href}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-secondary/50 hover:text-primary"
              title={t`Edit Profile`}
              onClick={() => {
                handleEdit(profile);
              }}
            >
              <PencilSimple className="size-4" weight="duotone" />
            </button>
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              title={t`Delete Profile`}
              onClick={() => {
                handleDelete(profile);
              }}
            >
              <Trash className="size-4" weight="duotone" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProfilePage = () => {
  const { open } = useDialog("profiles");
  const { data: profiles = [], isLoading, isError } = useProfiles();

  const handleCreate = () => {
    open("create", { id: "profiles" });
  };
  const handleEdit = (profile: Profile) => {
    open("update", { id: "profiles", item: profile });
  };
  const handleDelete = (profile: Profile) => {
    open("delete", { id: "profiles", item: profile });
  };

  const data: Profile[] = profiles.map((p) => ({
    ...p,
    url: { href: p.url, label: p.network },
    icon: p.icon ?? p.network.toLowerCase(),
    visible: true,
  }));

  if (isLoading) return <p>{t`Loading profiles ...`}</p>;
  if (isError) return <p>{t`Could not load profiles.`}</p>;

  return (
    <div className="w-full space-y-6">
      <PageLayout
        title={t`Profiles`}
        gridView={
          <>
            <div className="mb-4 flex justify-end">
              <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                <Plus weight="bold" />
                <span>{t`Add Profile`}</span>
              </Button>
            </div>
            <ProfileGridView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
          </>
        }
        listView={
          <>
            <div className="mb-4 flex justify-end">
              <Button variant="primary" size="md" className="gap-x-2" onClick={handleCreate}>
                <Plus weight="bold" />
                <span>{t`Add Profile`}</span>
              </Button>
            </div>
            <ProfileListView data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
          </>
        }
      />
    </div>
  );
};

import { t } from "@lingui/core/macro";
import { basicsSchema } from "@reactive-resume/schema";
import { Input, Label } from "@reactive-resume/ui";

import { useResumeStore } from "@career-sync/client/stores/resume";

import { CustomFieldsSection } from "./custom/section";
import { PictureSection } from "./picture/section";
import { SectionIcon } from "./shared/section-icon";
import { URLInput } from "./shared/url-input";

export const BasicsSection = () => {
  const setValue = useResumeStore((state) => state.setValue);
  const basics = useResumeStore((state) => state.resume.data.basics);

  return (
    <section id="basics" className="grid gap-y-6">
      <header className="flex items-center gap-x-4">
        <SectionIcon id="basics" size={18} />
        <h2 className="text-2xl font-bold lg:text-3xl">{t`Basics`}</h2>
      </header>

      <main className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <PictureSection />
        </div>

        <div className="space-y-4 sm:col-span-2">
          <Label htmlFor="basics.name">{t`Full Name`}</Label>
          <Input
            id="basics.name"
            value={basics.name}
            hasError={!basicsSchema.pick({ name: true }).safeParse({ name: basics.name }).success}
            onChange={(e) => {
              setValue("basics.name", e.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="basics.headline">{t`Headline`}</Label>
          <Input
            id="basics.headline"
            value={basics.headline}
            onChange={(e) => {
              setValue("basics.headline", e.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.email">{t`Email`}</Label>
          <Input
            id="basics.email"
            placeholder="john.doe@example.com"
            value={basics.email}
            hasError={
              !basicsSchema.pick({ email: true }).safeParse({ email: basics.email }).success
            }
            onChange={(e) => {
              setValue("basics.email", e.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.url">{t`Website`}</Label>
          <URLInput
            id="basics.url"
            value={basics.url}
            placeholder="https://example.com"
            onChange={(val) => {
              setValue("basics.url", val);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.phone">{t`Phone`}</Label>
          <Input
            id="basics.phone"
            placeholder="+55 (11) 91234-5678"
            value={basics.phone}
            onChange={(e) => {
              setValue("basics.phone", e.target.value);
            }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="basics.location">{t`Location`}</Label>
          <Input
            id="basics.location"
            value={basics.location}
            onChange={(e) => {
              setValue("basics.location", e.target.value);
            }}
          />
        </div>

        <CustomFieldsSection className="sm:col-span-2" />
      </main>
    </section>
  );
};

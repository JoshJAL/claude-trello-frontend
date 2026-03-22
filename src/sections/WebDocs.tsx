import { WebDocsHeader } from "./web-docs/WebDocsHeader";
import { WhatYouCanDo } from "./web-docs/WhatYouCanDo";
import { GettingStarted } from "./web-docs/GettingStarted";
import { DashboardSources } from "./web-docs/DashboardSources";
import { SessionFlow } from "./web-docs/SessionFlow";
import { ParallelModeSection } from "./web-docs/ParallelModeSection";
import { SettingsSection } from "./web-docs/SettingsSection";
import { TaskFormatSection } from "./web-docs/TaskFormatSection";
import { TroubleshootingSection } from "./web-docs/TroubleshootingSection";
import { SecuritySection } from "./web-docs/SecuritySection";

export function WebDocs() {
  return (
    <section id="web" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <WebDocsHeader />
        <WhatYouCanDo />
        <GettingStarted />
        <DashboardSources />
        <SessionFlow />
        <ParallelModeSection />
        <SettingsSection />
        <TaskFormatSection />
        <TroubleshootingSection />
        <SecuritySection />
      </div>
    </section>
  );
}

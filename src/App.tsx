import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { WebDocs } from "./sections/WebDocs";
import { CliDocs } from "./sections/CliDocs";
import { SelfHosting } from "./sections/SelfHosting";
import { Roadmap } from "./sections/Roadmap";
import { ConsentBanner } from "./sections/ConsentBanner";
import { Cta } from "./sections/Cta";
import { Footer } from "./sections/Footer";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { DataPolicyPage } from "./pages/DataPolicyPage";
import { AiModelsPage } from "./pages/AiModelsPage";
import { RouterProvider, useRouter } from "./router";

function Routes() {
  const { path } = useRouter();

  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/terms") return <TermsPage />;
  if (path === "/data-policy") return <DataPolicyPage />;
  if (path === "/ai-models") return <AiModelsPage />;

  return (
    <div className="min-h-screen font-sans">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <WebDocs />
      <CliDocs />
      <SelfHosting />
      <Roadmap />
      <Cta />
      <Footer />
      <ConsentBanner />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}

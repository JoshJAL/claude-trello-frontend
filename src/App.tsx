import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { CliDocs } from "./sections/CliDocs";
import { Cta } from "./sections/Cta";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sand text-ink font-sans">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <CliDocs />
      <Cta />
      <Footer />
    </div>
  );
}

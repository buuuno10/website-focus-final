import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Personas } from "@/components/site/Personas";
import { FAQ } from "@/components/site/FAQ";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Personas />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

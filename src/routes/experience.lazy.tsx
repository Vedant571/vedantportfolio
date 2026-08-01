import { createLazyFileRoute } from "@tanstack/react-router";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";

export const Route = createLazyFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="pt-20">
      {/* Renders core internships & volunteer work timeline */}
      <Experience />
      <Footer simple />
    </div>
  );
}

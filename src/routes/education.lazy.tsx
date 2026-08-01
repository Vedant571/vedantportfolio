import { createLazyFileRoute } from "@tanstack/react-router";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";

export const Route = createLazyFileRoute("/education")({
  component: EducationPage,
});

function EducationPage() {
  return (
    <div className="pt-20">
      <Education />
      <Footer simple />
    </div>
  );
}

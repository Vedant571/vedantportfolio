import { useEffect } from "react";
import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import Achievements from "./Achievements";
import ContactPreview from "./ContactPreview";
import Footer from "./Footer";

export default function Portfolio() {
  console.log("[Portfolio] render");

  useEffect(() => {
    console.log("[Portfolio] MOUNTED");
    return () => console.log("[Portfolio] UNMOUNTED");
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <Achievements />
      <ContactPreview />
      <Footer />
    </>
  );
}
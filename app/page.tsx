import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Roles } from "@/components/Roles";
import { WhenUseful } from "@/components/WhenUseful";
import { Approach } from "@/components/Approach";
import { WhyWorks } from "@/components/WhyWorks";
import { CtaForm } from "@/components/CtaForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <Trust />
        <Roles />
        <WhenUseful />
        <Approach />
        <WhyWorks />
        <CtaForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

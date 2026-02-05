import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import UseCases from "@/components/UseCases";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <SocialProof />
      <UseCases />
      <ContactForm />
      <Footer />
    </main>
  );
}

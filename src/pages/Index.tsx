import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <FAQ />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;

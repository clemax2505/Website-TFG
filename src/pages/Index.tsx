import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <p><br></br></p>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;

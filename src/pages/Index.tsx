import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;

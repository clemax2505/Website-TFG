import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Cpu, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "Les Meilleures Cartes Graphiques 2024",
      description: "Guide complet des GPU pour le gaming",
      icon: Monitor,
      date: "15 Mars 2024",
      category: "Hardware"
    },
    {
      title: "Comment Choisir son Processeur",
      description: "Comparatif des derniers CPU gaming",
      icon: Cpu,
      date: "10 Mars 2024",
      category: "Guides"
    },
    {
      title: "SSD vs HDD pour le Gaming",
      description: "Impact sur les performances en jeu",
      icon: HardDrive,
      date: "5 Mars 2024",
      category: "Performance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12">Blog Technique</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <article.icon className="w-8 h-8 text-forge-orange mb-4" />
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{article.description}</p>
                <Link to="#" className="text-forge-orange hover:text-forge-red transition-colors mt-4 inline-block">
                  Lire la suite →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
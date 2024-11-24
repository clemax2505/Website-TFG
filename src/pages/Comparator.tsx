import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from "react";

const Comparator = () => {
  const [selectedGames] = useState([
    {
      name: "Cyberpunk 2077",
      "Config A": 85,
      "Config B": 60,
    },
    {
      name: "Fortnite",
      "Config A": 144,
      "Config B": 120,
    },
    {
      name: "Call of Duty",
      "Config A": 120,
      "Config B": 90,
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12">Comparateur de Performances</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Configuration A</h3>
            <ul className="space-y-2 text-gray-300">
              <li>CPU: Intel i9-13900K</li>
              <li>GPU: RTX 4090</li>
              <li>RAM: 32GB DDR5</li>
            </ul>
          </Card>
          
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Configuration B</h3>
            <ul className="space-y-2 text-gray-300">
              <li>CPU: AMD Ryzen 7 7800X3D</li>
              <li>GPU: RTX 4080</li>
              <li>RAM: 32GB DDR5</li>
            </ul>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">FPS Moyens par Jeu</h2>
          <div className="w-full overflow-x-auto">
            <BarChart
              width={800}
              height={400}
              data={selectedGames}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Config A" fill="#FF4D00" />
              <Bar dataKey="Config B" fill="#CC0000" />
            </BarChart>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Comparator;
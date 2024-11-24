import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from "react";

const Comparator = () => {
  const [configA, setConfigA] = useState({
    cpu: "i9-13900K",
    gpu: "RTX 4090",
    budget: 3500
  });

  const [configB, setConfigB] = useState({
    cpu: "Ryzen 7 7800X3D",
    gpu: "RTX 4080",
    budget: 2800
  });

  const cpus = [
    { name: "Intel Core i9-13900K", price: 600 },
    { name: "Intel Core i7-13700K", price: 450 },
    { name: "AMD Ryzen 9 7950X", price: 550 },
    { name: "AMD Ryzen 7 7800X3D", price: 400 },
    { name: "Intel Core i5-13600K", price: 300 }
  ];

  const gpus = [
    { name: "NVIDIA RTX 4090", price: 1600 },
    { name: "NVIDIA RTX 4080", price: 1200 },
    { name: "AMD RX 7900 XTX", price: 1000 },
    { name: "NVIDIA RTX 4070 Ti", price: 800 },
    { name: "AMD RX 7900 XT", price: 900 }
  ];

  const [performanceData] = useState([
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

  const updateConfig = (config: string, type: string, value: string) => {
    const newConfig = config === 'A' ? { ...configA } : { ...configB };
    const items = type === 'cpu' ? cpus : gpus;
    const selectedItem = items.find(item => item.name === value);
    
    if (type === 'cpu') {
      newConfig.cpu = value;
    } else {
      newConfig.gpu = value;
    }

    if (selectedItem) {
      const otherComponentPrice = type === 'cpu' 
        ? gpus.find(g => g.name === newConfig.gpu)?.price || 0
        : cpus.find(c => c.name === newConfig.cpu)?.price || 0;
      
      newConfig.budget = selectedItem.price + otherComponentPrice + 800; // 800€ pour autres composants
    }

    if (config === 'A') {
      setConfigA(newConfig);
    } else {
      setConfigB(newConfig);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-24 flex-grow animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12">Comparateur de Performances</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Configuration A</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Processeur</label>
                <Select value={configA.cpu} onValueChange={(value) => updateConfig('A', 'cpu', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un CPU" />
                  </SelectTrigger>
                  <SelectContent>
                    {cpus.map((cpu) => (
                      <SelectItem key={cpu.name} value={cpu.name}>
                        {cpu.name} - {cpu.price}€
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-2">Carte Graphique</label>
                <Select value={configA.gpu} onValueChange={(value) => updateConfig('A', 'gpu', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un GPU" />
                  </SelectTrigger>
                  <SelectContent>
                    {gpus.map((gpu) => (
                      <SelectItem key={gpu.name} value={gpu.name}>
                        {gpu.name} - {gpu.price}€
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-lg font-semibold text-forge-orange">
                Budget estimé: {configA.budget}€
              </p>
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Configuration B</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Processeur</label>
                <Select value={configB.cpu} onValueChange={(value) => updateConfig('B', 'cpu', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un CPU" />
                  </SelectTrigger>
                  <SelectContent>
                    {cpus.map((cpu) => (
                      <SelectItem key={cpu.name} value={cpu.name}>
                        {cpu.name} - {cpu.price}€
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-2">Carte Graphique</label>
                <Select value={configB.gpu} onValueChange={(value) => updateConfig('B', 'gpu', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un GPU" />
                  </SelectTrigger>
                  <SelectContent>
                    {gpus.map((gpu) => (
                      <SelectItem key={gpu.name} value={gpu.name}>
                        {gpu.name} - {gpu.price}€
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-lg font-semibold text-forge-orange">
                Budget estimé: {configB.budget}€
              </p>
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">FPS Moyens par Jeu</h2>
          <div className="w-full overflow-x-auto">
            <BarChart
              width={800}
              height={400}
              data={performanceData}
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
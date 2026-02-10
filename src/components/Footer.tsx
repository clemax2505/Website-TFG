import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { allPrebuiltConfigs } from "@/data/allPrebuiltConfigs";

const Footer = () => {
  // Split configs into two columns
  const mid = Math.ceil(allPrebuiltConfigs.length / 2);
  const col1 = allPrebuiltConfigs.slice(0, mid);
  const col2 = allPrebuiltConfigs.slice(mid);

  return (
    <footer className="bg-forge-dark mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-forge-orange font-bold mb-4">The Gaming Forge</h3>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos besoins en PC gaming
            </p>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>clementmontagepc@gmail.com</li>
              <li>Champagne Au Mont D'Or, Rhône</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-forge-orange font-bold mb-2">Liens Utiles</h4>
              <ul className="space-y-1">
                <li><Link to="/contact" className="text-gray-400 hover:text-forge-orange text-sm">Contact</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-forge-orange text-sm">Services</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Config column 1 */}
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Configurations</h3>
            <ul className="space-y-1">
              {col1.map((config) => (
                <li key={config.id}>
                  <Link to={`/prebuilt/${config.id}`} className="text-gray-400 hover:text-forge-orange text-sm">
                    {config.name} - {config.price}€
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Config column 2 */}
          <div>
            <h3 className="text-forge-orange font-bold mb-4 invisible">.</h3>
            <ul className="space-y-1">
              {col2.map((config) => (
                <li key={config.id}>
                  <Link to={`/prebuilt/${config.id}`} className="text-gray-400 hover:text-forge-orange text-sm">
                    {config.name} - {config.price}€
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-forge-orange font-bold mb-2">Suivez-nous</h4>
              <a href="https://www.instagram.com/the_gaming_forge/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-forge-orange">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

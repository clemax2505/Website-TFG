import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { allPrebuiltConfigs } from "@/data/allPrebuiltConfigs";

const Footer = () => {
  return (
    <footer className="bg-forge-dark mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-forge-orange font-bold mb-4">The Gaming Forge</h3>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos besoins en PC gaming
            </p>
          </div>
          
          <div className="lg:col-span-1">
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
          
          {/* Configurations PC sur 4 colonnes */}
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Config Gaming</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/prebuilt/thebeginning" className="text-gray-400 hover:text-forge-orange text-sm block">
                  The Beginning<br/>
                  <span className="text-forge-orange font-semibold">850€</span>
                </Link>
              </li>
              <li>
                <Link to="/prebuilt/littleguy" className="text-gray-400 hover:text-forge-orange text-sm block">
                  Little Guy<br/>
                  <span className="text-forge-orange font-semibold">1000€</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Config Pro</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/prebuilt/cheapy" className="text-gray-400 hover:text-forge-orange text-sm block">
                  Cheapy<br/>
                  <span className="text-forge-orange font-semibold">1150€</span>
                </Link>
              </li>
              <li>
                <Link to="/prebuilt/ares" className="text-gray-400 hover:text-forge-orange text-sm block">
                  Ares<br/>
                  <span className="text-forge-orange font-semibold">1475€</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Config Elite</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/prebuilt/thelegend" className="text-gray-400 hover:text-forge-orange text-sm block">
                  The Legend<br/>
                  <span className="text-forge-orange font-semibold">1750€</span>
                </Link>
              </li>
              <li>
                <Link to="/prebuilt/2kking" className="text-gray-400 hover:text-forge-orange text-sm block">
                  2K King<br/>
                  <span className="text-forge-orange font-semibold">2200€</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Config Ultra</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/prebuilt/skillissues" className="text-gray-400 hover:text-forge-orange text-sm block">
                  Skill Issues<br/>
                  <span className="text-forge-orange font-semibold">3325€</span>
                </Link>
              </li>
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

import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-forge-dark mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-forge-orange font-bold mb-4">The Gaming Forge</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour tous vos besoins en PC gaming
            </p>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>clementmontagepc@gmail.com</li>
              <li>01 23 45 67 89</li>
              <li>Champagne Au Mont D'Or, Rhônes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-forge-orange">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-forge-orange">Devis</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-forge-orange">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-forge-orange font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-forge-orange">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/the_gaming_forge/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-forge-orange">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              © 2024 The Gaming Forge. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
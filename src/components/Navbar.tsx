
import { useState, memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLink = memo(({ to, name, isActive, onClick }: { 
  to: string; 
  name: string; 
  isActive: boolean;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className={`block w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-forge-orange bg-forge-dark"
        : "text-gray-300 hover:text-forge-orange"
    }`}
    onClick={onClick}
  >
    {name}
  </Link>
));

NavLink.displayName = 'NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Configurations", path: "/prebuilt" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Suggestions", path: "/suggestions" },
  ];

  const isCurrentPath = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 sm:h-12 sm:w-12" />
              <span className="text-lg sm:text-xl font-bold text-white">The Gaming Forge</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  name={item.name}
                  isActive={isCurrentPath(item.path)}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-forge-dark focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-forge-black glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <NavLink
                  to={item.path}
                  name={item.name}
                  isActive={isCurrentPath(item.path)}
                  onClick={toggleMenu}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);

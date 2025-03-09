import { useState } from "react";
import { Link, useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [location] = useLocation();
  const [isProductsSubmenuOpen, setIsProductsSubmenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t fixed top-[4.5rem] left-0 right-0 z-30 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
      <div className="px-4 py-5 space-y-4">
        <Link
          href="/"
          onClick={handleLinkClick}
          className={`block font-medium ${
            isActive("/") ? "text-[#003300]" : "text-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={handleLinkClick}
          className={`block font-medium ${
            isActive("/about") ? "text-[#003300]" : "text-gray-700"
          }`}
        >
          About Us
        </Link>

        {/* Mobile Products Submenu */}
        <div>
          <button
            onClick={() => setIsProductsSubmenuOpen(!isProductsSubmenuOpen)}
            className="flex items-center justify-between w-full text-gray-700 font-medium"
          >
            Products <i className={`fa-solid fa-chevron-down ml-1 text-xs transition-transform ${isProductsSubmenuOpen ? 'rotate-180' : ''}`}></i>
          </button>
          <div className={`mt-2 pl-4 space-y-2 ${isProductsSubmenuOpen ? 'block' : 'hidden'}`}>
            <Link
              href="/products#electrochlorinators"
              onClick={handleLinkClick}
              className="block text-sm text-gray-600 hover:text-[#003300]"
            >
              Electrochlorinators
            </Link>
            <Link
              href="/products#solar"
              onClick={handleLinkClick}
              className="block text-sm text-gray-600 hover:text-[#003300]"
            >
              Solar Solutions
            </Link>
            <Link
              href="/products#water-disinfection"
              onClick={handleLinkClick}
              className="block text-sm text-gray-600 hover:text-[#003300]"
            >
              Water Disinfection Products
            </Link>
          </div>
        </div>

        <Link
          href="/#services"
          onClick={handleLinkClick}
          className={`block font-medium ${
            location === "/#services" ? "text-[#003300]" : "text-gray-700"
          }`}
        >
          Services
        </Link>
        <Link
          href="/projects"
          onClick={handleLinkClick}
          className={`block font-medium ${
            isActive("/projects") ? "text-[#003300]" : "text-gray-700"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          onClick={handleLinkClick}
          className={`block font-medium ${
            isActive("/contact") ? "text-[#003300]" : "text-gray-700"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Search */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003300] focus:border-transparent text-sm"
          />
          <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
        </div>

        {/* Mobile Social */}
        <div className="flex space-x-6 text-gray-600 mt-4 justify-center">
          <a href="#" className="hover:text-[#003300] transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-[#003300] transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#003300] transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 rounded bg-[#003300] mr-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-[#003300] font-heading font-bold text-xl">
                  Everspark<span className="text-[#889982]">Technologies</span>
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-[#003300]"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium hover:text-[#889982] transition ${
                  isActive("/") ? "text-[#003300]" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium hover:text-[#889982] transition ${
                  isActive("/about") ? "text-[#003300]" : "text-gray-700"
                }`}
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <Link
                  href="/products"
                  className={`font-medium hover:text-[#889982] transition flex items-center ${
                    isActive("/products") ? "text-[#003300]" : "text-gray-700"
                  }`}
                >
                  Products <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
                </Link>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50">
                  <Link
                    href="/products#electrochlorinators"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#003300] hover:text-white"
                  >
                    Electrochlorinators
                  </Link>
                  <Link
                    href="/products#solar"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#003300] hover:text-white"
                  >
                    Solar Solutions
                  </Link>
                  <Link
                    href="/products#water-disinfection"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#003300] hover:text-white"
                  >
                    Water Disinfection Products
                  </Link>
                </div>
              </div>

              <Link
                href="/#services"
                className={`font-medium hover:text-[#889982] transition ${
                  location === "/#services" ? "text-[#003300]" : "text-gray-700"
                }`}
              >
                Services
              </Link>
              
              <Link
                href="/projects"
                className={`font-medium hover:text-[#889982] transition ${
                  isActive("/projects") ? "text-[#003300]" : "text-gray-700"
                }`}
              >
                Projects
              </Link>
              
              <Link
                href="/contact"
                className={`font-medium hover:text-[#889982] transition ${
                  isActive("/contact") ? "text-[#003300]" : "text-gray-700"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Search and Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003300] focus:border-transparent text-sm"
                />
                <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
              </div>
              <div className="flex space-x-3 text-gray-600">
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
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;

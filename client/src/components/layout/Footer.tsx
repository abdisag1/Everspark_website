import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#003300] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 rounded bg-white mr-2 flex items-center justify-center">
                  <span className="text-[#003300] font-bold text-xl">E</span>
                </div>
                <span className="text-white font-heading font-bold text-xl">
                  Everspark<span className="text-[#889982]">Technologies</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              Innovative solutions for sustainable water treatment and renewable energy applications worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products#electrochlorinators" className="text-gray-300 hover:text-white transition">
                  Electrochlorinators
                </Link>
              </li>
              <li>
                <Link href="/products#solar" className="text-gray-300 hover:text-white transition">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/products#water-disinfection" className="text-gray-300 hover:text-white transition">
                  Water Disinfection
                </Link>
              </li>
              <li>
                <Link href="/products#ozone-systems" className="text-gray-300 hover:text-white transition">
                  Ozone Systems
                </Link>
              </li>
              <li>
                <Link href="/products#uv-systems" className="text-gray-300 hover:text-white transition">
                  UV Systems
                </Link>
              </li>
              <li>
                <Link href="/products#water-monitoring" className="text-gray-300 hover:text-white transition">
                  Water Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#889982]"></i>
                <span>
                  123 Technology Park, Innovation Avenue
                  <br />
                  Anytown, 12345, Country
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#889982]"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#889982]"></i>
                <span>info@eversparktechnologies.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-[#889982]"></i>
                <span>Mon-Fri: 8:30 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <div className="mb-4">
            <a href="#" className="inline-block mx-3 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="inline-block mx-3 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="inline-block mx-3 hover:text-white transition">
              Cookie Policy
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Everspark Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

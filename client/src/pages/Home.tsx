import { useEffect } from 'react';
import { useLocation } from 'wouter';
import HeroSection from '@/components/home/HeroSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection';
import PartnersSection from '@/components/home/PartnersSection';
import ContactForm from '@/components/contact/ContactForm';
import GoogleMap from '@/components/contact/GoogleMap';

const Home = () => {
  const [location] = useLocation();

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <PartnersSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f6f4f3] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our solutions? Contact us today and our team will be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info & Map */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-heading font-semibold text-[#003300] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-[#889982] mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Technology Park, Innovation Avenue<br />
                        Anytown, 12345, Country
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#889982] mr-4 mt-1">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#889982] mr-4 mt-1">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">info@eversparktechnologies.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#889982] mr-4 mt-1">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday-Friday: 8:30 AM - 5:30 PM<br />
                        Saturday-Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-medium text-gray-800 mb-3">Connect With Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-[#003300] hover:bg-[#005500] text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="bg-[#003300] hover:bg-[#005500] text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="bg-[#003300] hover:bg-[#005500] text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="bg-[#003300] hover:bg-[#005500] text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <GoogleMap 
                address="123 Technology Park, Innovation Avenue, Anytown, 12345, Country" 
                height="300px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

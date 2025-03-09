import ContactForm from '@/components/contact/ContactForm';
import GoogleMap from '@/components/contact/GoogleMap';

const Contact = () => {
  return (
    <main className="pt-10 pb-20">
      {/* Contact Hero Section */}
      <section className="bg-[#003300] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with our team to discuss your water treatment and renewable energy needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#f6f4f3]">
        <div className="container mx-auto px-4">
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
                height="350px"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#003300] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[#f6f4f3] rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">What areas do you service?</h3>
                <p className="text-gray-700">
                  Everspark Technologies provides products and services worldwide. Our solutions have been implemented across six continents, 
                  and we have experience working in diverse environments and regulatory frameworks.
                </p>
              </div>
              
              <div className="bg-[#f6f4f3] rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Do you offer maintenance services?</h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive maintenance services for all our products. We offer various maintenance packages 
                  to suit different needs, from regular scheduled maintenance to 24/7 emergency support.
                </p>
              </div>
              
              <div className="bg-[#f6f4f3] rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">How quickly can you implement a solution?</h3>
                <p className="text-gray-700">
                  Implementation timelines vary depending on the scope and complexity of the project. Small-scale installations can often be 
                  completed within weeks, while larger municipal or industrial projects may take several months. We work closely with our 
                  clients to establish realistic timelines and meet project deadlines.
                </p>
              </div>
              
              <div className="bg-[#f6f4f3] rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Do you provide training for system operators?</h3>
                <p className="text-gray-700">
                  Absolutely. We offer comprehensive training programs for system operators and maintenance personnel as part of our installation 
                  package. We also provide advanced training options and refresher courses to ensure your team can operate and maintain the systems effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

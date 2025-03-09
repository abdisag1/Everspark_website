const AboutUs = () => {
  return (
    <main className="pt-10 pb-20">
      {/* About Hero Section */}
      <section className="bg-[#003300] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Everspark Technologies</h1>
            <p className="text-xl text-gray-100">
              Pioneering sustainable water and energy solutions since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-[#003300] mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Everspark Technologies was founded with a vision to revolutionize water disinfection and renewable energy solutions. 
                What began as a small research team has grown into a global leader in sustainable technology.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey started when our founder, Dr. Sarah Chen, recognized the critical need for safer, more efficient water treatment 
                technologies in developing regions. This insight led to the development of our first electrochlorinator, which quickly gained 
                recognition for its reliability and effectiveness.
              </p>
              <p className="text-gray-700">
                Today, Everspark Technologies operates in over 30 countries, providing innovative solutions that address the world's most 
                pressing water and energy challenges. Our commitment to sustainability, quality, and innovation remains at the core of everything we do.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Everspark Technologies headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-[#f6f4f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#003300] mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#003300] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-[#003300]"></i>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#003300] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative, reliable, and sustainable solutions for water disinfection and renewable energy that improve lives 
                and protect our environment. We are committed to making advanced technology accessible to communities worldwide, regardless 
                of their infrastructure limitations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#003300] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-[#003300]"></i>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#003300] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in sustainable water and energy solutions, recognized for our innovation, reliability, and positive 
                impact on communities and the environment. We envision a world where clean water and renewable energy are universally accessible, 
                contributing to healthier communities and a more sustainable planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#003300] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we interact with our customers, partners, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to developing solutions that minimize environmental impact and promote the responsible use of resources.
              </p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously explore new technologies and approaches to address evolving challenges in water treatment and renewable energy.
              </p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical standards that earn the trust of our customers and partners.
              </p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-award text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards of quality and performance in all our products, services, and operations.
              </p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of partnerships and work closely with our clients, communities, and industry stakeholders.
              </p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#889982] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-globe text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">Global Perspective</h3>
              <p className="text-gray-700">
                We embrace diversity and design solutions that address the unique needs of different regions and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-[#f6f4f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#003300] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals guiding Everspark Technologies towards a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="Dr. Sarah Chen"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-1">Dr. Sarah Chen</h3>
                <p className="text-[#889982] font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in water treatment technology, Dr. Chen leads Everspark's vision and strategic direction.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="Michael Rodriguez"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-1">Michael Rodriguez</h3>
                <p className="text-[#889982] font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  Michael oversees the development of Everspark's innovative technologies and leads our R&D initiatives.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="Amara Okafor"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-1">Amara Okafor</h3>
                <p className="text-[#889982] font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Amara ensures operational excellence across Everspark's global manufacturing and project deployment.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-[#003300]"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#003300] mb-4">
              Certifications & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f6f4f3] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <i className="fas fa-certificate text-[#003300] text-2xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold text-[#003300] mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management System certified</p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <i className="fas fa-leaf text-[#003300] text-2xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold text-[#003300] mb-2">ISO 14001:2015</h3>
              <p className="text-gray-600">Environmental Management System certified</p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <i className="fas fa-award text-[#003300] text-2xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold text-[#003300] mb-2">2022 Innovation Award</h3>
              <p className="text-gray-600">Global Water Technologies Association</p>
            </div>

            <div className="bg-[#f6f4f3] p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <i className="fas fa-star text-[#003300] text-2xl"></i>
              </div>
              <h3 className="text-lg font-heading font-semibold text-[#003300] mb-2">5-Star Safety Rating</h3>
              <p className="text-gray-600">International Safety Council</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

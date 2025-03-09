const services = [
  {
    icon: "fas fa-tools",
    title: "Installation & Commissioning",
    description: "Professional installation and commissioning of all Everspark products by our team of certified technicians.",
  },
  {
    icon: "fas fa-wrench",
    title: "Maintenance & Repair",
    description: "Scheduled maintenance and emergency repair services to ensure your systems operate at peak efficiency.",
  },
  {
    icon: "fas fa-clipboard-check",
    title: "System Audits & Optimization",
    description: "Comprehensive system audits and performance optimization to maximize efficiency and reduce operational costs.",
  },
  {
    icon: "fas fa-project-diagram",
    title: "Custom System Design",
    description: "Tailored system design services to address specific water treatment and energy requirements.",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Training & Capacity Building",
    description: "Comprehensive training programs for operators and maintenance personnel to ensure proper system management.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Technical Support",
    description: "Round-the-clock technical support to address any operational issues and minimize downtime.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive service solutions to support your water treatment and renewable energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f6f4f3] p-8 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#003300] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[#003300]`}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

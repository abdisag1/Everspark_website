import { Link } from "wouter";

const solutions = [
  {
    title: "Electrochlorinators Solutions",
    description: "On-site chlorine generation systems that provide a safe, cost-effective alternative to traditional chlorine disinfection methods.",
    image: "https://images.unsplash.com/photo-1626285470057-b40b67d19ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
    alt: "Electrochlorinator solution",
    benefits: [
      "Reduced chemical handling risks",
      "Lower operational costs",
      "Environmentally friendly process",
    ],
    link: "/products#electrochlorinators",
  },
  {
    title: "Water Disinfection Solutions",
    description: "Advanced water treatment systems that ensure safe, clean water for communities, industries, and municipalities.",
    image: "https://images.unsplash.com/photo-1527267207156-3372670819dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
    alt: "Water disinfection solution",
    benefits: [
      "Effective pathogen elimination",
      "Customizable for various applications",
      "Minimal maintenance requirements",
    ],
    link: "/products#water-disinfection",
  },
  {
    title: "Solar Solutions",
    description: "Renewable energy systems that power our water treatment technologies and provide sustainable energy options.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
    alt: "Solar solution",
    benefits: [
      "Reduced energy costs",
      "Zero-emission operation",
      "Off-grid capabilities",
    ],
    link: "/products#solar",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sustainable technology solutions designed to address modern energy and water challenges with efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#f6f4f3] rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img src={solution.image} alt={solution.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-[#003300] mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="mb-6 space-y-2">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href={solution.link}>
                  <a className="inline-block text-[#005500] font-medium hover:text-[#003300] transition">
                    Learn more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

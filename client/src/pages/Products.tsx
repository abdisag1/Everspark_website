import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@shared/schema';

type ProductCategory = 'all' | 'electrochlorinators' | 'water-disinfection' | 'solar';

const Products = () => {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.includes('#')) {
      const category = location.split('#')[1];
      if (['electrochlorinators', 'water-disinfection', 'solar'].includes(category)) {
        setActiveCategory(category as ProductCategory);
        const element = document.getElementById(category);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location]);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const filterProducts = (products: Product[] | undefined, category: ProductCategory) => {
    if (!products) return [];
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
  };

  const filteredProducts = filterProducts(products, activeCategory);

  return (
    <main className="pt-10 pb-20">
      {/* Products Hero Section */}
      <section className="bg-[#003300] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-100">
              Innovative and sustainable solutions for water treatment and renewable energy
            </p>
          </div>
        </div>
      </section>

      {/* Products Filtering */}
      <section className="py-12 bg-[#f6f4f3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-8">
            <div className="inline-flex flex-wrap rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'all' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } rounded-l-lg`}
              >
                All Products
              </button>
              <button
                id="electrochlorinators"
                onClick={() => setActiveCategory('electrochlorinators')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'electrochlorinators' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Electrochlorinators
              </button>
              <button
                id="water-disinfection"
                onClick={() => setActiveCategory('water-disinfection')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'water-disinfection' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Water Disinfection
              </button>
              <button
                id="solar"
                onClick={() => setActiveCategory('solar')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'solar' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } rounded-r-lg`}
              >
                Solar Solutions
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003300] focus:border-transparent"
              />
              <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </div>
          </div>

          {/* Products Display */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-96 animate-pulse">
                  <div className="h-56 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-6"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-3xl mb-4 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">
                We couldn't find any products matching your selection. Try changing your filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Detailed Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div id="electrochlorinators" className="mb-20 scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-heading font-bold text-[#003300] mb-6">Electrochlorinator Solutions</h2>
                <p className="text-gray-700 mb-4">
                  Our electrochlorinator products generate chlorine on-site using just salt, water, and electricity, 
                  eliminating the need for storing and handling hazardous chemicals. These systems are ideal for 
                  municipalities, water treatment plants, swimming pools, and industrial applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Lower operational costs than traditional chlorination</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Enhanced safety profile with no hazardous chemical transport</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Reduced environmental impact and carbon footprint</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Adaptable to various capacities from small to industrial scale</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1626285470057-b40b67d19ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Everspark electrochlorinator system"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="water-disinfection" className="mb-20 scroll-mt-24">
            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <h2 className="text-3xl font-heading font-bold text-[#003300] mb-6">Water Disinfection Products</h2>
                <p className="text-gray-700 mb-4">
                  Our comprehensive range of water disinfection solutions includes UV systems, ozone generators, 
                  and advanced filtration technologies. These products ensure safe, clean water for drinking, 
                  industrial processes, and recreational facilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Multiple disinfection methods to address diverse contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Modular designs for easy integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Energy-efficient operation with low maintenance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Remote monitoring capabilities for real-time water quality assessment</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1527267207156-3372670819dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Everspark water disinfection system"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="solar" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-heading font-bold text-[#003300] mb-6">Solar Solutions</h2>
                <p className="text-gray-700 mb-4">
                  Our solar product line offers renewable energy solutions that can be integrated with our water treatment technologies 
                  or deployed independently. From off-grid solar pumps to complete solar-powered water treatment systems, we provide 
                  sustainable energy alternatives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Zero-emission power generation for eco-conscious operations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Reduced operational costs with free solar energy</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Independence from unreliable grid power in remote locations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                    <span>Scalable systems that can grow with your needs</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Everspark solar energy solution"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;

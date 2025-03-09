import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../products/ProductCard';
import { Product } from '@shared/schema';

type ProductCategory = 'all' | 'electrochlorinators' | 'water-disinfection' | 'solar';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const filterProducts = (products: Product[] | undefined, category: ProductCategory) => {
    if (!products) return [];
    if (category === 'all') return products.slice(0, 6);
    return products
      .filter(product => product.category === category)
      .slice(0, 6);
  };

  const filteredProducts = filterProducts(products, activeCategory);

  return (
    <section id="products" className="py-20 bg-[#f6f4f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative products engineered for efficiency, reliability, and sustainability.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="inline-flex rounded-md shadow-sm" role="group">
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/products">
              <a className="inline-block bg-[#005500] hover:bg-[#003300] text-white font-medium py-3 px-8 rounded-full transition">
                View All Products
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

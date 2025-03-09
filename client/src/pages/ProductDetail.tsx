import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Product } from "@shared/schema";
import ProductCard from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id || "0");

  const { data: product, isLoading: productLoading } = useQuery<Product>({
    queryKey: [`/api/products/${productId}`],
    enabled: !!productId,
  });

  const { data: relatedProducts, isLoading: relatedLoading } = useQuery<Product[]>({
    queryKey: [`/api/products/related/${productId}`],
    enabled: !!productId,
  });

  if (productLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003300]"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products">
          <a className="inline-block bg-[#003300] hover:bg-[#005500] text-white font-medium py-2 px-6 rounded transition">
            Back to Products
          </a>
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-10 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm">
              <Link href="/">
                <a className="text-gray-500 hover:text-[#003300]">Home</a>
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/products">
                <a className="text-gray-500 hover:text-[#003300]">Products</a>
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#003300]">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Product Categories Sidebar */}
            <div className="bg-[#f6f4f3] p-6 rounded-lg shadow md:col-span-1">
              <h3 className="text-xl font-heading font-semibold text-[#003300] mb-4">Product Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products#electrochlorinators">
                    <a className="block p-2 hover:bg-white rounded transition">
                      Electrochlorinators
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products#water-disinfection">
                    <a className="block p-2 hover:bg-white rounded transition">
                      Water Disinfection Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products#solar">
                    <a className="block p-2 hover:bg-white rounded transition">
                      Solar Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products#ozone-systems">
                    <a className="block p-2 hover:bg-white rounded transition">
                      Ozone Systems
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products#uv-systems">
                    <a className="block p-2 hover:bg-white rounded transition">
                      UV Systems
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products#water-monitoring">
                    <a className="block p-2 hover:bg-white rounded transition">
                      Water Monitoring
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Image */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:col-span-1">
              <h1 className="text-3xl font-heading font-bold text-[#003300] mb-2">{product.name}</h1>
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                product.category === 'electrochlorinators' ? 'text-[#003300] bg-green-100' :
                product.category === 'water-disinfection' ? 'text-blue-700 bg-blue-100' :
                'text-yellow-700 bg-yellow-100'
              }`}>
                {product.category === 'electrochlorinators' ? 'Electrochlorinator' :
                 product.category === 'water-disinfection' ? 'Water Disinfection' :
                 'Solar Solution'}
              </span>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-[#889982] mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center mb-8">
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#003300] hover:text-[#005500] transition"
                >
                  <i className="far fa-file-pdf text-2xl mr-2"></i>
                  <span className="font-medium">Download Datasheet</span>
                </a>
              </div>

              <button className="bg-[#005500] hover:bg-[#003300] text-white font-medium py-3 px-8 rounded-full transition w-full">
                Request Quote
              </button>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-[#003300] mb-6">Technical Specifications</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {product.specifications?.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#f6f4f3]' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {spec.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#003300] mb-6">Related Products</h2>
            {relatedLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-80 animate-pulse">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                      <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts?.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;

import { Link } from "wouter";
import { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

const getCategoryClass = (category: string) => {
  switch (category) {
    case 'electrochlorinators':
      return 'text-[#003300] bg-green-100';
    case 'water-disinfection':
      return 'text-blue-700 bg-blue-100';
    case 'solar':
      return 'text-yellow-700 bg-yellow-100';
    default:
      return 'text-[#003300] bg-green-100';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'electrochlorinators':
      return 'Electrochlorinator';
    case 'water-disinfection':
      return 'Water Disinfection';
    case 'solar':
      return 'Solar Solution';
    default:
      return category;
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${getCategoryClass(product.category)}`}>
          {getCategoryLabel(product.category)}
        </span>
        <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.shortDescription}
        </p>
        <Link href={`/products/${product.id}`}>
          <a className="inline-block mt-2 bg-[#003300] hover:bg-[#005500] text-white text-sm font-medium py-2 px-4 rounded transition">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

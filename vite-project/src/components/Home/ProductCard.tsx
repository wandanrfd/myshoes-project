import { useNavigate } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import type { Product } from "../../types/index.ts";
import { useCart } from "../../context/CartContext.tsx";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "Rp ";

  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={Array.isArray(product.image) ? product.image[0] : product.image}
          alt={product.name}
          className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.discount && product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-amber-600 text-white rounded-full">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3.5 text-zinc-700">
        <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && product.rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="size-3 text-amber-500 fill-amber-500" />
            <span className="text-xs font-medium text-gray-800">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400">
              ({product.reviewCount})
            </span>
          </div>
        )}
        {/* Price + Add */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 truncate">
            <span className="text-base font-medium">
              {currency}
              {product.offerPrice
                ? product.offerPrice.toLocaleString()
                : product.price.toLocaleString()}
            </span>
            {product.unit && (
              <span className="text-xs text-gray-400 block">
                /{product.unit}
              </span>
            )}
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through ml-1.5">
                {currency}
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="size-7 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 hover:bg-amber-700 transition-colors active:scale-95"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

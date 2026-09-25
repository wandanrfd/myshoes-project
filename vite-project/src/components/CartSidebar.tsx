import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ShoppingBagIcon,
  XIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
  ArrowRightIcon,
} from "lucide-react";

const CartSidebar = () => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "Rp ";

  const {
    items,
    updateQuantity,
    removeFromCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const navigate = useNavigate();

  if (!isCartOpen) return null;

  // Bebas ongkir jika total belanja > 200.000, jika kurang dikenakan ongkir 15.000 (bisa disesuaikan)
  const deliveryFee = cartTotal > 200000 ? 0 : 15000;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-app-border">
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="size-5" />
            <h2 className="text-lg font-medium">Your Cart</h2>
            <span className="px-2 py-0.5 text-xs font-semibold bg-app-cream rounded-full">
              {items.length} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl hover:bg-app-cream transition-colors"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="size-16 text-app-border mb-4" />
              <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
            </div>
          ) : (
            items.map((item) => {
              // 1. Dapatkan harga efektif (Prioritaskan offerPrice jika ada)
              const activePrice = item.product.offerPrice ?? item.product.price;

              return (
                <div
                  key={item.product._id}
                  className="flex gap-3 bg-app-cream rounded-xl p-3"
                >
                  <img
                    src={
                      Array.isArray(item.product.image)
                        ? item.product.image[0]
                        : (item.product.image as string)
                    }
                    alt={item.product.name}
                    className="size-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold truncate">
                      {item.product.name}
                    </h4>

                    {/* 2. Menampilkan Harga Satuan Aktif */}
                    <p className="text-xs text-app-text-light">
                      {currency}
                      {activePrice.toLocaleString()}
                      {item.product.unit ? ` / ${item.product.unit}` : ""}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity - 1)
                          }
                          className="size-7 rounded-lg bg-white border border-app-border flex-center"
                        >
                          <MinusIcon className="size-3" />
                        </button>

                        <span className="text-sm font-semibold w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.product._id, item.quantity + 1)
                          }
                          className="size-7 rounded-lg bg-white border border-app-border flex-center"
                        >
                          <PlusIcon className="size-3" />
                        </button>
                      </div>

                      {/* 3. Menampilkan Subtotal Per Item (Harga Aktif x Jumlah) */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">
                          {currency}
                          {(activePrice * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product._id)}
                          className="p-1 text-app-text-light hover:text-app-error transition-colors"
                        >
                          <Trash2Icon className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer (Checkout & Summary) */}
        {items.length > 0 && (
          <div className="p-5 border-t border-app-border space-y-3 bg-white">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-app-text-light">
                <span>Subtotal</span>
                <span>
                  {currency}
                  {cartTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-app-text-light">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `${currency}${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-app-border">
                <span>Total</span>
                <span>
                  {currency}
                  {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
              className="w-full py-3 bg-app-orange text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-app-orange/90 transition-colors"
            >
              Proceed to Checkout
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

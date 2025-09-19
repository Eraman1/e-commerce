"use client";

import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { products } from "@/data/product";

export default function ProductDetailPage() {
    const { id } = useParams();
    const { addToCart, getItemQuantity, updateQuantity } = useCart();

    // 🔑 Find product from products array using ID from URL
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">
                    Product not found
                </h1>
            </div>
        );
    }

    const quantity = getItemQuantity(product.id.toString());

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto rounded-lg shadow"
                />

                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    {/* <p className="text-gray-600 mb-4">{product.description}</p> */}

                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-teal-600">
                            ₹{product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-sm line-through text-gray-400">
                            ₹{product.originalPrice.toFixed(2)}
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{product.discount}%
                        </span>
                    </div>

                    {quantity === 0 ? (
                        <Button
                            className="w-full flex items-center gap-2 bg-teal-600 hover:bg-teal-700"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                        </Button>
                    ) : (
                        <div className="flex items-center justify-between bg-green-600 text-white rounded-md py-2 px-4">
                            <button
                                className="text-lg font-bold"
                                onClick={() =>
                                    updateQuantity(product.id.toString(), quantity - 1)
                                }
                            >
                                −
                            </button>
                            <span className="font-semibold">{quantity}</span>
                            <button
                                className="text-lg font-bold"
                                onClick={() =>
                                    updateQuantity(product.id.toString(), quantity + 1)
                                }
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

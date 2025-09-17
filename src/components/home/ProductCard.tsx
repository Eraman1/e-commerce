"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface Product {
    id: string;
    title: string;
    category: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    isFavorite?: boolean;
}

const DiscountBadge = ({ discount }: { discount: number }) => (
    <div className="absolute top-1 left-1 bg-teal-500 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded-sm">
        -{discount}%
    </div>
);

const FavoriteButton = ({
    isFavorite = false,
    onToggle,
}: {
    isFavorite?: boolean;
    onToggle?: () => void;
}) => (
    <button
        onClick={onToggle}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
    >
        <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
        />
    </button>
);

const ProductCard = ({ product, onToggleFavorite }: { product: Product; onToggleFavorite?: (id: string) => void; }) => {
    const { getItemQuantity, addToCart, updateQuantity } = useCart();
    const quantity = getItemQuantity(product.id);

    return (
        <Card className="relative overflow-hidden hover:shadow-lg py-2 transition-shadow">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="relative">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                    <DiscountBadge discount={product.discount} />
                    <FavoriteButton
                        isFavorite={product.isFavorite}
                        onToggle={() => onToggleFavorite?.(product.id)}
                    />
                </div>

                <div className="p-4 pb-2 flex flex-col flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {product.category}
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2">
                        {product.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-lg font-bold text-teal-600">
                            ₹{product.salePrice.toFixed(2)}
                        </span>
                    </div>

                    {quantity === 0 ? (
                        <Button
                            onClick={() => addToCart(product)}
                            variant="outline"
                            size="sm"
                            className="w-full flex items-center gap-2 mt-auto"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Add to cart
                        </Button>
                    ) : (
                        <div className="flex items-center justify-between bg-green-600 text-white rounded-md py-1 px-2 mt-auto">
                            <button
                                className="text-lg font-bold px-2"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                            >
                                −
                            </button>
                            <span className="font-semibold">{quantity}</span>
                            <button
                                className="text-lg font-bold px-2"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;

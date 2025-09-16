'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

// Types
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

// Discount Badge
const DiscountBadge = ({ discount }: { discount: number }) => (
    <div className="absolute top-1 left-1 bg-teal-500 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded-sm">
        -{discount}%
    </div>
);

// Favorite Button
const FavoriteButton = ({ isFavorite = false, onToggle }: { isFavorite?: boolean; onToggle?: () => void }) => (
    <button
        onClick={onToggle}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
    >
        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
    </button>
);

// Product Card
const ProductCard = ({
    product,
    onAddToCart,
    onToggleFavorite,
}: {
    product: Product;
    onAddToCart?: (productId: string) => void;
    onToggleFavorite?: (productId: string) => void;
}) => (
    <Card className="relative overflow-hidden hover:shadow-lg py-2 transition-shadow">
        <CardContent className="p-0 flex flex-col h-full">
            <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <DiscountBadge discount={product.discount} />
                <FavoriteButton isFavorite={product.isFavorite} onToggle={() => onToggleFavorite?.(product.id)} />
            </div>

            <div className="p-4 pb-2 flex flex-col flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</div>
                <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2">{product.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
                    <span className="text-lg font-bold text-teal-600">₹{product.salePrice.toFixed(2)}</span>
                </div>

                <Button
                    onClick={() => onAddToCart?.(product.id)}
                    variant="outline"
                    size="sm"
                    className="w-full mb-0 flex items-center gap-2 mt-auto"
                >
                    <ShoppingCart className="w-4 h-4" />
                    Add to cart
                </Button>
            </div>
        </CardContent>
    </Card>
);

// Product Grid
const ProductGrid = ({
    products,
    onAddToCart,
    onToggleFavorite,
}: {
    products: Product[];
    onAddToCart?: (productId: string) => void;
    onToggleFavorite?: (productId: string) => void;
}) => (
    <div className="flex-1">
        <div className="mb-6">
            <p className="text-gray-600">
                Everything you need for safe and comfortable travels with your little one
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    </div>
);

export default ProductGrid;

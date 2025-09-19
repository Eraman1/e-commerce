'use client';

import React from 'react';
import { Heart, ShoppingCart, Package, HelpCircle, Truck, RefreshCw, Phone, Tag, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Types
interface Product {
    id: string;
    title: string;
    category: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    isFavorite?: boolean;
}

// Discount Badge Component
const DiscountBadge = ({ discount }: { discount: number }) => (
    <div className="absolute top-1 left-1 bg-teal-500 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded-sm">
        -{discount}%
    </div>

);

// Favorite Button Component
const FavoriteButton = ({
    isFavorite = false,
    onToggle
}: {
    isFavorite?: boolean;
    onToggle?: () => void;
}) => (
    <button
        onClick={onToggle}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
    >
        <Heart
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
    </button>
);

// Product Card Component
const ProductCard = ({ product, onAddToCart, onToggleFavorite }: {
    product: Product;
    onAddToCart?: (productId: string) => void;
    onToggleFavorite?: (productId: string) => void;
}) => (
    <Card className="relative overflow-hidden hover:shadow-lg py-2 transition-shadow">
        <CardContent className="p-0 flex flex-col h-full">
            <div className="relative">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="100vw"
                />
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
                        ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-lg font-bold text-teal-600">
                        ${product.salePrice.toFixed(2)}
                    </span>
                </div>

                {/* Add to Cart button pinned at the bottom */}
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

// Quick Links Sidebar Component
const QuickLinks = () => (
    <div className="w-64 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
        <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Package className="w-4 h-4 text-teal-600" />
                All Products
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Tag className="w-4 h-4 text-blue-600" />
                New Arrivals
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <DollarSign className="w-4 h-4 text-yellow-600" />
                Under $50
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Package className="w-4 h-4 text-orange-600" />
                My Orders
            </a>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Customer Support</h3>
        <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <HelpCircle className="w-4 h-4 text-red-600" />
                Help Center
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Truck className="w-4 h-4 text-red-600" />
                Shipping Info
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <RefreshCw className="w-4 h-4 text-blue-600" />
                Returns & Exchanges
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Phone className="w-4 h-4 text-red-600" />
                Contact Us
            </a>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Special Offers</h3>
    </div>
);

// Product Grid Component
const ProductGrid = ({ products, onAddToCart, onToggleFavorite }: {
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

// Main Product Listing Component
const ProductListing = () => {
    // Sample product data
    const products: Product[] = [
        {
            id: '1',
            title: 'Baby Diaper Changing',
            category: 'BABY DEALS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 55.90,
            salePrice: 50.31,
            discount: 10,
            isFavorite: true
        },
        {
            id: '2',
            title: 'Delta Children Disney Princess Plastic Toddler Canopy Bed, Pink',
            category: 'BABY DEALS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 85.20,
            salePrice: 74.98,
            discount: 12,
            isFavorite: false
        },
        {
            id: '3',
            title: 'Disney/Pixar Cars Lightning McQueen Toddler-To-Twin Bed',
            category: 'BEST SELLERS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 419.99,
            salePrice: 356.99,
            discount: 15,
            isFavorite: true
        },
        {
            id: '4',
            title: 'Fisher-Price Tissue Fun Activity Cube Baby Sensory Crinkle Toys',
            category: 'BABY TOYS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 15.00,
            salePrice: 13.20,
            discount: 12,
            isFavorite: true
        },
        {
            id: '5',
            title: 'Garanimals Toddler Boys Cargo Short',
            category: 'TODDLER CLOTHING',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 12.00,
            salePrice: 9.51,
            discount: 19,
            isFavorite: false
        },
        {
            id: '6',
            title: 'Hudson Baby Infant Boy Plush Sleep and Play, Space Adventure',
            category: 'BEST SELLERS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 16.99,
            salePrice: 15.29,
            discount: 10,
            isFavorite: false
        },
        {
            id: '7',
            title: 'Little Star Organic Baby Boy 2 Pk Rompers, Size Newborn',
            category: 'TODDLER CLOTHING',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 18.00,
            salePrice: 16.20,
            discount: 10,
            isFavorite: false
        },
        {
            id: '8',
            title: 'Pamo Babe Unisex Bassinet Nursery Center Flat Play Yard Crib',
            category: 'BEST SELLERS',
            image: 'https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg',
            originalPrice: 199.99,
            salePrice: 169.99,
            discount: 15,
            isFavorite: false
        },
        // {
        //     id: '8',
        //     title: 'Pamo Babe Unisex Bassinet Nursery Center Flat Play Yard Crib',
        //     category: 'BEST SELLERS',
        //     image: '/api/placeholder/300/200',
        //     originalPrice: 199.99,
        //     salePrice: 169.99,
        //     discount: 15,
        //     isFavorite: false
        // }
    ];

    const handleAddToCart = (productId: string) => {
        console.log('Adding to cart:', productId);
    };

    const handleToggleFavorite = (productId: string) => {
        console.log('Toggling favorite:', productId);
    };

    return (
        <div className="w-full mx-auto p-6">
            <div className="flex gap-6">
                <QuickLinks />
                <ProductGrid
                    products={products}
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                />
            </div>
        </div>
    );
};

export default ProductListing;
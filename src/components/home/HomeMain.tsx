'use client';

import React from 'react';
import QuickLinks from '@/components/home/QuickLinks';
import ProductGrid, { Product } from '@/components/home/ProductGrid';

const ProductListing = () => {
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
    ];

    const handleAddToCart = (productId: string) => console.log('Adding to cart:', productId);
    const handleToggleFavorite = (productId: string) => console.log('Toggling favorite:', productId);

    return (
        <div className="w-full mx-auto p-6 flex gap-6">
            <QuickLinks />
            <ProductGrid products={products} onAddToCart={handleAddToCart} onToggleFavorite={handleToggleFavorite} />
        </div>
    );
};

export default ProductListing;

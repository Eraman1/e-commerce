"use client";

import React from "react";
import QuickLinks from "@/components/home/QuickLinks";
import { products } from "@/data/product";
import ProductGrid from "./ProductGrid";
import BrandWeLove from "./BrandWeLove";
import Banner from "./Banner";

const HomeMain = () => {
    const handleToggleFavorite = (productId: string) =>
        console.log("❤️ Toggle favorite:", productId);

    return (
        <div className="w-full mx-auto px-4 p-6 flex gap-6">
            <QuickLinks />
            <div>
                <Banner
                    title="Mega Electronics Sale 🔥"
                    subtitle="Get up to 70% off on laptops, phones, and accessories. Limited time only!"
                    ctaText="Shop Now"
                    ctaLink="/shop"
                    image="https://cdn.pixabay.com/photo/2016/05/30/23/24/ducks-1426010_1280.jpg" // Place this image inside public/banners/
                />
                <ProductGrid
                    products={products}
                    onToggleFavorite={handleToggleFavorite}
                />
                <BrandWeLove />
            </div>
        </div>
    );
};

export default HomeMain;

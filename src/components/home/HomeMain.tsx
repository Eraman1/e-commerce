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
                    image="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" // Place this image inside public/banners/
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

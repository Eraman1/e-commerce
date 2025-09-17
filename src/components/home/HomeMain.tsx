"use client";

import React from "react";
import QuickLinks from "@/components/home/QuickLinks";
import { products } from "@/data/product";
import ProductGrid from "./ProductGrid";

const HomeMain = () => {
    const handleToggleFavorite = (productId: string) =>
        console.log("❤️ Toggle favorite:", productId);

    return (
        <div className="w-full mx-auto p-6 flex gap-6">
            <QuickLinks />
            <ProductGrid
                products={products}
                onToggleFavorite={handleToggleFavorite}
            />
        </div>
    );
};

export default HomeMain;

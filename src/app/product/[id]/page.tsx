"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductDetail() {
    const { id } = useParams();

    // In real app, fetch product by ID from API or DB
    const product = {
        id,
        title: "Baby Diaper Changing",
        image: "https://m.media-amazon.com/images/I/71GmKVRJd-L._SX679_.jpg",
        description:
            "A comfortable and safe diaper changing solution for your baby.",
        price: 50.31,
        originalPrice: 55.9,
        discount: 10,
    };

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
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-teal-600">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm line-through text-gray-400">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{product.discount}%
                        </span>
                    </div>

                    <Button className="w-full flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}



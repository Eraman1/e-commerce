'use client';

import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, Clock, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

    const subtotal = cart.reduce(
        (acc, product) => acc + product.salePrice * product.quantity,
        0
    );

    const totalSavings = cart.reduce((acc, product) => {
        const originalPrice = product.originalPrice || product.salePrice * 1.2;
        return acc + (originalPrice - product.salePrice) * product.quantity;
    }, 0);

    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 transition-opacity"
                    onClick={onClose}
                />
            )}

            <div
                className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-2 border-b bg-white sticky top-0 z-10">
                        <div className="flex items-center space-x-2">
                            <ShoppingBag className="w-5 h-5 text-gray-600" />
                            <h2 className="text-lg font-bold text-gray-900">My Cart</h2>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {cart.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center  p-4 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                <ShoppingBag className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-base font-medium text-gray-900 mb-1">
                                Your cart is empty
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Add some products to get started
                            </p>
                            <Button onClick={onClose} className="w-full max-w-xs text-sm py-1">
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <>


                            <div className="flex-1 overflow-y-auto px-2 space-y-2 py-2">
                                {totalSavings > 0 && (
                                    <div className=" p-2 bg-blue-50 rounded-lg border border-blue-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium text-blue-800">
                                                Your total savings
                                            </span>
                                            <span className="text-sm font-bold text-blue-600">
                                                ₹{Math.round(totalSavings)}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className=" p-2 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <Clock className="w-3 h-3 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-gray-900">
                                                Delivery in 8 minutes
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Shipment of {totalItems} item{totalItems > 1 ? "s" : ""}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {cart.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-start space-x-2 p-2 bg-white border rounded-md hover:shadow-sm transition-shadow"
                                    >
                                        <Link href={`/product/${product.id}`} onClick={onClose}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                                            />
                                        </Link>

                                        <div className="flex-1 min-w-0">
                                            <Link href={`/product/${product.id}`} onClick={onClose}>
                                                <h4 className="font-medium text-sm text-gray-900 line-clamp-2 hover:text-teal-600 transition-colors">
                                                    {product.title}
                                                </h4>
                                            </Link>

                                            <div className="flex items-center space-x-1 mt-0.5">
                                                <span className="font-semibold text-sm text-gray-900">
                                                    ₹{product.salePrice}
                                                </span>
                                                {product.originalPrice &&
                                                    product.originalPrice > product.salePrice && (
                                                        <span className="text-xs text-gray-500 line-through">
                                                            ₹{product.originalPrice}
                                                        </span>
                                                    )}
                                            </div>

                                            <p className="text-xs text-gray-500 mt-0.5">1 unit</p>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center space-x-1">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                product.id,
                                                                Math.max(1, product.quantity - 1)
                                                            )
                                                        }
                                                        className="w-6 h-6 p-0 rounded-full cursor-pointer"
                                                        disabled={product.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </Button>
                                                    <span className="w-6 text-center font-medium text-white bg-green-600 rounded px-1 py-0.5 text-xs">
                                                        {product.quantity}
                                                    </span>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            updateQuantity(product.id, product.quantity + 1)
                                                        }
                                                        className="cursor-pointer w-6 h-6 p-0 rounded-full"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </Button>
                                                </div>

                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeFromCart(product.id)}
                                                    className="cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 px-1 py-0.5 text-xs"
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t bg-white p-2 space-y-2">
                                <Button
                                    variant="outline"
                                    onClick={clearCart}
                                    className="cursor-pointer w-full text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 text-sm py-1"
                                >
                                    Clear Cart
                                </Button>

                                <div className="bg-green-600 text-white p-3 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold">
                                                ₹{Math.round(subtotal)}
                                            </span>
                                            <p className="text-xs text-green-100">TOTAL</p>
                                        </div>
                                        <Button
                                            className="bg-white text-green-600 hover:bg-gray-50 font-medium flex items-center space-x-1 text-sm py-1 cursor-pointer"
                                            onClick={() => console.log("Proceeding to checkout...")}
                                        >
                                            <span>Login to Proceed</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </Button>
                                    </div>
                                    {/* <p className="text-xs text-green-100">
                                            Shipping & taxes calculated at checkout
                                        </p> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

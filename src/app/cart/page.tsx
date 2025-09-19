'use client';

import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

    const subtotal = cart.reduce(
        (acc, product) => acc + product.salePrice * product.quantity,
        0
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p className="mb-4">Your cart is empty.</p>
                    <Button asChild>
                        <Link href="/">Continue Shopping</Link>
                    </Button>
                </div>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((product) => (
                            <li
                                key={product.id}
                                className="flex justify-between items-center border p-3 rounded-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <Link href={`/product/${product.id}`}>
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            width={64} // ✅ Width in pixels (16 * 4 = 64px)
                                            height={64} // ✅ Height in pixels
                                            className="rounded-md object-cover"
                                        />
                                    </Link>
                                    <div>
                                        <Link href={`/product/${product.id}`}>
                                            <p className="font-medium">{product.title}</p>
                                        </Link>
                                        <p className="text-sm text-gray-500">
                                            ₹{product.salePrice.toFixed(2)} each
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                className="px-2 py-1 border rounded"
                                                onClick={() =>
                                                    updateQuantity(product.id, product.quantity - 1)
                                                }
                                                disabled={product.quantity <= 1}
                                            >
                                                −
                                            </button>
                                            <span>{product.quantity}</span>
                                            <button
                                                className="px-2 py-1 border rounded"
                                                onClick={() =>
                                                    updateQuantity(product.id, product.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="font-semibold">
                                        ₹{(product.salePrice * product.quantity).toFixed(2)}
                                    </p>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removeFromCart(product.id)}
                                        className="mt-2"
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                        <div>
                            <p className="text-lg font-semibold">
                                Subtotal: ₹{subtotal.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                                Shipping & taxes calculated at checkout.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" onClick={clearCart}>
                                Clear Cart
                            </Button>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

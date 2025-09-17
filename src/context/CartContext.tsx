'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Product } from '@/components/home/ProductCard';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (id: string, qty: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getItemQuantity: (id: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // ✅ Load cart from localStorage when component mounts
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);

    // ✅ Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            const updated = existing
                ? prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...prev, { ...product, quantity: 1 }];
            return updated;
        });
    };

    const updateQuantity = (id: string, qty: number) => {
        setCart((prev) => {
            if (qty <= 0) return prev.filter((item) => item.id !== id);
            return prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item));
        });
    };

    const removeFromCart = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));

    const clearCart = () => setCart([]);

    const getItemQuantity = (id: string) => cart.find((item) => item.id === id)?.quantity || 0;

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, getItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

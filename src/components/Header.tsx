import React from 'react';
import { Search, Package, Heart, User, ShoppingCart, Facebook, Instagram, Linkedin, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="w-full">
            {/* Top Bar */}
            <div className="bg-purple-600 text-white px-4 py-2">
                <div className="w-full flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="hover:underline cursor-pointer">Help Center</span>
                        <span className="hover:underline cursor-pointer">Wishlist</span>
                        <span className="hover:underline cursor-pointer">Order Tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">100% Secure delivery without contacting the courier</span>
                    </div>
                    <div className="flex items-center space-x-4">

                        <div className="flex items-center space-x-2">
                            {/* Social Icons */}
                            <div className="w-5 h-5  rounded flex items-center justify-center">
                                <Facebook className="w-4 h-4" />

                            </div>
                            <div className="w-5 h-5  rounded flex items-center justify-center">
                                <Instagram className="w-4 h-4" />

                            </div>
                            <div className="w-5 h-5 rounded flex items-center justify-center">
                                <Linkedin className="w-4 h-4" />

                            </div>
                            <div className="w-5 h-5  rounded flex items-center justify-center">
                                <X className="w-4 h-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white shadow-sm px-4 py-4">
                <div className="w-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold text-gray-800">R-worldShop</span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search Products..."
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                            <Button
                                size="sm"
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-600"
                                variant="ghost"
                            >
                                <Search className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6">
                        <Link href="/cart">
                            <Package className="w-6 h-6 text-gray-600" />
                        </Link>
                        <Link href="/cart" className='relative p-2'>
                            <Heart className="w-6 h-6 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                2
                            </span>
                        </Link>




                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Welcome</span>
                                <span className="text-sm font-medium text-gray-800">Aman Adee</span>
                            </div>
                        </div>
                        <Link href="/cart" className='relative p-2'>
                            <ShoppingCart className="w-5 h-5 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
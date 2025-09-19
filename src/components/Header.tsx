'use client';
import React, { useState } from 'react';
import { Search, Package, Heart, User, ShoppingCart, Facebook, Instagram, Linkedin, X, Menu, ChevronDown, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from "@/context/CartContext";
import CartSidebar from './Cart';
import LocationModal from './LocationModal';

const Header = () => {
    const { cart } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<string>("Select Location");


    const totalItems = cart.length;



    return (
        <>
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden lg:block bg-purple-600 text-white px-4 py-2">
                <div className="w-full mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="hover:underline cursor-pointer transition-all duration-200">Help Center</span>
                        <span className="hover:underline cursor-pointer transition-all duration-200">Wishlist</span>
                        <span className="hover:underline cursor-pointer transition-all duration-200">Order Tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">100% Secure delivery without contacting the courier</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            {/* Social Icons */}
                            <div className="w-6 h-6 hover:bg-purple-500 rounded flex items-center justify-center cursor-pointer transition-all duration-200">
                                <Facebook className="w-4 h-4" />
                            </div>
                            <div className="w-6 h-6 hover:bg-purple-500 rounded flex items-center justify-center cursor-pointer transition-all duration-200">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <div className="w-6 h-6 hover:bg-purple-500 rounded flex items-center justify-center cursor-pointer transition-all duration-200">
                                <Linkedin className="w-4 h-4" />
                            </div>
                            <div className="w-6 h-6 hover:bg-purple-500 rounded flex items-center justify-center cursor-pointer transition-all duration-200">
                                <X className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sticky top-0 z-50 bg-white ">


                {/* Main Header */}
                <div className="bg-white shadow-sm px-4 py-3">
                    <div className="w-full mx-auto flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <div className="flex items-center lg:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <span className="text-lg lg:text-xl font-bold text-gray-800">R-worldShop</span>
                            </Link>
                            <button
                                className="flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-gray-100"
                                onClick={() => setOpenLocationModal(true)}
                            >
                                <MapPin className="w-5 h-5" />
                                <span className="truncate max-w-[120px]">{selectedLocation}</span>
                            </button>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
                            <div className="relative w-full">
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
                        <div className="flex items-center space-x-3 lg:space-x-6">
                            {/* Search Icon for Mobile */}
                            {/* <Button variant="ghost" size="sm" className="md:hidden p-2">
                                <Search className="w-5 h-5 text-gray-600" />
                            </Button> */}

                            {/* Package Icon - Hidden on small screens */}
                            <Link href="/orders" className="hidden sm:block">
                                <Package className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 hover:text-teal-500 transition-colors" />
                            </Link>

                            {/* Wishlist */}
                            <Link href="/wishlist" className='relative p-2 hidden sm:block'>
                                <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 hover:text-teal-500 transition-colors" />
                                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    2
                                </span>
                            </Link>

                            {/* User Menu */}
                            <div className="relative hidden lg:block">
                                <button
                                    className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                >
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-xs text-gray-500">Welcome</span>
                                        <span className="text-sm font-medium text-gray-800">Aman Adee</span>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </button>

                                {/* User Dropdown */}
                                {isUserMenuOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                                        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>
                                        <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Orders</Link>
                                        <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</Link>
                                        <hr className="my-2" />
                                        <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</button>
                                    </div>
                                )}
                            </div>

                            {/* Mobile User Icon */}
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center lg:hidden">
                                <User className="w-4 h-4 text-gray-600" />
                            </div>

                            {/* Cart */}
                            <button onClick={() => setIsCartOpen(true)} className='relative p-2'>
                                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 hover:text-teal-500 transition-colors" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="md:hidden mt-3">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search Products..."
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-4">
                            <Link href="/orders" className="flex items-center space-x-3 py-2">
                                <Package className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-800">Orders</span>
                            </Link>
                            <Link href="/wishlist" className="flex items-center space-x-3 py-2">
                                <Heart className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-800">Wishlist</span>
                                <span className="bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ml-auto">2</span>
                            </Link>
                            <Link href="/profile" className="flex items-center space-x-3 py-2">
                                <User className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-800">Profile</span>
                            </Link>

                            {/* Mobile Social Links */}
                            <div className="pt-4 border-t">
                                <div className="flex items-center space-x-4 justify-center">
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center cursor-pointer">
                                        <Facebook className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center cursor-pointer">
                                        <Instagram className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center cursor-pointer">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-purple-600 text-white rounded flex items-center justify-center cursor-pointer">
                                        <X className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Help Links */}
                            <div className="pt-4 border-t space-y-2">
                                <Link href="/help" className="block py-2 text-gray-600 text-sm">Help Center</Link>
                                <Link href="/tracking" className="block py-2 text-gray-600 text-sm">Order Tracking</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <LocationModal
                isOpen={openLocationModal}
                onClose={() => setOpenLocationModal(false)}
                onLocationSelect={(location) => {
                    setSelectedLocation(location);
                    setOpenLocationModal(false);
                }}
            />
        </>
    );
};

export default Header;
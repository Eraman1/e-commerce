'use client';

import React from 'react';
import { Package, HelpCircle, Truck, RefreshCw, Phone, Tag, DollarSign } from 'lucide-react';

const QuickLinks = () => (
    <aside className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
        <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Package className="w-4 h-4 text-teal-600" />
                All Products
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Tag className="w-4 h-4 text-blue-600" />
                New Arrivals
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <DollarSign className="w-4 h-4 text-yellow-600" />
                Under $50
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Package className="w-4 h-4 text-orange-600" />
                My Orders
            </a>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Customer Support</h3>
        <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <HelpCircle className="w-4 h-4 text-red-600" />
                Help Center
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Truck className="w-4 h-4 text-red-600" />
                Shipping Info
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <RefreshCw className="w-4 h-4 text-blue-600" />
                Returns & Exchanges
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                <Phone className="w-4 h-4 text-red-600" />
                Contact Us
            </a>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">Special Offers</h3>
    </aside>
);

export default QuickLinks;

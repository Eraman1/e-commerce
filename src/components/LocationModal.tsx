"use client";

import { useState, useEffect } from "react";
import { X, MapPin, Search, Home, Briefcase, Users, Edit3, Trash2, Plus, Loader2, Navigation } from "lucide-react";

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLocationSelect?: (location: string) => void;
}

interface SavedAddress {
    id: number;
    label: string;
    address: string;
    coordinates?: { lat: number; lng: number };
    isDefault?: boolean;
}

interface DetectedLocation {
    address: string;
    coordinates: { lat: number; lng: number };
    city: string;
    state: string;
    country: string;
    pincode: string;
}
interface SearchResult {
    display_name: string;
    lat: string;
    lon: string;
    address?: {
        road?: string;
        suburb?: string;
        city?: string;
        state?: string;
        postcode?: string;
    };
}

export default function LocationModal({ isOpen, onClose, onLocationSelect }: LocationModalProps) {
    const [search, setSearch] = useState("");
    const [detectedLocation, setDetectedLocation] = useState<DetectedLocation | null>(null);
    const [isDetecting, setIsDetecting] = useState(false);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showAddAddress, setShowAddAddress] = useState(false);
    const [newAddress, setNewAddress] = useState({ label: "", address: "" });

    const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([
        {
            id: 1,
            label: "Home",
            address: "Floor 3rd, Y62 Block Y, Sector 12, Noida, Uttar Pradesh, 201301",
            coordinates: { lat: 28.5355, lng: 77.3910 },
            isDefault: true
        },
        {
            id: 2,
            label: "Work",
            address: "Tower 12, Sector 58, Noida, Uttar Pradesh, 201301",
            coordinates: { lat: 28.6139, lng: 77.3773 }
        },
        {
            id: 3,
            label: "Parents",
            address: "C Block, Sector 62, Noida, Uttar Pradesh, 201309",
            coordinates: { lat: 28.6207, lng: 77.3666 }
        },
    ]);

    // Reverse geocoding function using OpenStreetMap Nominatim API
    const reverseGeocode = async (lat: number, lng: number): Promise<DetectedLocation | null> => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16&addressdetails=1`
            );
            const data = await response.json();

            if (data && data.display_name) {
                return {
                    address: data.display_name,
                    coordinates: { lat, lng },
                    city: data.address?.city || data.address?.town || data.address?.village || "Unknown",
                    state: data.address?.state || "Unknown",
                    country: data.address?.country || "Unknown",
                    pincode: data.address?.postcode || "Unknown"
                };
            }
            return null;
        } catch (error) {
            console.error("Reverse geocoding error:", error);
            return null;
        }
    };

    // Forward geocoding for search
    const searchLocations = async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setIsSearching(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1&countrycodes=in`
            );
            const data = await response.json();
            setSearchResults(data || []);
        } catch (error) {
            console.error("Search error:", error);
            setSearchResults([]);
        } finally {
            setIsSearching(false);
        }
    };

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            searchLocations(search);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    const detectLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsDetecting(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const location = await reverseGeocode(latitude, longitude);
                setDetectedLocation(location);
                setIsDetecting(false);
            },
            (error) => {
                console.error(error);
                alert("Unable to retrieve your location. Please check your location permissions.");
                setIsDetecting(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    };

    const handleAddressSelect = (address: string) => {
        if (onLocationSelect) {
            onLocationSelect(address);
        }
        onClose();
    };

    const deleteAddress = (id: number) => {
        setSavedAddresses(prev => prev.filter(addr => addr.id !== id));
    };

    const addNewAddress = () => {
        if (!newAddress.label.trim() || !newAddress.address.trim()) return;

        const newAddr: SavedAddress = {
            id: Date.now(),
            label: newAddress.label,
            address: newAddress.address,
        };

        setSavedAddresses(prev => [...prev, newAddr]);
        setNewAddress({ label: "", address: "" });
        setShowAddAddress(false);
    };

    const getIconForLabel = (label: string) => {
        switch (label.toLowerCase()) {
            case 'home': return <Home className="w-4 h-4" />;
            case 'work': return <Briefcase className="w-4 h-4" />;
            case 'parents': return <Users className="w-4 h-4" />;
            default: return <MapPin className="w-4 h-4" />;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-teal-50 to-blue-50">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Choose Location</h2>
                        <p className="text-sm text-gray-600">Select your delivery location</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/80 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    {/* Detect Location Button */}
                    <div className="p-6 border-b bg-gray-50">
                        <button
                            onClick={detectLocation}
                            disabled={isDetecting}
                            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-200 flex items-center justify-center space-x-2 font-medium disabled:opacity-50"
                        >
                            {isDetecting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <Navigation className="w-5 h-5" />
                            )}
                            <span>
                                {isDetecting ? "Detecting..." : "Use my current location"}
                            </span>
                        </button>

                        {/* Show detected location */}
                        {detectedLocation && (
                            <div className="mt-4 p-4 bg-white rounded-xl border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900">Current Location</p>
                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                            {detectedLocation.address}
                                        </p>
                                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                            <span>{detectedLocation.city}</span>
                                            <span>•</span>
                                            <span>{detectedLocation.state}</span>
                                            <span>•</span>
                                            <span>{detectedLocation.pincode}</span>
                                        </div>
                                        <button
                                            onClick={() => handleAddressSelect(detectedLocation.address)}
                                            className="mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            Use This Location
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search Section */}
                    <div className="p-6 border-b">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for area, street name..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            />
                            {isSearching && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                                </div>
                            )}
                        </div>

                        {/* Search Results */}
                        {searchResults.length > 0 && (
                            <div className="mt-4 space-y-2">
                                <p className="text-sm font-medium text-gray-700">Search Results</p>
                                {searchResults.map((result, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAddressSelect(result.display_name)}
                                        className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                                                    {result.address?.road || result.address?.suburb || 'Unknown'}
                                                </p>
                                                <p className="text-xs text-gray-500 line-clamp-2">
                                                    {result.display_name}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Saved addresses */}
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Saved Addresses</h3>
                            <button
                                onClick={() => setShowAddAddress(!showAddAddress)}
                                className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 text-sm font-medium"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add New</span>
                            </button>
                        </div>

                        {/* Add new address form */}
                        {showAddAddress && (
                            <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                                <input
                                    type="text"
                                    placeholder="Label (e.g., Home, Work)"
                                    value={newAddress.label}
                                    onChange={(e) => setNewAddress(prev => ({ ...prev, label: e.target.value }))}
                                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <textarea
                                    placeholder="Complete address"
                                    value={newAddress.address}
                                    onChange={(e) => setNewAddress(prev => ({ ...prev, address: e.target.value }))}
                                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                    rows={3}
                                />
                                <div className="flex space-x-2">
                                    <button
                                        onClick={addNewAddress}
                                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setShowAddAddress(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="space-y-3 max-h-80 overflow-y-auto">
                            {savedAddresses.map((addr) => (
                                <div
                                    key={addr.id}
                                    className="group border border-gray-200 p-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer"
                                    onClick={() => handleAddressSelect(addr.address)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start space-x-3 flex-1">
                                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                {getIconForLabel(addr.label)}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-medium text-gray-900">{addr.label}</p>
                                                    {addr.isDefault && (
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                                            Default
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                    {addr.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Handle edit
                                                }}
                                                className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteAddress(addr.id);
                                                }}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
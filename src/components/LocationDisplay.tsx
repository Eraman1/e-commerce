"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Clock } from "lucide-react";
import LocationModal from "./LocationModal"; // Import your enhanced location modal

interface LocationDisplayProps {
    className?: string;
}

interface SelectedLocation {
    address: string;
    shortAddress: string;
    deliveryTime: string;
}

export default function LocationDisplay({ className = "" }: LocationDisplayProps) {
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);

    const handleLocationSelect = (fullAddress: string) => {
        // Process the address to create a short version and extract area info
        const processedLocation = processAddress(fullAddress);
        setSelectedLocation(processedLocation);
        setOpenLocationModal(false);
    };

    const processAddress = (fullAddress: string): SelectedLocation => {
        // Split address and extract meaningful parts
        const parts = fullAddress.split(',').map(part => part.trim());

        // Try to find area/sector/locality
        let shortAddress = "Your Location";
        let area = "";

        // Look for common area indicators
        for (const part of parts) {
            if (part.toLowerCase().includes('sector') ||
                part.toLowerCase().includes('block') ||
                part.toLowerCase().includes('area') ||
                part.toLowerCase().includes('colony') ||
                part.toLowerCase().includes('nagar')) {
                area = part;
                break;
            }
        }

        // If no specific area found, use first meaningful part
        if (!area && parts.length > 0) {
            area = parts[0];
        }

        if (area) {
            shortAddress = area.length > 25 ? area.substring(0, 25) + "..." : area;
        }

        return {
            address: fullAddress,
            shortAddress,
            deliveryTime: "8 minutes" // You can make this dynamic based on location
        };
    };

    if (!selectedLocation) {
        return (
            <>
                <button
                    className={`flex items-center gap-2 text-sm border px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
                    onClick={() => setOpenLocationModal(true)}
                >
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Select Location</span>
                </button>

                <LocationModal
                    isOpen={openLocationModal}
                    onClose={() => setOpenLocationModal(false)}
                    onLocationSelect={handleLocationSelect}
                />
            </>
        );
    }

    return (
        <>
            <button
                className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors group ${className}`}
                onClick={() => setOpenLocationModal(true)}
            >
                <div className="flex items-center gap-2">
                    {/* Delivery Time Section */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-900">
                                Delivery in {selectedLocation.deliveryTime}
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>

                    {/* Location Section */}
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        <div className="text-left">
                            <div className="text-sm font-medium text-gray-900 max-w-[200px] truncate">
                                {selectedLocation.shortAddress}
                            </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                </div>
            </button>

            <LocationModal
                isOpen={openLocationModal}
                onClose={() => setOpenLocationModal(false)}
                onLocationSelect={handleLocationSelect}
            />
        </>
    );
}
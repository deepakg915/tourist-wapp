import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

export function SpotCard({ spot }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary">{spot.name}</h3>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-yellow-700 text-xs font-bold">
                        <Star size={12} className="mr-1 fill-current" />
                        {spot.rating}
                    </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span className="capitalize px-2 py-0.5 bg-gray-100 rounded-full text-xs mr-2">{spot.type}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {spot.duration} min
                    </div>
                    <div className="flex items-center font-medium text-green-600">
                        {spot.price === 0 ? 'Free' : `$${spot.price}`}
                    </div>
                </div>
            </div>
        </div>
    );
}

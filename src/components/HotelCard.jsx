import React from 'react';
import { Star } from 'lucide-react';

export function HotelCard({ hotel }) {
    return (
        <div className="flex bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-4 hover:shadow-md transition-shadow">
            <div className="w-1/3">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-primary">{hotel.name}</h3>
                        <div className="flex items-center text-yellow-500 text-xs">
                            <Star size={12} className="fill-current mr-1" />
                            {hotel.rating}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 capitalize mt-1">{hotel.type}</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                    <div className="text-2xl font-bold text-primary">
                        ${hotel.price}
                        <span className="text-xs text-gray-400 font-normal ml-1">/night</span>
                    </div>
                    <button className="px-3 py-1 bg-accent text-white text-xs rounded hover:bg-blue-600 transition-colors">
                        View Deal
                    </button>
                </div>
            </div>
        </div>
    );
}

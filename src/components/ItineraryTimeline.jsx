import React from 'react';
import { Utensils, MapPin, Clock } from 'lucide-react';

export function ItineraryTimeline({ items }) {
    return (
        <div className="relative pl-8 border-l-2 border-gray-200 space-y-8 py-4">
            {items.map((item, index) => (
                <div key={index} className="relative">
                    <div className={`absolute -left-[41px] p-2 rounded-full border-4 border-white shadow-sm ${item.type === 'meal' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                        {item.type === 'meal' ? <Utensils size={16} /> : <MapPin size={16} />}
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center text-sm text-gray-500 mb-1 font-mono">
                            <Clock size={14} className="mr-2" />
                            {item.time}
                        </div>
                        <h4 className="font-bold text-lg text-primary mb-1">
                            {item.activity || item.name}
                        </h4>
                        {item.type === 'meal' && (
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">{item.name}</span> • {item.price} • {item.rating}★
                            </p>
                        )}
                        {item.type === 'spot' && (
                            <p className="text-sm text-gray-600">
                                {item.duration} min visit • {item.rating}★
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export function CityCard({ city, onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-64 w-full"
            onClick={() => onClick(city.id)}
        >
            <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.country}</p>
            </div>
        </motion.div>
    );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CityCard } from '../components/CityCard';
import { MapPin } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/cities')
            .then(res => res.json())
            .then(data => {
                setCities(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching cities:', err);
                setLoading(false);
            });
    }, []);

    const handleCityClick = (cityId) => {
        navigate(`/planner/${cityId}`);
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-primary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021"
                        alt="Travel Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Discover Your Next <span className="text-accent">Adventure</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Plan your perfect trip with AI-curated itineraries, best hotel deals, and hidden gems in the world's most beautiful cities.
                    </p>

                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full inline-flex items-center border border-white/20">
                        <MapPin className="text-accent ml-4 mr-2" />
                        <span className="text-white mr-4">Select a destination below to start planning</span>
                    </div>
                </div>
            </div>

            {/* City Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map(city => (
                        <CityCard key={city.id} city={city} onClick={handleCityClick} />
                    ))}
                </div>
            </div>
        </div>
    );
}

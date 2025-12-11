import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Map, Hotel } from 'lucide-react';
import { generateItinerary } from '../utils/plannerLogic';
import { SpotCard } from '../components/SpotCard';
import { HotelCard } from '../components/HotelCard';
import { ItineraryTimeline } from '../components/ItineraryTimeline';

export default function Planner() {
    const { cityId } = useParams();
    const [city, setCity] = useState(null);
    const [spots, setSpots] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [activities, setActivities] = useState([]);
    const [eateries, setEateries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetch(`http://localhost:3000/api/cities/${cityId}`).then(res => {
                if (!res.ok) throw new Error('City not found');
                return res.json();
            }),
            fetch(`http://localhost:3000/api/spots/${cityId}`).then(res => res.json()),
            fetch(`http://localhost:3000/api/hotels/${cityId}`).then(res => res.json()),
            fetch(`http://localhost:3000/api/activities/${cityId}`).then(res => res.json()),
            fetch(`http://localhost:3000/api/eateries/${cityId}`).then(res => res.json())
        ])
            .then(([cityData, spotsData, hotelsData, activitiesData, eateriesData]) => {
                setCity(cityData);
                setSpots(spotsData);
                setHotels(hotelsData);
                setActivities(activitiesData);
                setEateries(eateriesData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching planner data:', err);
                setLoading(false);
            });
    }, [cityId]);

    const itinerary = useMemo(() => {
        if (!city || loading) return [];
        return generateItinerary(spots, eateries);
    }, [city, spots, eateries, loading]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!city) {
        return <div className="p-10 text-center">City not found</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full mr-4 transition-colors">
                            <ArrowLeft size={20} className="text-gray-600" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-primary">{city.name} Trip Planner</h1>
                            <p className="text-xs text-gray-500">{itinerary.length} activities • {hotels.length} hotels available</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                        Save Itinerary
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Itinerary (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-accent/10 rounded-lg mr-3">
                                <Calendar className="text-accent" size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-primary">Optimized Itinerary</h2>
                        </div>
                        <ItineraryTimeline items={itinerary} />
                    </div>
                </div>

                {/* Right Column: Spots & Hotels (7 cols) */}
                <div className="lg:col-span-7 space-y-8">

                    {/* Top Spots */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Map className="text-accent mr-2" size={20} />
                            <h2 className="text-xl font-bold text-primary">Top Attractions</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {spots.map(spot => (
                                <SpotCard key={spot.id} spot={spot} />
                            ))}
                        </div>
                    </section>

                    {/* Top Things to Do */}
                    <section>
                        <div className="flex items-center mb-4">
                            <div className="p-1 bg-purple-100 rounded mr-2">
                                <Map className="text-purple-600" size={16} />
                            </div>
                            <h2 className="text-xl font-bold text-primary">Top Things to Do</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activities.map(activity => (
                                <SpotCard key={activity.id} spot={activity} />
                            ))}
                        </div>
                    </section>

                    {/* Hotels */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Hotel className="text-accent mr-2" size={20} />
                            <h2 className="text-xl font-bold text-primary">Where to Stay</h2>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
                                {['All', 'Luxury', 'Mid-range', 'Budget'].map((filter, i) => (
                                    <button
                                        key={filter}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                            <div>
                                {hotels.map(hotel => (
                                    <HotelCard key={hotel.id} hotel={hotel} />
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

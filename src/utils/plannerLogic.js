export function generateItinerary(citySpots, cityEateries) {
    if (!citySpots || citySpots.length === 0) return [];

    // Simple heuristic: 
    // 1. Breakfast
    // 2. Morning Spot (Long duration)
    // 3. Lunch
    // 4. Afternoon Spot (Medium duration)
    // 5. Late Afternoon Spot (Short duration)
    // 6. Dinner

    const breakfast = cityEateries.find(e => e.type === 'breakfast');
    const lunch = cityEateries.find(e => e.type === 'lunch');
    const dinner = cityEateries.find(e => e.type === 'dinner');

    // Sort spots by rating (descending) to pick the best ones
    const sortedSpots = [...citySpots].sort((a, b) => b.rating - a.rating);

    // Pick top 3 spots
    const morningSpot = sortedSpots[0];
    const afternoonSpot = sortedSpots[1];
    const eveningSpot = sortedSpots[2];

    const itinerary = [
        { time: '09:00 AM', type: 'meal', activity: 'Breakfast', ...breakfast },
        { time: '10:30 AM', type: 'spot', ...morningSpot },
        { time: '01:00 PM', type: 'meal', activity: 'Lunch', ...lunch },
        { time: '02:30 PM', type: 'spot', ...afternoonSpot },
        { time: '05:00 PM', type: 'spot', ...eveningSpot },
        { time: '07:30 PM', type: 'meal', activity: 'Dinner', ...dinner },
    ];

    return itinerary.filter(item => item.id); // Filter out undefined if data is missing
}

export const CITIES = [
    {
        id: 'paris',
        name: 'Paris',
        country: 'France',
        description: 'The City of Light, known for its cafe culture, Eiffel Tower, and the Louvre.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2073',
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        country: 'Japan',
        description: 'A bustling metropolis mixing ultramodern neon-lit skyscrapers with traditional temples.',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1988',
    },
    {
        id: 'new-york',
        name: 'New York',
        country: 'USA',
        description: 'The City That Never Sleeps, featuring the Empire State Building, Times Square, and Central Park.',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2070',
    }
];

export const SPOTS = {
    paris: [
        { id: 'eiffel', name: 'Eiffel Tower', type: 'landmark', duration: 120, price: 30, rating: 4.8, image: 'https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 'louvre', name: 'Louvre Museum', type: 'museum', duration: 180, price: 20, rating: 4.7, image: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=2020' },
        { id: 'notre-dame', name: 'Notre-Dame', type: 'landmark', duration: 60, price: 0, rating: 4.6, image: 'https://images.unsplash.com/photo-1478391679964-1309b902d36b?auto=format&fit=crop&q=80&w=2070' },
        { id: 'arc-de-triomphe', name: 'Arc de Triomphe', type: 'landmark', duration: 45, price: 15, rating: 4.5, image: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&q=80&w=2070' },
        { id: 'sacre-coeur', name: 'Sacré-Cœur', type: 'landmark', duration: 60, price: 0, rating: 4.6, image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=1974' },
    ],
    tokyo: [
        { id: 'senso-ji', name: 'Senso-ji Temple', type: 'landmark', duration: 60, price: 0, rating: 4.7, image: 'https://images.unsplash.com/photo-1580418827493-f2b22c438544?auto=format&fit=crop&q=80&w=2070' },
        { id: 'skytree', name: 'Tokyo Skytree', type: 'landmark', duration: 90, price: 25, rating: 4.5, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=2036' },
        { id: 'shibuya', name: 'Shibuya Crossing', type: 'landmark', duration: 30, price: 0, rating: 4.6, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=2070' },
        { id: 'meiji', name: 'Meiji Shrine', type: 'landmark', duration: 60, price: 0, rating: 4.7, image: 'https://images.unsplash.com/photo-1528360983277-13d9b152c56e?auto=format&fit=crop&q=80&w=2069' },
    ],
    'new-york': [
        { id: 'empire', name: 'Empire State Building', type: 'landmark', duration: 90, price: 45, rating: 4.6, image: 'https://images.unsplash.com/photo-1550664776-63795249ab43?auto=format&fit=crop&q=80&w=1974' },
        { id: 'statue', name: 'Statue of Liberty', type: 'landmark', duration: 180, price: 30, rating: 4.7, image: 'https://images.unsplash.com/photo-1503572327579-b5c6afd5989d?auto=format&fit=crop&q=80&w=2056' },
        { id: 'central-park', name: 'Central Park', type: 'park', duration: 120, price: 0, rating: 4.9, image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=2070' },
    ]
};

export const EATERIES = {
    paris: [
        { id: 'cafe-de-flore', name: 'Café de Flore', type: 'breakfast', price: '$$', rating: 4.4 },
        { id: 'le-relais', name: 'Le Relais de l\'Entrecôte', type: 'lunch', price: '$$$', rating: 4.6 },
        { id: 'pink-mamma', name: 'Pink Mamma', type: 'dinner', price: '$$', rating: 4.7 },
    ],
    tokyo: [
        { id: 'bills', name: 'Bills Omotesando', type: 'breakfast', price: '$$', rating: 4.5 },
        { id: 'ichiran', name: 'Ichiran Ramen', type: 'lunch', price: '$', rating: 4.7 },
        { id: 'sushi-dai', name: 'Sushi Dai', type: 'dinner', price: '$$$', rating: 4.8 },
    ],
    'new-york': [
        { id: 'clinton', name: 'Clinton St. Baking Co.', type: 'breakfast', price: '$$', rating: 4.6 },
        { id: 'katz', name: 'Katz\'s Delicatessen', type: 'lunch', price: '$$', rating: 4.5 },
        { id: 'peter-luger', name: 'Peter Luger Steak House', type: 'dinner', price: '$$$$', rating: 4.4 },
    ]
};

export const HOTELS = {
    paris: [
        { id: 'ritz', name: 'Ritz Paris', type: 'luxury', price: 1200, rating: 4.9, image: 'https://images.unsplash.com/photo-1521791136057-2308e0b2b34f?auto=format&fit=crop&q=80&w=2000' },
        { id: 'novotel', name: 'Novotel Les Halles', type: 'mid-range', price: 200, rating: 4.3, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=2070' },
        { id: 'ibis', name: 'Ibis Bastille', type: 'budget', price: 90, rating: 3.9, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1974' },
    ],
    tokyo: [
        { id: 'aman', name: 'Aman Tokyo', type: 'luxury', price: 1500, rating: 4.9, image: 'https://images.unsplash.com/photo-1591920476948-da986641e66a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 'dormy', name: 'Dormy Inn', type: 'mid-range', price: 120, rating: 4.5, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070' },
        { id: 'capsule', name: '9h Nine Hours', type: 'budget', price: 40, rating: 4.2, image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070' },
    ],
    'new-york': [
        { id: 'plaza', name: 'The Plaza', type: 'luxury', price: 900, rating: 4.7, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2025' },
        { id: 'ace', name: 'Ace Hotel', type: 'mid-range', price: 300, rating: 4.4, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1974' },
        { id: 'pod', name: 'Pod 39', type: 'budget', price: 120, rating: 4.1, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=2070' },
    ]
};

export const ACTIVITIES = {
    paris: [
        { id: 'cruise', name: 'Seine River Cruise', type: 'experience', duration: 60, price: 15, rating: 4.5, image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4de1e?auto=format&fit=crop&q=80&w=2070' },
        { id: 'cooking', name: 'Macaron Baking Class', type: 'workshop', duration: 120, price: 80, rating: 4.9, image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=2000' },
        { id: 'cabaret', name: 'Moulin Rouge Show', type: 'show', duration: 120, price: 110, rating: 4.6, image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=2052' },
    ],
    tokyo: [
        { id: 'mari-kart', name: 'Street Go-Kart Tour', type: 'adventure', duration: 120, price: 60, rating: 4.8, image: 'https://images.unsplash.com/photo-1580418827493-f2b22c438544?auto=format&fit=crop&q=80&w=2000' },
        { id: 'teamlab', name: 'teamLab Planets', type: 'art', duration: 90, price: 30, rating: 4.7, image: 'https://images.unsplash.com/photo-1569668723429-1989e1260858?auto=format&fit=crop&q=80&w=2070' },
        { id: 'sumo', name: 'Sumo Morning Practice', type: 'culture', duration: 180, price: 40, rating: 4.6, image: 'https://images.unsplash.com/photo-1616248249518-b16013cd4e42?auto=format&fit=crop&q=80&w=2000' },
    ],
    'new-york': [
        { id: 'broadway', name: 'Broadway Musical', type: 'show', duration: 150, price: 120, rating: 4.8, image: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&q=80&w=2000' },
        { id: 'helicopter', name: 'Manhattan Helicopter Tour', type: 'adventure', duration: 15, price: 220, rating: 4.9, image: 'https://images.unsplash.com/photo-1557456170-98535e501238?auto=format&fit=crop&q=80&w=2000' },
        { id: 'comedy', name: 'Comedy Cellar', type: 'show', duration: 90, price: 25, rating: 4.7, image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=2070' },
    ]
};

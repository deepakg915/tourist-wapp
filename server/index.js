import express from 'express';
import cors from 'cors';
import { CITIES, SPOTS, EATERIES, HOTELS, ACTIVITIES } from './data.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all cities
app.get('/api/cities', (req, res) => {
    res.json(CITIES);
});

// Get city by ID
app.get('/api/cities/:id', (req, res) => {
    const city = CITIES.find(c => c.id === req.params.id);
    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ message: 'City not found' });
    }
});

// Get spots for a city
app.get('/api/spots/:cityId', (req, res) => {
    const spots = SPOTS[req.params.cityId];
    if (spots) {
        res.json(spots);
    } else {
        res.status(404).json({ message: 'Spots not found for this city' });
    }
});

// Get eateries for a city
app.get('/api/eateries/:cityId', (req, res) => {
    const eateries = EATERIES[req.params.cityId];
    if (eateries) {
        res.json(eateries);
    } else {
        res.status(404).json({ message: 'Eateries not found for this city' });
    }
});

// Get hotels for a city
app.get('/api/hotels/:cityId', (req, res) => {
    const hotels = HOTELS[req.params.cityId];
    if (hotels) {
        res.json(hotels);
    } else {
        res.status(404).json({ message: 'Hotels not found for this city' });
    }
});

// Get activities for a city
app.get('/api/activities/:cityId', (req, res) => {
    const activities = ACTIVITIES[req.params.cityId];
    if (activities) {
        res.json(activities);
    } else {
        res.status(404).json({ message: 'Activities not found for this city' });
    }
});

// Serve static files from the React app
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory (which will be copied to the server root or parent in Docker)
// In Docker, we'll likely copy 'dist' to a folder relative to this file.
// Let's assume 'dist' is in the parent directory for local dev compatibility if built, 
// or we can structure the Dockerfile to place it there.
app.use(express.static(path.join(__dirname, '../dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

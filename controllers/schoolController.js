const School = require("../model/school");

// Add School API
const addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const school = await School.create({ name, address, latitude, longitude });

        res.status(201).json({ message: "School added successfully", schoolId: school.id });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err });
    }
};

const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        // Fetch all schools
        const schools = await School.findAll();

        // Calculate and sort by distance
        const schoolsWithDistance = schools.map(school => ({
            ...school.toJSON(),
            distance: getDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.json(schoolsWithDistance);
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err });
    }
};

module.exports = { addSchool, listSchools };

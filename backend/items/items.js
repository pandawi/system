const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Sample items data
let items = [
    { id: 1, name: 'Item One', userId: 1 },
    { id: 2, name: 'Item Two', userId: 2 },
];

// Endpoint to get items
app.get('/api/items', async (req, res) => {
    try {
        // Fetch user data from users server
        const usersResponse = await axios.get('http://localhost:3002/api/users');
        const users = usersResponse.data;

        // Attach user information to items
        const itemsWithUsers = items.map(item => ({
            ...item,
            user: users.find(user => user.id === item.userId),
        }));

        res.json(itemsWithUsers);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

// Endpoint to add a new item
app.post('/api/items', (req, res) => {
    const { name, userId } = req.body;
    const newItem = {
        id: items.length + 1,
        name,
        userId,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`Items server is running on port ${PORT}`);
});
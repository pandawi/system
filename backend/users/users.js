const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Sample users data
let users = [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
];

// Endpoint to get users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint to add a new user
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Users server is running on port ${PORT}`);
});
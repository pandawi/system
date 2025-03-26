// src/Items.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://items-service.default.svc.cluster.local:3001/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} (User: {item.user ? item.user.name : 'Unknown'})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;
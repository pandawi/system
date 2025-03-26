// src/Items.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    return (
        <div style={{ height: '50vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: '1.5em' }}>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        Item: {item.name} Seller: {item.sellerName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;
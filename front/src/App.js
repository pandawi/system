// src/App.js
import React from 'react';
import './App.css';
import Users from './Users';
import Items from './Items';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Items and Users Dashboard</h1>
        </header>
        <main>
          <Users />
          <Items />
        </main>
      </div>
  );
}

export default App;
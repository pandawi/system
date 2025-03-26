// src/App.js
import React from 'react';
import './App.css';
import Users from './Users';
import Items from './Items';

function App() {
  return (
      <div className="App">
          <main>
              <h1>Items Dashboard:</h1>
              <Items/>
          </main>
      </div>
  );
}

export default App;
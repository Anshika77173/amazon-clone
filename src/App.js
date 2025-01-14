import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NAVBAR from './Navbar';
import HOME from './Home';
import CHECKOUT from './Checkout';
import LOGIN from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <NAVBAR />
        <Routes>
        <Route path="/login" element={<LOGIN />}> </Route>
          {/* Route for the checkout page */}
          <Route path="/checkout" element={<CHECKOUT />} />
          
          {/* Route for the home page */}
          <Route path="/" element={<HOME />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

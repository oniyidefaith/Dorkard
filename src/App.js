import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
   <Router>
    <div className="content">
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    <Routes>
    <Route path="/Shop" element={<Shop/>} />
    </Routes>
    </div>
   </Router>
  );
}

export default App;

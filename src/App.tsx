import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lab1 from './pages/Labs/Lab1/Lab1';
import Lab2 from './pages/Labs/Lab2/Lab2';
import Lab3 from './pages/Labs/Lab3/Lab3';
import Lab4 from './pages/Labs/Lab4/Lab4';
import Lab5 from './pages/Labs/Lab5/Lab5';
import Lab6 from './pages/Labs/Lab6/Lab6';
import Lab7 from './pages/Labs/Lab7/Lab7';
import Lab8 from './pages/Labs/Lab8/Lab8';
import Lab9 from './pages/Labs/Lab9/Lab9';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2" element={<Lab2 />} />
        <Route path="/lab3" element={<Lab3 />} />
        <Route path="/lab4" element={<Lab4 />} />
        <Route path="/lab5" element={<Lab5 />} />
        <Route path="/lab6" element={<Lab6 />} />
        <Route path="/lab7" element={<Lab7 />} />
        <Route path="/lab8" element={<Lab8 />} />
        <Route path="/lab9" element={<Lab9 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
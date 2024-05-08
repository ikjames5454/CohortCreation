import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Routes } from './Route/Route';

function App() {
  return useRoutes(Routes)
}

export default App;

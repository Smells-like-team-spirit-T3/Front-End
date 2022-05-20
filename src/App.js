import React from 'react';
import './App.css';
import TripCalendar from "./calendar/TripCalendar";
import CreateTrip from './forms/createtrip';
import EnterCode from './forms/entercode';
import Home from './forms/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from './calendar/Calendar';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtrip" element={<CreateTrip />} />
          <Route path="/entercode" element={<EnterCode />} />
          <Route path="/trip/:id" element={<TripCalendar />} />
          <Route path="/calendar" element={<Calendar />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
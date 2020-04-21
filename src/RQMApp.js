import React from 'react';
import QuoteBox from "./components/QuoteBox";
import './App.css';

export default function RQMApp() {
  return (
    <div className="RQMApp">
      <h1>Random Quote Machine</h1>
      <QuoteBox />
    </div>
  );
}

export default RQMApp;

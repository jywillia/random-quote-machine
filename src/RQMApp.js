// import react dependency 
import React from 'react';
// import presentational component
import QuoteBox from "./components/QuoteBox";
// import css style rules
import './App.css';

// app's main parent app w/o wrapper basically a container
export default function RQMApp() {
  return (
    <div className="RQMApp">
      <h1>Random Quote Machine</h1>
      <QuoteBox />
    </div>
  );
}
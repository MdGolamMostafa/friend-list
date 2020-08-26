import React from 'react';
import './App.css';
import  {useState, useEffect } from "react";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) =>setResults(data))
    
  }, []);
  return (
    <div>
      <h1>total:{results.length}</h1>
      <Header></Header>
      <Profile results ={results}></Profile>
    </div>
     
  );
}

export default App;

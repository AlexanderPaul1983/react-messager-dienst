import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import React from 'react';




const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className='myBody'>
        <Navbar/>
        <MainContent/>
      </div>
    </div>
  );
}

export default App; 

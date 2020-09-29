import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import MenuComponent from "./components/MenuComponent";

function App() {
  return (
    <div className="container">
      <NavbarComponent/>
      <MenuComponent/>
    </div>
  );
}

export default App;

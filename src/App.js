import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import MenuComponent from "./components/MenuComponent";
import FooterComponent from "./components/FooterComponent";
import NavMenuComponent from "./components/NavMenuComponent";

function App() {
  return (
      <div className = "page-container">
          <div className="container content-wrap">
              <HeaderComponent/>
              <NavMenuComponent/>
              <MenuComponent/>
          </div>
          <FooterComponent/>
      </div>
  );
}

export default App;

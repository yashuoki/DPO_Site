import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import logo from "./images/sport.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="logo-section">
            <div className="logo"><img src={logo} alt="Логотип" /></div>
            <div className="working-hours">Круглосуточно</div>
          </div>
          <div className="header-right">
              <select className="city-select">
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Казань</option>
                <option>Екатеринбург</option>
                <option>Новосибирск</option>
              </select>
              <a href="tel:+78005553535" className="phone-link">+7 800 555-35-35</a>
              <nav className="header-nav">
              <NavLink to="/actions" className="nav-link">Акции</NavLink>
              <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
              <NavLink to="/delivery" className="nav-link">Доставка</NavLink>
              <NavLink to="/about" className="nav-link">О нас</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;

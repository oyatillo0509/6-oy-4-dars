import { useState } from "react";
import logo from "../../assets/imges/logo.svg";
import "./index.css";

function Menu() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Vakansiyalar</a>
          </li>
          <li>
            <a href="#">Kandidatlar</a>
          </li>
          <li>
            <a href="#">Kompaniyalar</a>
          </li>
          <li>
            <a href="#">Xizmatlar</a>
          </li>
          <li>
            <a href="#">Ta’lim</a>
          </li>
        </ul>
        <div className="lan">
          <select name="lan" id="language">
            <option value="uzbek">O'zb</option>
            <option value="english">Eng</option>
            <option value="rus">Rus</option>
          </select>
          <button>
            <a href="#">Boshlash</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;

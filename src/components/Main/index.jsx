import React, { useState, useEffect, useRef } from "react";
import dow from "../../assets/imges/dow.svg";
import Site from "../../assets/imges/Site.svg";
import Insta from "../../assets/imges/insta.svg";
import Tlg from "../../assets/imges/tlg.svg";
import Face from "../../assets/imges/face.svg";
import Git from "../../assets/imges/git.svg";

import "./index.css";

const Form = () => {
  const [formData, setFormData] = useState({
    komp_name: "",
    email: "",
    tel: "",
    davlat: "uzbek",
    city: "tosh",
    mfy: "",
    ishchilar: "",
    izoh: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const validate = () => {
    const errors = {};
    if (!formData.komp_name) errors.komp_name = "Kompaniya nomi majburiy";
    if (!formData.email) {
      errors.email = "Email majburiy";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email noto'g'ri formatda";
    }
    if (!formData.tel) errors.tel = "Telefon raqami majburiy";
    if (!formData.mfy) errors.mfy = "Yashash joyi majburiy";
    if (!formData.ishchilar) {
      errors.ishchilar = "Hodimlar soni majburiy";
    } else if (isNaN(formData.ishchilar)) {
      errors.ishchilar = "Hodimlar soni son bo'lishi kerak";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Malumotlar saqlandi");
    } else {
      setValidationErrors(errors);
    }
  };

  const mes_input = (e) => {
    const site = prompt("Link kriting...");
  };

  const yukla = (e) => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
    }
  };

  return (
    <div className="wrapper">
      <div className="for">
        <h3>Kompaniya ma’lumotlari</h3>
        <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className="glav">
          <img src={dow} alt="avatar" />
          <a href="#" onClick={yukla}>
            Yuklash
          </a>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="komp_name">Kompaniya nomi</label> <br />
          <input
            type="text"
            placeholder="Kompaniya nomi"
            id="komp_name"
            value={formData.komp_name}
            onChange={handleChange}
          />
          {validationErrors.komp_name && (
            <p className="error">{validationErrors.komp_name}</p>
          )}
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <p className="error">{validationErrors.email}</p>
          )}
          <br />
          <label htmlFor="tel">Telefon raqami </label>
          <br />
          <input
            type="tel"
            placeholder="UZ +998"
            id="tel"
            value={formData.tel}
            onChange={handleChange}
          />
          {validationErrors.tel && (
            <p className="error">{validationErrors.tel}</p>
          )}
          <br />
          <label htmlFor="site">Linklar</label>
          <div className="messenger">
            <img src={Site} alt="site" onClick={mes_input} />
            <img src={Insta} alt="site" onClick={mes_input} />
            <img src={Tlg} alt="site" onClick={mes_input} />
            <img src={Face} alt="site" onClick={mes_input} />
            <img src={Git} alt="site" onClick={mes_input} />
          </div>
          <div className="lok">
            <label htmlFor="davlat">Davlat </label> <br />
            <select
              name="Davlat"
              id="davlat"
              value={formData.davlat}
              onChange={handleChange}
            >
              <option value="uzbek">O'zbekiston</option>
              <option value="rus">Russia</option>
              <option value="tur">Turkiya</option>
            </select>
            <br />
            <label htmlFor="city">Shahar</label>
            <br />
            <select
              name="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="tosh">Toshkent</option>
              <option value="qoq">Qoqon</option>
              <option value="sam">Samarqand</option>
            </select>
            <br />
          </div>
          <label htmlFor="mfy">Yashash joyi </label>
          <br />
          <input
            type="text"
            placeholder="Joy"
            id="mfy"
            value={formData.mfy}
            onChange={handleChange}
          />
          {validationErrors.mfy && (
            <p className="error">{validationErrors.mfy}</p>
          )}
          <br />
          <label htmlFor="ishchilar">Hodimlar soni</label>
          <br />
          <input
            type="number"
            placeholder="Hodimlar soni"
            id="ishchilar"
            value={formData.ishchilar}
            onChange={handleChange}
          />
          {validationErrors.ishchilar && (
            <p className="error">{validationErrors.ishchilar}</p>
          )}
          <br />
          <label htmlFor="izoh">Izoh</label>
          <br />
          <textarea
            placeholder="Kompaniya haqida izoh qoldiring"
            id="izoh"
            value={formData.izoh}
            onChange={handleChange}
          />
        </form>
        <div className="next">
          <button className="but oqi">Ortga</button>
          <button className="but kok" type="submit" onClick={handleSubmit}>
            Keyingisi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

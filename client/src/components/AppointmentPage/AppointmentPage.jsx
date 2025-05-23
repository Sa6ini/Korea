import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";

const AppointmentPage = () => {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send", {
        ...formData,
        grade: selected,
      });
      alert("Успешно изпратено!");
    } catch (err) {
      console.error(err);
      alert("Грешка при изпращането.");
    }
  };

  return (
    <div className="appointment-wrapper">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Запиши час</h2>
        <input
          type="text"
          name="fname"
          placeholder="Име"
          value={formData.fname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sname"
          placeholder="Фамилия"
          value={formData.sname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Емайл"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="+359 123 456 789"
          pattern="^\+359\s\d{3}\s\d{3}\s\d{3}$"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select value={selected} onChange={(e) => setSelected(e.target.value)} required>
          <option value="-">Видове класове</option>
          <option value="1-4 клас">1-4 клас</option>
          <option value="5-7 клас">5-7 клас</option>
          <option value="8-12 клас">8-12 клас</option>
        </select>
        <textarea
          name="description"
          placeholder="Описание..."
          value={formData.description}
          onChange={handleChange}
          style={{ resize: "vertical", width: "100%", height: "200px" }}
        />

       

        <button type="submit" className="btn">Запиши час</button>
      </form>
    </div>
  );
};

export default AppointmentPage;

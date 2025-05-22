import React from "react";
import "./Appointment.css";
const AppointmentPage = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div>
      <>
        <div className="appointment-wrapper">
          <form action="#" method="post">
            <h2>Запиши час</h2>
            <input type="text" name="fname" placeholder="Име" required="" />
            <input type="text" name="sname" placeholder="Фамилия" required="" />
            <input type="email" name="email" placeholder="Емайл" required="" />
            <input
              type="tel"
              name="phone"
              placeholder="+359 123 456 789"
              pattern="^\+359\s\d{3}\s\d{3}\s\d{3}$"
              required
            />
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="">Видове класове</option>
              <option value="young">1-4 клас</option>
              <option value="middle">5-7 клас</option>
              <option value="old">8-12 клас</option>
            </select>
            <textarea
              name="description"
              placeholder="Описание..."
              style={{ resize: "vertical", width: "100%" }}
            />

            <div className="terms-checkbox">
              <div className="checkbox">
                <input type="checkbox" id="termsCheckbox" required="" />
              </div>
              <label htmlFor="termsCheckbox">
                I agree to the{" "}
                <a href="" target="_blank">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button type="submit" className="btn">Запиши час</button>
          </form>
        </div>
      </>
    </div>
  );
};
export default AppointmentPage;

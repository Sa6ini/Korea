import React from "react";
import Service from "./Service";
const Pricing = () => {
  return (
    <section className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Ние ти предлагаме най-доброто обучение на разумна цена.</h2>
              <img src="img/section-img.png" alt="#" />
              <p>
                Избери професионалистите в корейския език
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Service title="Онлайн курсове" price="40" hours="На курс" class_icon="icofont icofont-ui-cut" />
          <Service title="Групови уроци" price="50" hours="На урок" class_icon="icofont icofont-tooth" />
          <Service title="Частни уроци" price="60" hours="На час" class_icon="icofont-heart-beat" />
        </div>
      </div>
    </section>
  );
};
export default Pricing;

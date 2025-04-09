import React from "react";
import Service from "./Service";

const Pricing = () => {
  const onlineFeatures = [
    { text: "Достъп до видеа", available: true },
    { text: "Учебни материали PDF", available: true },
    { text: "Тестове след всеки урок", available: true },
    { text: "Личен ментор", available: false },
    { text: "Сертификат", available: false },
  ];

  const groupFeatures = [
    { text: "Присъствени уроци", available: true },
    { text: "Малки групи до 6 човека", available: true },
    { text: "Тестове и упражнения", available: true },
    { text: "Сертификат", available: true },
    { text: "Индивидуален план", available: false },
  ];

  const privateFeatures = [
    { text: "Личен преподавател", available: true },
    { text: "Гъвкав график", available: true },
    { text: "Индивидуален учебен план", available: true },
    { text: "Сертификат", available: true },
    { text: "Достъп до онлайн материали", available: true },
  ];

  return (
    <section className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Ние ти предлагаме най-доброто обучение на разумна цена.</h2>
              <img src="img/section-img.png" alt="#" />
              <p>Избери професионалистите в корейския език</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Service
            title="Онлайн курсове"
            price="40"
            hours="На курс"
            class_icon="icofont-ui-video-chat"
            features={onlineFeatures}
          />
          <Service
            title="Групови уроци"
            price="50"
            hours="На урок"
            class_icon="icofont-group-students"
            features={groupFeatures}
          />
          <Service
            title="Частни уроци"
            price="60"
            hours="На час"
            class_icon="icofont-education"
            features={privateFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

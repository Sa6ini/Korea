import React from "react";
import "./slider.css";
import { motion } from "framer-motion";

export default function SingleSlider(props) {
  return (
    
    <div
      className="single-slider"
      style={{backgroundImage: `url(${props.image})`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Ние предлагаме <span>Обучение</span>, на което може да {" "}
                <span>Разчитате!</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6  }}
              >
                Екип от професионалисти с години опит и образование, което<br></br>
                желаете за вас.
              </motion.p>
              <motion.div
                className="button"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6}}
              >
                <a href="#" className="btn">
                  Запиши се за час
                </a>
                <a href="#" className="btn primary">
                  Научи повече
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

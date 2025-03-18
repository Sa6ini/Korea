import React from "react";
import "./slider.css";
import { motion } from "framer-motion";

export default function SingleSlider(props) {
  return (
    <div
      className="single-slider"
      style={{ backgroundImage: `url(${props.image})` }}
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
                We Provide <span>Medical</span> Services That You Can {" "}
                <span>Trust!</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6  }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed nisl pellentesque, faucibus libero eu, gravida quam.
              </motion.p>
              <motion.div
                className="button"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6}}
              >
                <a href="#" className="btn">
                  Get Appointment
                </a>
                <a href="#" className="btn primary">
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

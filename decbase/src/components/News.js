import React from "react";
import first from '../assets/img/newsFirst.png';
import second from '../assets/img/newsSecond.png';
import { motion } from 'framer-motion';


const animation = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const animation2 = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
const News = () => {
    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="container">
            <section className="news" id="news">
                <h2 className="news__title">LETEST NEWS</h2>
                <h3 className="news__desc">From Our Blog</h3>
                <div className="news__wrap">
                    <motion.div 
                    custom = {4}
                    variants={animation} 
                    className="news__card">
                    <div className="news__card-cont">
                        <img className="news__card-img" src={first} alt="interior"/>
                    </div>
                        <h4 className="news__card-title">2020 Interior Design Trends</h4>
                        <p className="news__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                        <button className="news__card-btn" type="button">CONTINUE READING....</button>
                    </motion.div>
                    <motion.div  
                    custom = {6}
                    variants={animation2} 
                    className="news__card">
                    <div className="news__card-cont">
                        <img className="news__card-img" src={second} alt="interior"/>
                    </div>
                        <h4 className="news__card-title">28 Notable Product at ARC Interior Design</h4>
                        <p className="news__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                        <button className="news__card-btn" type="button">CONTINUE READING....</button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default News;
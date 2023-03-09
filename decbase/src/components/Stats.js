import React from "react";
import { motion } from 'framer-motion';

const animation = {
    hidden: {
      x: -400,
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const animation2 = {
    hidden: {
      x: 400,
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

const Stats = () => {
    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="container">
            <section className="stats" id="stats">
                <h3 className="stats__title">3000+ Completed Work Which WE have Successfully Done</h3>
                <div className="stats__cards">
                    <motion.div 
                    custom = {1}
                    variants={animation2} 
                    className="stats__card stats__card-first">
                        <p className="stats__card-num">980</p>
                        <p className="stats__card-desc">Project</p>
                    </motion.div>
                    <motion.div 
                    custom = {4}
                    variants={animation} 
                    className="stats__card stats__card-second">
                        <p className="stats__card-num">520</p>
                        <p className="stats__card-desc">Happy Client</p>
                    </motion.div>
                    <motion.div 
                    custom = {2}
                    variants={animation2} 
                    className="stats__card stats__card-third">
                        <p className="stats__card-num">330</p>
                        <p className="stats__card-desc">Winners</p>
                    </motion.div>
                    <motion.div 
                    custom = {3}
                    variants={animation} 
                    className="stats__card stats__card-fourth">
                        <p className="stats__card-num">120</p>
                        <p className="stats__card-desc">Recoment</p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default Stats;
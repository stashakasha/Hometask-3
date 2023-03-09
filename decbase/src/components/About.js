import React from "react";
import { motion } from 'framer-motion';
import interFirst from "../assets/img/about1.png";
import interSecond from "../assets/img/about2.png";

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

const About = () => {
    return(
        <div className="container">
            <section className="about" id="about">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="about__learn">
                    <motion.div 
                    custom = {4}
                    variants={animation} 
                    className="about__learn-wrap">
                        <img className="about__learn-img" src={interFirst} alt={"interior"}/>
                    </motion.div>
                    <div className="about__learn-content">
                        <h2 className="about__learn-title">ABOUT US</h2>
                        <h3 className="about__learn-desc">Interioris The Will<br/> of An Epoch Mextreo</h3>
                        <p className="about__learn-text">There are many variations of passages of Lorem Ipsum available,<br/>
                            but the majority have suffered alteration in some form injected
                            humour, or randomised words which don't look even slightly
                            believable.If you are going to use a passage of Lorem Ipsum,
                            sure there isn't anything embarrassing hidden the middleof text.<br/>
                            All the Lorem Ipsum generators on the Internettend to repeat
                            predefined chunks as necessary,making this the first true
                            generator on the Internet.
                        </p>
                        <button className="about__learn-btn" type="button">Learn</button>
                    </div>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="about__read">
                    <div className="about__read-content">
                        <motion.div 
                        custom = {6}
                        variants={animation} 
                        className="about__read-wrapper">
                            <h2 className="about__read-title"><span>20</span></h2>
                        </motion.div>
                        <h3 className="about__read-desc">Years Of Successful Working The Market</h3>
                        <button className="about__learn-btn" type="button">Read more</button>
                    </div>
                    <motion.div 
                    custom = {4}
                    variants={animation2} 
                    className="about__read-wrap">
                        <img className="about__read-img" src={interSecond} alt={"interior"}/>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}

export default About;
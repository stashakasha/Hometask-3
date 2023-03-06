import React from "react";
import interFirst from "../assets/img/about1.png";
import interSecond from "../assets/img/about2.png";

const About = () => {
    return(
        <div className="container">
            <section className="about">
                <div className="about__learn">
                    <div className="about__learn-wrap">
                        <img className="about__learn-img" src={interFirst} alt={"interior"}/>
                    </div>
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
                </div>
                <div className="about__read">
                    <div className="about__read-content">
                        <div className="about__read-wrapper">
                            <h2 className="about__read-title"><span>20</span></h2>
                        </div>
                        <h3 className="about__read-desc">Years Of Successful Working The Market</h3>
                        <button className="about__learn-btn" type="button">Read more</button>
                    </div>
                    <div className="about__read-wrap">
                        <img className="about__read-img" src={interSecond} alt={"interior"}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
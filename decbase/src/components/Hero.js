import React from "react";
import heroImg from '../assets/img/hero.png'

const Hero = () => {
    return(
        <div className="container">
            <section className="hero">
                <div className="hero__wrap">
                    <div className="hero__content">
                        <h2 className="hero__content-title">MODERN INTERIOR</h2>
                        <h1 className="hero__content-desc">Create Your Interior Design.</h1>
                        <p className="hero__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className="hero__content-btn" type="button">Contact</button>
                    </div>
                    <div className="hero__wrapper">
                        <img className="hero__img" src={heroImg} alt={"interior"}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
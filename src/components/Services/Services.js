import React from "react";
import Cards from './Cards';

const Services = () => {

    return(
        <div className="container">
            <section className="services" id="services">
                <h2 className="services__title">WHAT WE DO</h2>
                <h3 className="services__desc">Our Service</h3>
                <div className="services__btns">
                    <button className="services__btn" type="button">ALL</button>
                    <button className="services__btn" type="button">INTERIOR</button>
                    <button className="services__btn" type="button">ARCHITECTURE</button>
                    <button className="services__btn" type="button">PLANNING</button>
                </div>
                <div className="services__cards">
                        <Cards />
                </div>
            </section>
            
        </div>
    );
}

export default Services;
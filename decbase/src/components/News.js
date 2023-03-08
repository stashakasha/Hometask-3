import React from "react";
import first from '../assets/img/newsFirst.png';
import second from '../assets/img/newsSecond.png';

const News = () => {
    return(
        <div className="container">
            <section className="news" id="news">
                <h2 className="news__title">LETEST NEWS</h2>
                <h3 className="news__desc">From Our Blog</h3>
                <div className="news__wrap">
                    <div className="news__card">
                    <div className="news__card-cont">
                        <img className="news__card-img" src={first} alt="interior"/>
                    </div>
                        <h4 className="news__card-title">2020 Interior Design Trends</h4>
                        <p className="news__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                        <button className="news__card-btn" type="button">CONTINUE READING....</button>
                    </div>
                    <div className="news__card">
                    <div className="news__card-cont">
                        <img className="news__card-img" src={second} alt="interior"/>
                    </div>
                        <h4 className="news__card-title">28 Notable Product at ARC Interior Design</h4>
                        <p className="news__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                        <button className="news__card-btn" type="button">CONTINUE READING....</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default News;
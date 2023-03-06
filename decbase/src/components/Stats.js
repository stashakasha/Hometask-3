import React from "react";

const Stats = () => {
    return(
        <div className="container">
            <section className="stats">
                <h3 className="stats__title">3000+ Completed Work Which WE have Successfully Done</h3>
                <div className="stats__cards">
                    <div className="stats__card stats__card-first">
                        <p className="stats__card-num">980</p>
                        <p className="stats__card-desc">Project</p>
                    </div>
                    <div className="stats__card stats__card-second">
                        <p className="stats__card-num">520</p>
                        <p className="stats__card-desc">Happy Client</p>
                    </div>
                    <div className="stats__card stats__card-third">
                        <p className="stats__card-num">330</p>
                        <p className="stats__card-desc">Winners</p>
                    </div>
                    <div className="stats__card stats__card-fourth">
                        <p className="stats__card-num">120</p>
                        <p className="stats__card-desc">Recoment</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Stats;
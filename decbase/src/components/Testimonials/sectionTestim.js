import React from 'react';

import Testimonials from "./Testimonials";

const sectionTestim = () => {

   
    
    return (
        <div className='container'>
            <section className="testimonials" id='testimonials'>
                <h2 className='testimonials__title'>TESTIMONIALS</h2>
                <h3 className='testimonials__desc'>Client says about us</h3>                                    
                        <Testimonials />                                   
            </section>
        </div>
        
    );
}

export default sectionTestim;
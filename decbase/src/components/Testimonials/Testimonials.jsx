import Testimonial from "./component/Testimonial";
import TestimonialsList from "../../assets/data/testimonials.json";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { GrPrevious, GrNext } from 'react-icons/gr'


export default function Testimonials () {

    return (
        <div className="testimonials__items">
            <div className="testimonials__items-nav">
                <div className="prev_button"><GrPrevious className="icon"/></div>
                <div className="next_button"><GrNext fill={"green"}/></div>
            </div>
            
            <Swiper 
            className="testimonials__wrap"
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup ={2}
            speed = {1000}
            loop={false}
            navigation={{
              prevEl: '.prev_button',
              nextEl: '.next_button',
            }}
            >
                 
                    {TestimonialsList.map((testimonial, index) => 
                    <SwiperSlide>
                        <Testimonial key={`${testimonial}_${index}`} testimonial = {testimonial}/>
                    </SwiperSlide>
                    )}                   
                
            </Swiper>
        </div>   
    );
    
}
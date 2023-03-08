

const Testimonial = ({testimonial}) => {
    return (
    <>

         <div className="testimonials__item">
            <div className="testimonials__item-icon">
                <img src={testimonial.testimonialIcon} alt = "Avatar"/>
            </div>
            <div className="testimonials__item-job">
                <span className="testimonials__item-name">
                    {testimonial.testimonialName}
                </span>
                {testimonial.testimonialJob}
            </div>
            <p className="testimonials__item-text">
                {testimonial.testimonialText}
            </p>
        </div>

       
    </>
    );
}

export default Testimonial;
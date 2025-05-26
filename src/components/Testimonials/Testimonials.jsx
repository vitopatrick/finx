import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Trader",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote:
        "The platform's advanced trading tools and real-time analytics have significantly improved my trading strategy. The security features give me peace of mind.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Crypto Investor",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote:
        "As a long-term investor, I appreciate the platform's ease of use and comprehensive portfolio management tools. The customer support is exceptional.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Blockchain Developer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote:
        "The API integration and development tools are top-notch. It's great to see a platform that takes both security and innovation seriously.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">
            What Our <span className="highlight">Users</span> Say
          </h2>
          <p className="testimonials__subtitle">
            Trusted by thousands of crypto traders and investors worldwide
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial__card" key={index}>
              <div className="quote__icon">
                <FaQuoteLeft />
              </div>
              <div className="testimonial__content">
                <p className="testimonial__quote">{testimonial.quote}</p>
                <div className="testimonial__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <div className="testimonial__author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author__image"
                />
                <div className="author__info">
                  <h4 className="author__name">{testimonial.name}</h4>
                  <p className="author__role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

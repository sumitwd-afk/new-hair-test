"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function ResultTestimonialsSection({
  arrows,
  testimonials,
}) {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: testimonials.length > 2,
    speed: 500,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <section className="result-testimonial-wrap">
      <div className="result-testimonial-head">
        <h3>Your Matched Testimonials</h3>

        {!isMobile && (
          <div className="result-testimonial-arrows">
            <button
              type="button"
              className="result-testimonial-prev"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous testimonial"
            >
              <Image
                src={arrows.prevArrow}
                alt=""
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="result-testimonial-next"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next testimonial"
            >
              <Image
                src={arrows.nextArrow}
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>

      {isMobile ? (
        <ul className="result-testimonial-slider">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className="result-testimonial-slide"
            >
              <article className="result-testimonial-card">
                <div className="img-box">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>

                <div className="text-box">
                  <p>{testimonial.quote}</p>
                </div>

                <div className="info-box">
                  <div className="left-box">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.age}</span>
                  </div>

                  <span className="month-capsule">
                    {testimonial.label}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          className="result-testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="result-testimonial-slide"
            >
              <article className="result-testimonial-card">
                <div className="img-box">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>

                <div className="text-box">
                  <p>{testimonial.quote}</p>
                </div>

                <div className="info-box">
                  <div className="left-box">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.age}</span>
                  </div>

                  <span className="month-capsule">
                    {testimonial.label}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
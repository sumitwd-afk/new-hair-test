"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

function YouTubeCard({ testimonial }) {
  const { youtubeId, name, age, label, quote } = testimonial;
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const [playing, setPlaying] = useState(false);

  return (
    <article className="result-testimonial-card">
      <div className="img-box youtube-testi-box">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={name}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "1.2rem" }}
          />
        ) : (
          <>
            <img
              src={thumbnail}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1.2rem", display: "block" }}
            />
            <button
              type="button"
              className="yt-testi-play-btn"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${name} video`}
            >
              <svg viewBox="0 0 68 48" width="54" height="38" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
                <path d="M45 24 27 14v20" fill="white"/>
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="text-box">
        <p>{quote}</p>
      </div>

      <div className="info-box">
        <div className="left-box">
          <h4>{name}</h4>
          <span>{age}</span>
        </div>
        <span className="month-capsule">{label}</span>
      </div>
    </article>
  );
}

export default function ResultTestimonialsSection({ arrows, testimonials }) {
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
              <Image src={arrows.prevArrow} alt="" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="result-testimonial-next"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next testimonial"
            >
              <Image src={arrows.nextArrow} alt="" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {isMobile ? (
        <ul className="result-testimonial-slider">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="result-testimonial-slide">
              <YouTubeCard testimonial={testimonial} />
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
            <div key={testimonial.id} className="result-testimonial-slide">
              <YouTubeCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      )}

      <style>{`
        .youtube-testi-box {
          position: relative;
          aspect-ratio: 9 / 16;
          width: 100%;
          overflow: hidden;
          border-radius: 1.2rem;
          background: #000;
        }
        .yt-testi-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 2;
          transition: transform 0.2s;
        }
        .yt-testi-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.12);
        }
      `}</style>
    </section>
  );
}
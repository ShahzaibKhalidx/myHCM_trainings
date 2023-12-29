import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/slider/1.png",
    slider_text: "MyHCM training Services",
    title: "Transforming Today, Empowering Tomorrow.",
    titleColor: "#f9f9f9",
    total_courses: "3.5k",
    courses_text: "Professional Trainings",
    students: "235k",
    st_text: "Worldwide Clients",
    review: "4.7",
    review_text: "Worldwide Review",
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/3.png",
    slider_text: "MyHCM training Services",
    title: "Leading The Way In Learning Services.",
    titleColor: "#f9f9f9",
    total_courses: "3.5k",
    courses_text: "Professional Trainings",
    students: "235k",
    st_text: "Worldwide Clients",
    review: "4.7",
    review_text: "Worldwide Review",
  },
];

// slider setting
const setting = {
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};


const HeroSlider = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <section className="slider-area">
        <div className="slider-active slider-arrow ">
          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="slick-prev slick-arrow"
                >
                  <i className="fi fi-ss-angle-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="slick-next slick-arrow"
                >
                  <i className="fi fi-ss-angle-right"></i>
                </button>

                <div
                  className="slider-item slider-bg-height d-flex align-items-center p-relative"
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-12">
                        <div className="slider-content">
                          <span className="slider-text mb-15">
                            {item.slider_text}
                          </span>
                          <h2 className="slider-title mb-65" style={{ color: item.titleColor}}>
                            {item.title}
                          </h2>
                          <div className="slider-btn">
                            <Link className="tp-btn mr-5" href="/subscribe" style={{backgroundColor: "#f9f9f9", color:"#243D97"}}>
                              Subscribe
                            </Link> {" "}
                            <Link
                              className="tp-s-border-btn"
                              href="#"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                        <div className="slider-info-list">
                          <ul>
                            <li>
                              <span>{item.total_courses}</span> {item.courses_text}
                            </li>
                            <li>
                              <span>{item.students}</span>{item.st_text}
                            </li>
                            <li>
                              <span>
                                {item.review} <i className="fi fi-ss-star"></i>
                              </span>
                               {item.review_text}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;

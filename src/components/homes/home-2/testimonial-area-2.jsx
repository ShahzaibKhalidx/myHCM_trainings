import React, { useRef } from "react";
import Slider from "react-slick";

//testimonial_data_2 
const testimonial_data_2 = [
  {
    id: 1,
    name: "Kantar",
    img: "/assets/img/icon/4.png",
    title: "UX/UI Designer",
    des: (
      <>
        "Transformative and practical –elevated my skills to new heights."
      </>
    ),
  },
  {
    id: 2,
    name: "My Cart",
    img: "/assets/img/icon/8.png",
    title: "Software Engineer",
    des: (
      <>
        "Incredible team-building impact —our productivity soared.”
      </>
    ),
  },
  {
    id: 3,
    name: "Zephyr Power Limited",
    img: "/assets/img/icon/5.png",
    title: "Sr. UX/UI Designer",
    des: (
      <>
        "I wanted to express my sincere gratitude for arranging the Advance
        Excel training. Your efforts and dedication to providing valuable
        learning experiences are truly commendable. I appreciate the opportunity
        to enhance my skills in such a crucial area."
      </>
    ),
  },
  {
    id: 4,
    name: "My Water",
    img: "/assets/img/icon/10.png",
    title: "Sr. UX/UI Designer",
    des: (
      <>
        "Thoroughly impressed with the hands-on approach. The training at MyHCM Training Services not only enhanced my skills but also boosted my confidence in applying this in my real life.
      </>
    ),
  },
  // {
  //   id: 5,
  //   name: "Zephyr Power Limited",
  //   img: "/assets/img/icon/test-avata--2.png",
  //   title: "Sr. UX/UI Designer",
  //   des: (
  //     <>
  //       "I wanted to express my sincere gratitude for arranging the Advance
  //       Excel training. Your efforts and dedication to providing valuable
  //       learning experiences are truly commendable. I appreciate the opportunity
  //       to enhance my skills in such a crucial area."
  //     </>
  //   ),
  // },
  // {
  //   id: 3,
  //   name: "Zephyr Power Limited",
  //   img: "/assets/img/icon/test-avata--2.png",
  //   title: "Sr. UX/UI Designer",
  //   des: (
  //     <>
  //       "I wanted to express my sincere gratitude for arranging the Advance
  //       Excel training. Your efforts and dedication to providing valuable
  //       learning experiences are truly commendable. I appreciate the opportunity
  //       to enhance my skills in such a crucial area."
  //     </>
  //   ),
  // },
];

//   testimonial setting
const setting = {
  infinite: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const TestimonialAreaTwo = ({ style_about }) => {
  const sliderRef = useRef(null);

  return (
    <>
      <section
        className="testimonial-white-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-8">
              <div className="section-title mb-35">
                <span className="tp-sub-title-box mb-15">Testimonial</span>
                <h2 className="tp-section-title mb-20">A Legacy of Satisfied Clients</h2>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="tp-section-arrow d-flex justify-content-md-end">

                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickPrev()}
                  className="slick-prev slick-arrow"
                >
                  <i className="arrow_carrot-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef?.current?.slickNext()}
                  className="slick-next slick-arrow"
                >
                  <i className="arrow_carrot-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="testimonial--active tp-slide-space">
            <Slider {...setting} ref={sliderRef}>
              {testimonial_data_2.map((item, i) => (
                <div key={i} className="tp-test-s-item">
                  <div className="tp-testi">
                    <div className="tp-testi__ava d-flex align-items-center mb-15">
                      <img
                        src={item.img}
                        alt="testi-avatar"
                      />
                      <div className="tp-testi__avainfo ml-20">
                        <h3 className="tp-testi__title mt-5">
                          <a href="#">{item.name}</a>
                        </h3>
                        <i>{item.title}</i>
                      </div>
                    </div>
                    <p>
                      {item.des}
                    </p>
                    <div className="tp-testi__rating mb-5">
                      <ul className="d-flex align-items-center">
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-ss-star"></i>
                        </li>
                        <li>
                          <i className="fi fi-rs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaTwo;

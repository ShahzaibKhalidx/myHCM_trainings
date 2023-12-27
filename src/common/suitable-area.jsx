import Link from "next/link";
import React from "react";

// suitable_data
const suitable_data = [
  {
    id: 1,
    title: (
      <>
        Upcoming <span>Workshops</span>?
      </>
    ),
    des: <>Get early access to our latest workshops.</>,
    img: "/assets/img/bg/suit-bg-01.png",
  },
  {
    id: 2,
    title: (
      <>
        Upcoming <span>Events</span>?
      </>
    ),
    des: <>Receive updates on our upcoming events.</>,
    img: "/assets/img/bg/suit-bg-02.png",
  },
];

const SuitableArea = ({ style_2}) => {
  return (
    <>
      <section
        className={`suitable-area  ${
          style_2 ? "bg-bottom grey-bg pt-115" : ""
        } pb-90 wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{
          backgroundImage: style_2
            ? `url(/assets/img/bg/shape-bg-1.png)`
            : null,
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-25">Join With Us</span>
                <h2 className="tp-section-title">
                  Be the First One To Know!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {suitable_data.map((item) => (
              <div key={item.id} className="col-xl-6">
                <div
                  className={`tp-suit mb-30 p-relative ${
                    style_2 ? "white-bg" : ""
                  }`}
                >
                  <div className="tp-suit__content">
                    <h4 className="tp-suit__title">{item.title}</h4>
                    <p>{item.des}</p>
                    <div className="tp-suit__btn pt-5">
                      <Link href="/contact" className="tp-border-btn">
                        Subscribe
                      </Link>
                    </div>
                  </div>
                  <div className="tp-suit__tech">
                    <img src={item.img} alt="suitable-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuitableArea;

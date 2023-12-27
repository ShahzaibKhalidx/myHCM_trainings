import React from "react";

const footer_data = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-2",
    footer_col: "footer-col-1",
    links: [
      { name: "About Us", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Upcoming Events", link: "#" },
      { name: "Finishing School", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    cls: "col-xl-3",
    footer_col: "footer-col-2",
    links: [
      { name: "Subscribe Form", link: "#" },
      { name: "Get In Touch", link: "#" },
      { name: "Terms & Conditions", link: "#" },
      { name: "Privacy Policy", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Partners",
    footer_col: "footer-col-3",
    cls: "col-xl-3",
    links: [
      { name: "MyHCM", link: "#" },
      { name: "MyWater", link: "#" },
      { name: "LinkedIn", link: "#" },
      { name: "Instagram", link: "#" },
    ],
  },
];


// social_links
const social_links = [
  {
    link: "https://wa.me/+923268048283",
    target: "_blank",
    icon: "fab fa-whatsapp",
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/showcase/myhcm-taas/",
    target: "_blank",
    icon: "fab fa-linkedin",
    name: "Youtube",
  },
  {
    link: "https://www.facebook.com/profile.php?id=61553825309948",
    target: "_blank",
    icon: "fa-brands fa-facebook-f",
    name: "Instagram",
  },

  {
    link: "https://www.instagram.com/myhcm_training/",
    target: "_blank",
    icon: "fa-brands fa-instagram",
    name: "Twitter",
  },
];

const copyright = {
  logo: "/assets/img/logo/logo.png",
  copyright_text: (
    <>Copyright © MyHCMTrainings {new Date().getFullYear()}, All Rights Reserved</>
  ),
};

const { logo, copyright_text } = copyright;
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg bg-bottom"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
        >
          <div className="f-border pt-115 pb-70">
            <div className="container">
              <div className="row">
                {footer_data.map((item) => (
                  <div key={item.id} className={`${item.cls} col-md-4`}>
                    <div className={`footer-widget ${item.footer_col} mb-50`}>
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <a href="#">{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="footer-widget footer-col-4  mb-50">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">MyHCM Training Services</h3>
                    </div>
                    <p>
                    Elevate your business efficiency and innovation with us by empowering seamless and transformative solutions that optimize processes, foster growth and drive sustainable success.
                    </p>
                    {/* <div className="footer-widget__f-newsletter mb-40">
                      <form  onSubmit={(e) => e.preventDefault()}>
                        <span>
                          <i className="icon_mail_alt"></i>
                        </span>
                        <input type="email" placeholder="Enter your email" />
                        <button className="footer-widget__submit tp-border-btn2">
                          Subscribe Now
                        </button>
                      </form>
                    </div> */}
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a href={link.link} target={link.target} key={i}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="f-copyright__logo mb-30">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="f-copyright__text text-md-end mb-30">
                    <span>{copyright_text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

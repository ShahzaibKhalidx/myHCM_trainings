import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/logo-black.png" alt="logo" />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
            <MobileMenus />
        </div>
        <div className="sidebar-info">
          <h4 className="mb-15">Contact Info</h4>
          <ul className="side_circle">
            <li>1D، 28, Sector 30 Korangi Industrial Area, Karachi, Karachi City, Sindh</li>
            <li>
              <a href="tel:123456789">+92 3268 048 283</a>
            </li>
            <li>
              <a href="mailto:trainingservices@myhcm.pk">trainingservices@myhcm.pk</a>
            </li>
          </ul>
          <div className="side-social">
            <a href="https://www.facebook.com/profile.php?id=61553825309948">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/+923268048283">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/showcase/myhcm-taas/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/myhcm_training/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${isActive ? "opened" : ""} `} onClick={() => setIsActive(false)}></div>
    </>
  );
};
export default Sidebar;

import React from "react";

const MapArea = () => {
  return (
    <>
      <div
        className="map-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115871.61082564139!2d67.01727875452329!3d24.830089517712057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3eb33b1dd6ea333d%3A0x274914f38ef82931!2sPlot%20%23%201D%20203%D8%8C%2C%20Sector%2030%20Karachi%2C%20Karachi%20City%2C%20Sindh!3m2!1d24.830112099999997!2d67.0996803!5e0!3m2!1sen!2s!4v1704894053504!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapArea;

import React from 'react';

// location_info
const location_info = [
    {
        id: 1,
        icon: "fa-light fa-phone",
        info: "+92-326-8048283"
    }, 
    {
        id: 2,
        icon: "fa-light fa-location-dot",
        info: "1D، 28, Sector 30 Korangi Industrial Area, Karachi, Karachi City, Sindh"
    }, 
    {
        id: 3,
        icon: "fi fi-rr-envelope",
        info: "trainingservices@myhcm.pk"
    },
]


const LocationArea = () => {
    return (
        <>
            <section className="location-area pt-120 pb-85 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row">               
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                     <div className="location-icon mb-25">
                        <i className="fa-light fa-phone"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title"><a href="tell:+923268048283">+92-326-8048-283</a></h5>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".4s">
                     <div className="location-icon mb-25">
                        <i className="fa-light fa-location-dot"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title">1D، 28, Sector 30 Korangi Industrial Area, Karachi, Karachi City, Sindh</h5>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">
                     <div className="location-icon mb-25">
                        <i className="fi fi-rr-envelope"></i>
                     </div>
                     <div className="location-content">
                        <h5 className="location-title"><a href="mailto:trainingservices@myhcm.pk">trainingservices@myhcm.pk</a></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default LocationArea;
import Link from 'next/link';
import workshopDetails from "@/src/data/workshop-details";

const CourseDetailsArea = ({ workContent }) => {

   if (!workContent) {
      return <p>Workshop not found</p>;
   }

   const {
      instructor,
      aboutCourse,
      modulesDetails,
   } = workContent;

   return (
      <>
         <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 col-md-12">
                     <div className="c-details-wrapper mr-25">
                        <div className="c-details-thumb p-relative mb-40">
                           <img src={aboutCourse.main_image} alt="details-bg" />
                           <div className="c-details-ava d-md-flex align-items-center">
                              <img src={instructor.avatar} alt="avatar" />
                              <span>By <a href="#">{instructor.name}</a></span>
                           </div>
                        </div>
                        <div className="course-details-content mb-45">
                           <div className="tpcourse__category mb-15">
                              <ul className="tpcourse__price-list d-flex align-items-center">
                                 <li><a className="c-color-green" href="#">{aboutCourse.tag_one}</a></li>
                                 <li><a className="c-color-yellow" href="#">{aboutCourse.tag_two}</a></li>
                              </ul>
                           </div>
                           <div className="tpcourse__ava-title mb-25">
                              <h4 className="c-details-title"><a href="#">{aboutCourse.title}</a></h4>
                           </div>
                           <div className="tpcourse__meta course-details-list">
                              <ul className="d-flex align-items-center">
                                 <li>
                                    <div className="rating-gold d-flex align-items-center">
                                       <p>{aboutCourse.rating}</p>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-rs-star"></i>
                                       <span>{aboutCourse.ratingCount}</span>
                                    </div>
                                 </li>
                                 <li><img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" /> <span>{aboutCourse.time}</span></li>
                                 <li><img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" /> <span>{aboutCourse.date}</span></li>
                              </ul>
                           </div>
                        </div>
                        <div className="c-details-about mb-40">
                           {modulesDetails.map((module, index) => (
                              <div key={index}>
                                 <h5 className="tp-c-details-title mb-20">{module.heading}</h5>
                                 <p>{module.description}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                     <div className="c-details-sidebar">
                        <div className="c-video-thumb p-relative mb-25">
                           <img src="/assets/img/bg/c-details-video-bg.jpg" alt="video-bg" />
                        </div>
                        <div className="course-details-widget">
                           <div className="cd-video-price">
                              <h3 className="pricing-video text-center mb-15">Workshop</h3>
                              <div className="cd-pricing-btn text-center mb-30">
                                 <Link className="tp-vp-btn" href="/subscribe">Subscribe</Link>
                                 <Link className="tp-vp-btn-green" href="/contact">Get Now</Link>
                              </div>
                           </div>
                           <div className="cd-information mb-35">
                              <ul>
                                 <li><i className="fa-light fa-calendars"></i> <label>Facilitator</label> <span>{instructor.name}</span></li>
                                 <li><i className="fi fi-rr-chart-pie-alt"></i> <label>Timings</label> <span>{aboutCourse.time}</span></li>
                                 <li><i className="fi fi-rr-user"></i> <label>Date</label> <span>{aboutCourse.date}</span></li>
                                 <li><i className="fa-light fa-clock-desk"></i> <label>Day</label> <span>{aboutCourse.day}</span></li>
                                 <li><i className="fi fi-sr-stats"></i> <label>Skill Level</label> <span>{aboutCourse.skill}</span></li>
                                 <li><i className="fi fi-rr-comments"></i> <label>Language</label> <span>English</span></li>
                                 <li><i className="fi fi-rs-diploma"></i> <label>Certificate</label> <span>Yes</span></li>
                              </ul>
                           </div>
                           <div className="c-details-social">
                              <h5 className="cd-social-title mb-25">Share Now:</h5>
                              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                              <a href="#"><i className="fa-brands fa-youtube"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CourseDetailsArea;
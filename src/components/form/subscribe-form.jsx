import Link from "next/link";
import React from "react";

const SubscribeForm = () => {
  return (
    <>
      <section
        className="login-area pt-100 pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Subscribe to Stay Updated</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="name">
                    Name <span>**</span>
                  </label>
                  <input id="name" type="text" placeholder="Enter Name" />
                  <label htmlFor="email-id">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email-id"
                    type="text"
                    placeholder="Email address..."
                  />
                  <label htmlFor="company">
                    Company <span>**</span>
                  </label>
                  <input id="company" type="text" placeholder="Company Name" />
                  
                  <div className="checkbox-agree">
                    <p>Pick Your Interest</p>
                    <label htmlFor="ls">Learning Resources</label>
                    <input type="checkbox" id="ls" style={{height:"20px"}}/>
                    <label htmlFor="eu">Event Updates</label>
                    <input type="checkbox" id="eu" style={{height:"20px"}}/>
                  </div>

                  <div className="subscription-options">
                    <p>Preferred Format</p>
                    <div>
                      <label htmlFor="html">HTML</label>
                      <input style={{height:"20px"}}
                        type="radio"
                        id="html"
                        name="subscription"
                        value="html"
                      />
                    </div>

                    <div>
                      <label htmlFor="plan">Plain Text</label>
                      <input style={{height:"20px"}}
                        type="radio"
                        id="plain"
                        name="subscription"
                        value="plain_text"
                      />
                    </div>
                  </div>



                  <div className="mt-10"></div>
                  <button className="tp-border-btn w-100">Subscribe</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeForm;

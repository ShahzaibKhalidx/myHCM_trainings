import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const SubscribeForm = () => {
  const [state, handleSubmit, reset] = useForm('xleqedyj');
  if (state.succeeded) {
    return (
    <>
      <div className="container pt-100 pb-100 fadeInUp">
        <div className="row">
          <div className="col-lg-6 offset-lg-2">
            <h3 className="text-center">Thank you for Contacting!</h3>
          </div>
        </div>
      </div>
    </>);
  }
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
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">
                    Name <span>**</span>
                  </label>
                  <input id="name" type="text" name="name" placeholder="Enter Name" />

                  <label htmlFor="email">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address..."
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <label htmlFor="company">
                    Company <span>**</span>
                  </label>
                  <input id="company" type="text" name="company" placeholder="Company Name" />

                  <div className="checkbox-agree">
                    <p>Pick Your Interest</p>
                    <label htmlFor="ls">Learning Resources</label>
                    <input 
                    type="checkbox" 
                    id="ls" 
                    name="interest"
                    value="learning_resources"
                    style={{ height: "20px" }} />
                    <label htmlFor="eu">Event Updates</label>
                    <input 
                    type="checkbox"
                    id="eu" 
                    name="interest"
                    value="event_updates"
                    style={{ height: "20px" }} />
                  </div>

                  <div className="subscription-options">
                    <p>Preferred Format</p>
                    <div>
                      <label htmlFor="html">HTML</label>
                      <input style={{ height: "20px" }}
                        type="radio"
                        id="html"
                        name="subscription"
                        value="html"
                      />
                    </div>

                    <div>
                      <label htmlFor="plan">Plain Text</label>
                      <input style={{ height: "20px" }}
                        type="radio"
                        id="plain"
                        name="subscription"
                        value="plain_text"
                      />
                    </div>
                  </div>
                  <div className="mt-10"></div>
                  <button type="submit" disabled={state.submitting}
                    className="tp-border-btn w-100">Subscribe</button>
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

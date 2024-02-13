import { useState } from "react";
import Modal from "react-modal";
import { useForm, ValidationError } from '@formspree/react';


const FormModal = ({ showModal, setShowModal }) => {
  const [state, handleSubmit] = useForm('xpzvzlve');
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(255, 255, 255, 0.65)",
      padding: "25px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "5px 15px 30px rgba(5, 13, 54, 0.06)",
    },
  };

  return (
    <div>
      <Modal isOpen={showModal} style={customStyles} onRequestClose={() => setShowModal(false)}>
        <div className="container">
          <div className="row">
            <h3 className="text-center">Submit to Get Enrolled</h3>
            {state.succeeded && <p className="text-success">Form submitted successfully!</p>}
            <form onSubmit={handleSubmit}>
              <div className='col-lg-12 mt-4'>
                <div className='single-input-inner style-border'>
                  <input type='text' id="name" placeholder='Name Here' name="name" required />
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='single-input-inner style-border'>
                  <input type='email' id="email" placeholder='Email Here' name="email" required />
                </div>
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <div className='col-lg-12'>
                <div className='single-input-inner style-border'>
                  <input type='phone' id="phone" placeholder='Phone Here' name="phone" required />
                </div>
              </div>
              <div className='col-lg-12 mb-4'>
                <div className='single-input-inner style-border'>
                  <input type='text' id="course" placeholder='Course Intrested' name="course" required />
                </div>
              </div>
              <div className="row">
                <div className='col-6'>
                  <button type="submit" disabled={state.submitting} className='tp-border-btn'>
                    Submit
                  </button>
                </div>
                <div className='col-6 text-center d-flex align-item-center  justify-content-end'>
                  <button className="tp-btn"
                    onClick={() => setShowModal(false)}>
                    close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
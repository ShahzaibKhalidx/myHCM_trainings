// components/FormButton.js

import React, { useEffect } from 'react';

const FormButton = () => {
  useEffect(() => {
    const loadFormbutton = () => {
      window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
      formbutton("create", { action: "https://formspree.io/xpzvzlve" });
    };

    const checkFormbutton = () => {
      if (window.formbutton && window.formbutton._modal && window.formbutton._modal.modalEl) {
        // Ensure the modalEl exists before removing the event listener
        window.formbutton._modal.modalEl.removeEventListener('load', checkFormbutton);
      }
    };

    // Check if the Formbutton script is already loaded
    if (window.formbutton) {
      loadFormbutton();
      checkFormbutton();
    } else {
      // If not loaded, add an event listener for when it's loaded
      document.addEventListener('formbuttonReady', loadFormbutton);

      // Also, add an event listener to check when the modalEl is available
      document.addEventListener('DOMContentLoaded', checkFormbutton);
    }

    // Cleanup: remove the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('formbuttonReady', loadFormbutton);
      document.removeEventListener('DOMContentLoaded', checkFormbutton);
    };
  }, []);

  return <div />; // You can customize this div with your own styling or additional content
};

export default FormButton;

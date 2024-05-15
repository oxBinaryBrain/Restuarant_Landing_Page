import React, { useState } from "react";
import ContactSubmit from "./ContactSubmit";

const Contact = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    // Set the state to trigger redirection
    setRedirect(true);
  };

  // Render AnotherComponent if redirect state is true
  if (redirect) {
    return <ContactSubmit />;
  }

  return (
    <div className="contact-container"> {/* Wrapping content in a container */}
      <div id="Contact" className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

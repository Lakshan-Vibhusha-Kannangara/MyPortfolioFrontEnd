import React from "react";
import ContactForm from "../ContactForm/ContactForm";
function Footer() {
    return ( <div className="footer">
    <div className="container">
      <div className="row">
        {/* Contact Form */}
        <ContactForm></ContactForm>
        {/* Technology Stack */}
        <div className="col-md-3 py-3">
          <h6 className="text-uppercase fw-bold mb-4">Technology Stack</h6>
          <p>
            <a href="#!" className="text-reset">
              MongoDB
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              ExpressJs
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              React
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              NodeJs
            </a>
          </p>
        </div>

        {/* Useful Links */}
        <div className="col-md-3 py-3">
          <h6 className="text-uppercase fw-bold mb-4">Extra</h6>
          <p>
            <a href="#!" className="text-reset">
              Settings
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Help
            </a>
          </p>
        </div>

        {/* Contact Information */}
        <div className="col-md-2 py-3">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <i className="fas fa-home me-3"></i> Aluthgama,Sri Lanka
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i>{" "}
            vibhooshakannangara@gmail.com
          </p>
          <p>
            <i className="fas fa-phone me-3"></i> (+94)071-754-4878
          </p>
          <p>
            <i className="fas fa-print me-3"></i> (+94)071-754-4878
          </p>
        </div>
      </div>
    </div>
  </div> 
        );
}

export default Footer;
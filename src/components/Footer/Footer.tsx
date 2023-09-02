import React from "react";
import ContactForm from "../ContactForm/ContactForm";
function Footer() {
    return (   <div className="container" style={{zIndex:1000}}>
    <div className="row">
      {/* Contact Form */}
      <ContactForm></ContactForm>
      {/* Technology Stack */}
  

      {/* Useful Links */}
     

      {/* Contact Information */}
      <div className="col-md-4 py-3" style={{left:'20%',position:'relative',color:'white'}}>
        <h6 className="text-uppercase fw-bold mb-4" style={{color:'white'}}>Contact</h6>
        <p>
          <i className="fas fa-home me-3" style={{color:'white'}}></i>   Aluthgama ,Western Province,  Sri Lanka
        </p>
        <p style={{color:'white'}}>
          <i className="fas fa-envelope me-3"></i>{" "}
          vibhooshakannangara@gmail.com
        </p>
        <p>
          <i className="fas fa-phone me-3"></i> (+94)071-754-4878
        </p>
        <p>
          <i className="fas fa-print me-3"></i> (+94)071-282-1106  
        </p>
      </div>
    </div>
  </div> 
        );
}

export default Footer;
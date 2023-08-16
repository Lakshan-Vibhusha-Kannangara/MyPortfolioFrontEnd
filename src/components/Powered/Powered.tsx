import React from 'react';
import './Powered.css'; // Import CSS file for styling

const Power = () => {
  // Picsum image URLs for 200x200px images
  const imageUrls = [
    'https://webimages.mongodb.com/_com_assets/cms/kuztefjfmcr54smwt-Meta_Blogs.png',
    'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
    'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    'https://appian.com/content/dam/appian-aem/partners/amazon-web-services/logo-powered-by-amazon.png',
  ];

  return (
    <div className="container my-4">
      <p style={{fontSize:"30px"}}>Version 1.0</p>
    <div className="row">
      {imageUrls.slice(0, 4).map((imageUrl, index) => (
        <div key={index} className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src={imageUrl} alt={`Card ${index + 1}`} className="card-img-top" />
          </div>
        </div>
      ))}
    </div>
    <div className="row justify-content-center mt-4">
    <p style={{fontSize:"30px"}}>Version 2.0</p>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="card power-card-center">
          <img src={imageUrls[4]} alt="Center Card" className="card-img-top" />
        </div>
      </div>
    </div>
    <div className="row mt-4"  >
      <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
        <div className="card power-card" style={{bottom:"250px",position:"relative",left:"100px"}}>
          <img src="https://www.appsdeveloperblog.com/wp-content/uploads/2022/08/spring_boot.png" alt="Card 5" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Spring Boot</h5>
            <p className="card-text">Java Platform, Enterprise Edition, Better for calculation intensive tasks</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
        <div className="card power-card" style={{bottom:"250px",position:"relative",right:"100px"}}>
          <img src="data:image/png;base64,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" alt="Card 6" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">MySQL</h5>
            <p className="card-text">Relational Databases</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}




export default Power;

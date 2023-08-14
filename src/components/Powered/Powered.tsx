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
      <div className="row">
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src={imageUrls[0]} alt="Card 1" className="card-img-top" />
          </div>
        </div>
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src={imageUrls[1]} alt="Card 2" className="card-img-top" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src={imageUrls[2]} alt="Card 3" className="card-img-top" />
          </div>
        </div>
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src={imageUrls[3]} alt="Card 4" className="card-img-top" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center" style={{position:'relative',top:'100px'}} >
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card power-card-center">
            <img src={imageUrls[4]} alt="Center Card" className="card-img-top" />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-12">
          <h2 className="text-center mb-4"  style={{position:'relative'}}>Version 2.0 -Backend is different</h2>
        </div>
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src="https://www.appsdeveloperblog.com/wp-content/uploads/2022/08/spring_boot.png" alt="Card 5" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Spring Boot</h5>
              <p className="card-text">Java Platform, Enterprise Edition</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div className="card power-card">
            <img src="data:image/png;base64,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" alt="Card 6" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">MySQL</h5>
              <p className="card-text">Better for calculation intensive tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Power;

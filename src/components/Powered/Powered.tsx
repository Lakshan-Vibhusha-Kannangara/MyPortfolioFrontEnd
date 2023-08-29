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
    <div style={{width:'100%',position:'relative',margin:'5%'}}>
      <div className="row">
        <div className="col-md-4" style={{width:'500px'}}>
          <div className="row">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="card power-card">
                <img src={imageUrls[0]} alt="Card 1" className="card-img-top" />
                <div className="card-body">
      
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="card power-card">
                <img src={imageUrls[1]} alt="Card 2" className="card-img-top" />
                <div className="card-body">
       
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4"  style={{width:'500px',top:'40%'}}>
         
             <div className="row">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="card power-card">
                <img src={imageUrls[4]} alt="Card 5" className="card-img-top" />
                <div className="card-body">
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4"  style={{width:'500px'}}>
          <div className="row">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="card power-card">
                <img src={imageUrls[3]} alt="Card 4" className="card-img-top" />
                <div className="card-body">
    
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="card power-card">
                <img src={imageUrls[2]} alt="Card 3" className="card-img-top" />
                <div className="card-body">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;

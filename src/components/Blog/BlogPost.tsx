import React from "react";


interface Author {
  name: string;
  image: string;
}

interface BlogPostProps {
  title: string;
  imageUrl: string;
  author: Author;
  publishDate: string;
  content: string;
  images: string[];
  listItems: string[];
}

function BlogPost(props: BlogPostProps) {
  const { title, author, publishDate, content, images, listItems } = props;

  return (
    <div className="col-md-20 mb-4">
      <section className="border-bottom mb-4">
   

        <div className="row align-items-center mb-4">
    
        </div>
      </section>
      <section>
     
        <h1>{title}</h1>
        <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
            <img 
              src={author.image}
              className="rounded-5 shadow-1-strong me-2"
              height="35"
              alt={author.name}
              loading="lazy"
            />
            <span>
              {" "}
              Published <u>{publishDate}</u> by
            </span>
            <a  className="text-dark">
              {author.name}
            </a>
          </div>
       <div style={{margin:"10px"}}> <h5>{content}</h5></div>
        

        <img
          alt=""
          src={images[0]} // Display the first image from the images array
          className="img-fluid"
     
        />

  <div style={{margin:"30px"}}>
  <p>{listItems[0]}</p>
        <p>{listItems[1]}</p>
        <p>{listItems[2]}</p>
        <p>{listItems[3]}</p>
        <p>{listItems[4]}</p>

  
  </div>
      </section>
      <section>
        {/* You can add more sections and content here */}
      </section>

    
    </div>
  );
}

export default BlogPost;

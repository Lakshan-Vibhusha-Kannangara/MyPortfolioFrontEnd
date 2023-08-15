import React from "react";
import Header from "./Header";
import BlogPost from "./BlogPost";
import Sidebar from "./SideBar";

interface AuthorData {
  name: string;
  image: string;
}

interface BlogPostData {
  title: string;
  imageUrl: string;
  author: AuthorData;
  publishDate: string;
  content: string;
  images: string[];
  listItems: string[];
}

interface BlogProps {
  blogPosts?: BlogPostData[]; // Make blogPosts prop optional
}

function Blog(props: BlogProps) {
  if (!props.blogPosts) {
    return <div></div>; // Render an empty div if blogPosts is undefined
  }

  return (
    <main className="mt-4 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Header />
            {props.blogPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                imageUrl={post.imageUrl}
                author={post.author}
                publishDate={post.publishDate}
                content={post.content}
                images={post.images}
                listItems={post.listItems}
              />
            ))}
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;

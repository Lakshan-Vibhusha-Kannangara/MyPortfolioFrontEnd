import React, { useState } from "react";

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
  blogPosts?: BlogPostData[];
}

function Blog(props: BlogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1; // Number of posts to display per page

  if (!props.blogPosts || props.blogPosts.length === 0) {
    return <div>No blog posts available.</div>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(props.blogPosts.length / postsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="mt-4 mb-5">
      <div style={{ left: "20%", position: "relative", top: "40px" }}>
        <h1>My Blog Space</h1>
       <div style={{marginBottom:'3vh'}}> <ul className="pagination">
          {Array.from(
            { length: totalPages - 1 },
            (
              _,
              index // Subtract 1 from totalPages
            ) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul></div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {currentPosts.map((post, index) => (
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
            {/* Pagination */}
            <div style={{ left: "40%", position: "relative" }}>
              {" "}
              <ul className="pagination">
                {Array.from(
                  { length: totalPages - 1 },
                  (
                    _,
                    index // Subtract 1 from totalPages
                  ) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => paginate(index + 1)}
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="sidebar"
              style={{
                position: "fixed",
                top: "14%",
                right: "15%",
                width: "20%",
              }}
            >
              {/* Sidebar content */}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;

import React from "react";
function Blog() {
  return (
    <div>
      <header>
        <div id="intro" className="p-5 text-center bg-light">
          <h1 className="mb-0 h4">Not fully implemented yet</h1>
        </div>
      </header>

      <main className="mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">
              <section className="border-bottom mb-4">
                <img
                  src=""
                  className="img-fluid shadow-2-strong rounded-5 mb-4"
                  alt=""
                />

                <div className="row align-items-center mb-4">
                  <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/People/img (24).jpg"
                      className="rounded-5 shadow-1-strong me-2"
                      height="35"
                      alt=""
                      loading="lazy"
                    />
                    <span>
                      {" "}
                      Published <u>15.08.2023</u> by
                    </span>
                    <a href="" className="text-dark">
                     
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio sapiente molestias consectetur. Fuga nulla officia error
                  placeat veniam, officiis rerum laboriosam ullam molestiae
                  magni velit laborum itaque minima doloribus eligendi! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Optio
                  sapiente molestias consectetur. Fuga nulla officia error
                  placeat veniam, officiis rerum laboriosam ullam molestiae
                  magni velit laborum itaque minima doloribus eligendi!
                </p>

                <p>
                  <strong>Optio sapiente molestias consectetur?</strong>
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  architecto ex ab aut tempora officia libero praesentium, sint
                  id magnam eius natus unde blanditiis. Autem adipisci totam sit
                  consequuntur eligendi.
                </p>

                <p className="note note-light">
                  <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Optio odit consequatur porro sequi ab
                  distinctio modi. Rerum cum dolores sint, adipisci ad veritatis
                  laborum eaque illum saepe mollitia ut voluptatum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, libero repellat molestiae aperiam laborum aliquid
                  atque magni nostrum, inventore perspiciatis possimus quia
                  incidunt maiores molestias eaque nam commodi! Magnam, labore.
                </p>

                <img
                  src=""
                  className=""
                  alt=""
                />

                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                  <li>Sit</li>
                  <li>Amet</li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  temporibus nulla voluptatibus accusantium sapiente doloremque.
                  Doloribus ratione laboriosam culpa. Ab officiis quidem,
                  debitis nostrum in accusantium dolore veritatis eius est?
                </p>
              </section>

              <section className="text-center border-top border-bottom py-4 mb-4">
                <p>
                  <strong>Share with your friends:</strong>
                </p>

                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-linkedin"></i>
                </button>
                <button type="button" className="btn btn-primary me-1">
                  <i className="fas fa-comments me-2"></i>Add comment
                </button>
              </section>

              <section className="border-bottom mb-4 pb-4">
                <div className="row">
                  <div className="col-3">
                    <img
                      src=""
                      className="img-fluid shadow-1-strong rounded-5"
                      alt=""
                    />
                  </div>

                  <div className="col-9">
                    <p className="mb-2">
                      <strong></strong>
                    </p>
                    <a href="" className="text-dark">
                      <i className="fab fa-facebook-f me-1"></i>
                    </a>
                    <a href="" className="text-dark">
                      <i className="fab fa-twitter me-1"></i>
                    </a>
                    <a href="" className="text-dark">
                      <i className="fab fa-linkedin me-1"></i>
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio est ab iure inventore dolorum consectetur?
                      Molestiae aperiam atque quasi consequatur aut? Repellendus
                      alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
              </section>


              <section>
                <p className="text-center">
                  <strong>Leave a reply</strong>
                </p>

                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form4Example1"
                      className="form-control"
                    />
                    <label className="form-label">Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form4Example2"
                      className="form-control"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      rows={4}
                    ></textarea>
                    <label className="form-label">Text</label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form4Example4"
                      checked
                    />
                    <label className="form-check-label">
                      Send me a copy of this comment
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Publish
                  </button>
                </form>
              </section>
            </div>

            <div className="col-md-4 mb-4">
              <section className="sticky-top" style={{ top: "80px" }}>
                <section className="text-center border-bottom pb-4 mb-4">
                  <div className="bg-image hover-overlay ripple mb-4">
                    <img
                      src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds"
                      className="img-fluid"
                    />
                    <a href="" target="_blank">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                  <h5>whats new on AI</h5>

                  <a
                    role="button"
                    className="btn btn-primary"
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                  >
                    Download for free<i className="fas fa-download ms-2"></i>
                  </a>
                </section>

                <section className="text-center">
                  <h5 className="mb-4">How AI could empower your business</h5>

                  <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
                    <iframe
                      width="1035"
                      height="582"
                      src="https://www.youtube.com/embed/reUZRyXxUs4"
                      title="How AI Could Empower Any Business | Andrew Ng | TED"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;


import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [token, setToken] = useState("");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleLogin = async () => {
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
  
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        console.error("Login failed");
        return;
      }
  
      const data = await response.text();
      console.log(token) // Get the response as text
      setToken(data); // Set the token state directly
  
      // Save the token in the browser's cookie jar.
      document.cookie = `token=${data}; path=/`;
  
      window.location.href = "/chat";
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  return (
    <div style={{ top: "200px", position: "relative" }}>
       <h2 style={{position:'relative',left:'10vw'}}>Use email as "armstrong@email.com" and pasword as "space" to test the backend</h2>
      <section className="vh-100">
   
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">

            <div className="col-md-9 col-lg-6 col-xl-5">
              
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              
              <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    defaultValue="armstrong@email.com"
                    ref={emailRef} // Add ref to access the input value
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    defaultValue="space"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    ref={passwordRef} // Add ref to access the input value
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                    </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <a className="link-danger" href="##">
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
import React from "react"
import { Link } from "gatsby"
import "./styles.css"

export default () => (
  <header id="main-header">
    <div class="header clearfix">
      <div class="top-area">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6"></div>
            <div class="col-md-6 col-sm-6"></div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>

      <div class="z-logm-container">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="logo">
                <a class="logo-zone" href="/">
                  {/*  <img src="images/LogoPublica.png" alt="logo" /> */}
                </a>
              </div>

              <div class="right-area">
                <svg
                  class="bi bi-list"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <nav class="header-nav">
                  <ul id="navigation">
                    <li class="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link to="about">About</Link>
                    </li>
                    <li>
                      <Link to="services">Services</Link>
                    </li>
                    <li>
                      <Link to="clients">Clients</Link>
                    </li>
                    <li>
                      <Link to="testimonals">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="#contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

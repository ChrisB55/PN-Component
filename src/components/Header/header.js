import React, { useState } from "react"
import { Link } from "gatsby"
import "./styles.css"
/* React / Gatsby 
1)  useState hook for activing mobile menu. 
2) Use LINK to replace conventional navigation.
Markup primarily from legacy project.
*/
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
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
                  <div
                    class="hamburger"
                    onClick={() => setMobileMenu(!mobileMenu)}
                  >
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>

                  <nav class="header-nav">
                    <ul
                      id="navigation"
                      className={mobileMenu ? "mobileActive" : "mobileNone"}
                    >
                      <li class="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <Link to="about">About</Link>
                      </li>
                      {/*<li>
                        <Link to="services">Services</Link>
                      </li> 
                      <li>
                        <Link to="clients">Clients</Link>
                      </li>
                      <li>
                        <Link to="testimonals">Testimonials</Link>
                      </li> */}
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
}

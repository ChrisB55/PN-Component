import React, { useState, useEffect } from "react"
import "./styles.css"

export default function Footer() {
  const [date, setDate] = useState()

  const currentYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    currentYear()
  }, [])
  return (
    <footer id="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <p class="copyright-text">
              © {date}
              <span class="semi-bold"> Publica Now Web Services. LLC</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

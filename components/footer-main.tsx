import React from 'react'
import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const FooterMain = () => {
  return (

    // <!-- Footer -->
    <footer id="footer">
      <ul className="icons">
        <li><a href="https://twitter.com/vstevan" className="icon brands alt fa-twitter"><span
              className="label">Twitter</span></a></li>
        <li><a href="https://www.linkedin.com/in/vinicius-stevam-842978a5/" className="icon brands alt fa-linkedin-in"><span
              className="label">LinkedIn</span></a></li>
        <li><a href="https://www.instagram.com/vstevam/" className="icon brands alt fa-instagram"><span
              className="label">Instagram</span></a></li>
        <li><a href="https://github.com/vstevam" className="icon brands alt fa-github"><span className="label">GitHub</span></a>
        </li>
        <li><a href="mailto:vstevan@gmail.com?subject=Contact" className="icon solid alt fa-envelope"><span
              className="label">Email</span></a></li>
      </ul>
      <ul className="copyright">
        <li>&copy; Vinicius Stevam. All rights reserved. | Based on <a href="https://html5up.net/">HTML5 UP</a></li>
      </ul>
    </footer>
  )
}

export default FooterMain

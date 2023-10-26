import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div >
        <h4>Resources</h4>
        <Link className="nav-item nav-link active" to="/">
            Home
        </Link>
        <Link className="nav-item nav-link active" to="/">
            Feedback
        </Link>
        <Link className="nav-item nav-link active" to="/">
            FAQs
        </Link>
        <Link className="nav-item nav-link active" to="/">
            Contacts
        </Link>
      </div>
    </div>
  )
}

export default Footer

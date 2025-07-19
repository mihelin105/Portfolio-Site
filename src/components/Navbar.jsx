import { useState } from "react";
import "/src/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div>
          <Link className="navbar-education" to="/education">
            Education
          </Link>
        </div>
        <div>
          <Link className="navbar-experience" to="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import "/src/intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Tab from "../components/Tabs";

function Intro() {
  return (
    <>
      <div className="main">
        <div className="content">
          <div className="left-text">
            <h1>hello, name is lara.&nbsp;👋</h1>
            <h3>22yo data analyst from Croatia</h3>
            <div className="job-description">
              <p>
                Data Analyst @ FOREO. <br />
                Web development is my side hussle.
              </p>
            </div>
            <h3>Get to know me better:</h3>
            <div className="links">
              <button className="resume-button">
                <div>
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                </div>
                <a
                  href="/Lara Mihelin CV (1).pdf"
                  download="Lara_Mihelin_CV.pdf"
                >
                  Resume
                </a>
              </button>
              <div className="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/lara-mihelin-986371260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="Github">
                <a
                  href="https://github.com/mihelin105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="right-image">
            <img src="/images/img-logo.png" alt="my picture" />
          </div>
        </div>
      </div>
      <Tab />
    </>
  );
}

export default Intro;

import { useState } from "react";
import "/src/tabs.css";

function Tab() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div className="tab-content-area">
        {activeTab === "experience" && (
          <div className="tab-content">
            <div className="company-icon">
              <img src="images/foreo logo.webp" alt="Company logo" />
            </div>
            <p className="content-period">Dec 2023 - Present</p>
            <h3>FOREO</h3>
            <p className="content-role">Data Analyst Assistant</p>
            <ul>
              <li>
                Data Analyst Assistant - Analyzed large datasets to derive
                actionable insights and trends
              </li>
              <li>Developed and maintained SQL queries</li>
              <li>
                Generated weekly subscription performance reports using Recurly
              </li>
              <li>
                Utilized Google Analytics to track and analyze website traffic,
                user behavior, and marketing campaign performance
              </li>
            </ul>

            <div className="company-icon">
              <img src="images/t-com- logo.png" alt="Company logo" />
            </div>
            <p className="content-period">Jun 2023 - Oct 2023</p>
            <h3>Hrvatski Telekom</h3>
            <p className="content-role">Telesales Agent</p>
            <ul>
              <li>
                Assisted customers with inquiries, providing information on
                products and services
              </li>
              <li>Resolved customer issues and concerns</li>
              <li>
                Maintained accurate records of customer interactions and
                transactions
              </li>
            </ul>
          </div>
        )}
        {activeTab === "education" && (
          <div className="tab-content">
            <div className="company-icon">
              <img src="images/vsite-logo.jpeg" alt="Company logo" />
            </div>
            <p className="content-period">2021 - 2025</p>
            <h3>
              VsITe (University of Applied Sciences in Information Technology)
            </h3>
            <p className="content-role">Computer Science</p>
            <ul>
              <li>Bachelor's degree - programming course</li>
              <li>Workshop: "Development of video games in Unity"</li>
              <li>Workshop: "Java Foundations"</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab;

import "../intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import Tab from "../components/Tabs";
import heroImg from "/images/img-logo.png";

function Intro() {
  const cvUrl = `${import.meta.env.BASE_URL}CV-LaraMihelin.pdf`;

  const getAge = () => {
    const birthDate = new Date(2002, 10, 7);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  };

  return (
    <>
      <div className="main">
        <div className="content">
          <div className="left-text">
            <h1>hello, name is lara.&nbsp;👋</h1>
            <h3>
              {getAge()}-year-old data analyst from Croatia, based in Aachen.
            </h3>

            <div className="job-description">
              <p>
                I turn data into clear insights and build web projects in my
                free time.
              </p>
            </div>
            <div className="cta-section">
              <p className="cta-title">Get to know me better:</p>

              <div className="links">
                <a
                  className="resume-button"
                  href={cvUrl}
                  download="Lara_Mihelin_CV.pdf"
                >
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                  Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/lara-mihelin-986371260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/mihelin105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="right-image">
            <img src={heroImg} alt="Lara" />
          </div>
        </div>
      </div>

      <Tab />
    </>
  );
}

export default Intro;

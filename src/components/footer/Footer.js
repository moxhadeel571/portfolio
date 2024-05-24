import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            {emoji("Made by Mohammed Shadeel")}
          </p>
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>

          </p>
          {greeting.resumeLink && (
              <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
                <a
                    href="https://drive.google.com/file/d/1i_enpqJYBntUHqSkFNY3aA5rooReMlkf/view"
                    download="Resume.pdf"
                    className="resume-link"
                >
                  View my resume
                </a>
              </p>
          )}
        </div>
      </Fade>
  );
}

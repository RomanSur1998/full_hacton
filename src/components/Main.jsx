import React from "react";
import "./Main.css";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Insta from "../assets/instagram.svg";
import Pinterest from "../assets/pinterest.svg";
import Youtube from "../assets/youtube.svg";

const Main = () => {
  return (
    <div>
      <div className="container">
        <h3>Try something else</h3>
        <div className="cards">
          <div className="card">
            <img
              style={{
                width: "90%",
                height: "60%",
                marginLeft: "10px",
                borderRadius: "7px",
              }}
              src="https://static01.nyt.com/images/2022/06/28/arts/28CONAN-GRAY1/28CONAN-GRAY1-superJumbo.jpg"
              alt="картинка"
            />
            <span>teen beats</span>
            <p>Conan Gray has entered the upside down</p>
          </div>
        </div>
        <footer>
          <div className="footer__container">
            <div className="footer__left">
              <div className="support1">
                <span>Company</span>
                <span>Communities</span>

                <div className="support">
                  <div className="support__left">
                    <a className="support__a" href="#">
                      About
                    </a>
                    <a className="support__a" href="#">
                      Jobs
                    </a>
                    <a className="support__a" href="#">
                      For the Record
                    </a>
                  </div>
                  <div className="support__left">
                    <a className="support__a" href="#">
                      For Artists
                    </a>
                    <a className="support__a" href="#">
                      Developers
                    </a>
                    <a className="support__a" href="#">
                      Advertising
                    </a>
                    <a className="support__a" href="#">
                      Investors
                    </a>
                    <a className="support__a" href="#">
                      Vendors
                    </a>
                    <a className="support__a" href="#">
                      Spotify for Work
                    </a>
                  </div>
                </div>
              </div>
              <div className="about1">
                <div className="about__puma">
                  <div className="about__puma__right">
                    <a className="support__a" href="">
                      Company
                    </a>
                    <a className="support__a" href="">
                      Corporate News
                    </a>
                    <a className="support__a" href="">
                      Press Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;

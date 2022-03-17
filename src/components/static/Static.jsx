import React from "react";
import "./static.css";
import green from "../../assets/green.png";
import orange from "../../assets/oranger.png";
import blue from "../../assets/blue.png";
import yellow from "../../assets/yellow.png";
import screenshot from "../../assets/screenshot.png";
import figure from "../../assets/figure.png";

const Static = () => {
  return (
    <>
      <div className="container">
        <h1 className="heroHeading">
          Scale your Storytelling with All in One Creator Stack
        </h1>
        <h4 className="subHeading">
          Curate ideas, design graphics, edit videos, schedule posts, manage
          your social media accounts and more… under one true home for creators.
        </h4>
        <button className="redButton">Get started-it's free</button>
        <nav className="subNav">
          <ul className="subNavItems">
            <li className="subNavItem">Design graphics</li>
            <li className="subNavItem">Edit videos</li>
            <li className="subNavItem">Schedule post</li>
            <li className="subNavItem">AI content</li>
            <li className="subNavItem">App store</li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <div>
          <div className="topImageLeft">
            <img src={green} alt="" />
          </div>
          <div className="bottomImageLeft">
            <img src={yellow} alt="" />
          </div>
        </div>
        <div>
          <img src={screenshot} alt="" />
        </div>
        <div>
          <div className="topImageRight">
            <img src={orange} alt="" />
          </div>
          <div className="bottomImageRight">
            <img src={blue} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <article>
          <h2>AI powered copywriting that scales</h2>
          <h3>
            Create marketing copies at scale with our AI powered content
            generation
          </h3>
          <ul className="gridContainer">
            <li>Facebook Ads</li>
            <li>Blog titles</li>
            <li>Google ads</li>
            <li>Instagram caption</li>
            <li>Product Description</li>
            <li>Facebook Ads</li>
          </ul>
          <h4>
            “Create marketing copies at scale with our AI powered content
            generation”
          </h4>
          <div className="footer">
            <p style={{ fontWeight: 500 }}>Raj Sharma</p>
            <small
              style={{ fontWeight: 300, color: "#404040", lineHeight: "21px" }}
            >
              Founder,Abc music
            </small>
          </div>
        </article>
        <figure>
          <img src={figure} alt="" />
        </figure>
      </div>
    </>
  );
};

export default Static;

import React from "react";
import SocialLinks from "../components/socialLinks";
import Writer from "../components/writer";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="content__header">
          <p>{`>  name = "Żędzian Karol"`}</p>
          <p>{`>  links = [ Github, LinkedIn, CV ]`}</p>
        </div>
        <div className="content__lower">
          {/* <p>.NET & JS</p> */}
          <Writer
            words={[`print("Hello world!")`, `Console.WriteLine("Hello world!")`, `console.log("Hello world!")`]}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

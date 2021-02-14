import React from "react";
import SocialLinks from "../components/socialLinks";
import Writer from "../components/common/writer/writer";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="content__header">
          <p>{`>  name = "Żędzian Karol"`}</p>
          <p>
            {">  links = ["}
            <a target="_blank" href="https://github.com/Karoltoja2k2">
              {"Github, "}
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/karol-%C5%BC%C4%99dzian-5871171b1/">
              {"Linkedin, "}
            </a>
            <a target="_blank" href="">
              {"CV"}
            </a>
            {"]"}
          </p>
          <div className="header__writer">
            <Writer
              words={[`print("Hello world!")`, `Console.WriteLine("Hello world!")`, `console.log("Hello world!")`]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import SocialLinks from "../components/socialLinks";
import Writer from "../components/common/writer/writer";
import JsList from "../components/common/codeList/jsList";

let links = [
  {
    name: "Github",
    url: "https://github.com/Karoltoja2k2",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/karol-%C5%BC%C4%99dzian-5871171b1/",
  },
  {
    name: "CV",
    url: "http://localhost:3000/portfolio",
  },
];

function Hero() {
  function Navigate(link) {
    let url = links.find((x) => x.name == link.name).url;
    if (url != null) {
      window.open(url, "_blank");
    }
  }

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="content__header">
          <p>{`>  name = "Żędzian Karol"`}</p>
          <p>
            <JsList
              name="links"
              items={links.map((x) => {
                return { ...x, value: x.name, active: false };
              })}
              onClick={(name) => Navigate(name)}
            />
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

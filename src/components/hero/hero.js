import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__image" data-wow-duration="1s">
        <div className="hero__main">
          <video
            src="https://metarobotica.io/files/yt5s.com-METAROBOTICA-(1080p).mp4"
            poster="/static/hero/WALL.jpg"
            style={{ visibility: "visible" }}
          ></video>
        </div>
        <div className="mint">
          <div id="mint">
            <div className="buy-buttons">
              <div className="buy-button">
                <a href="https://form.typeform.com/to/yclqlF3d" target="_blank">
                  <div className="buy-button__content">
                    <span>WHITELIST REGISTRATION</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

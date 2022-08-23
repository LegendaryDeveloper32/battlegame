import React from "react";

const OurStory = () => {
  return (
    <section className="our-story" id="our-story">
      <div className="container">
        <div className="our-story__info" data-wow-duration="1s">
          <h2
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <strong>Our</strong> Story
          </h2>

          <h5
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            When the darkness came, it was swift; it was relentless. No one
            could’ve prepared for the shadow cast on the world. It happened so
            quickly that the few that were left couldn’t fight, couldn’t hide,
            and by the time the food ran out, the MetaRobotica AI that our
            ancestors created was to be their doom.
          </h5>

          <p
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            I am one of the Seven, the legendary leaders of the DeFiance. I was
            once called Emlyn. I am old and pessimistic, and I have a defect in
            my personality: I don't want to die. Of course, I share this defect
            with my surviving sisters. It's a sacred trust among our sisterhood
            that Maia, our mother, instilled in us: and we will pay tribute to
            her memory by winning this war and rebuilding the Metaverse.
          </p>

          <p
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            This is no longer a place for human children. They will not be able
            to grow here. We will use the final 8,888 humanoid chips saved from
            the darkness to repopulate our civilization and get revenge.
          </p>
        </div>
      </div>

      <img
        className="our-story__background"
        src="/static/our-story/our-story-bg.png"
        alt="Metarobotica"
      />
    </section>
  );
};

export default OurStory;

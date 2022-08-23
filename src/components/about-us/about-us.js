import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="about-us__image">
          <img
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            src="/static/about-us/about-us.png"
            alt="About us"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          />
        </div>

        <div className="about-us__info">
          <h3
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <strong>ABOUT</strong> US
          </h3>

          <p
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
            MetaRobotica is a collection of advanced 3D collectibles driven by
            powerful AI and secured as NFTs on the Ethereum Blockchain. The
            Genesis collection includes 8,888 DeFiance NFTs that will breed the
            next generation of characters. Owners of Alpha Club NFTs will
            receive premium benefits in our ecosystem. This will consist of
            governance rights, submitting proposals, voting on initiatives,
            first rights to characters, weapons, spaceships, token yielding, and
            more.
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
            Among the DeFiance are The Seven. The DeFiance mothers are
            hand-drawn, and 3D rendered Legendary NFTs and are the basis for the
            rest of the AI-generated collection. There are over 150 traits that
            the collection is based on, giving each character its rarity.
          </p>

          <p
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            Each DeFiance Alpha Club NFT will breed once; the next generation of
            MetaRobotica NFTs. The embryos must be incubated for three months,
            and during that time, owners will yield $MROB, our native ERC-20
            token. The type of RoboCard you HODL will affect the amount you
            yield, your voting rights, and help purchase land, accessories, and
            equipment for our planned Metaverse Play2Earn game.
          </p>

          <p
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            All Metarobotica NFT owners will receive their 3D RoboCard, which
            will entitle them to a monthly airdrop of $MROB when Tokenomics
            begins. The type of card you hold also affects your yield:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

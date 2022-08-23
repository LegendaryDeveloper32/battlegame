import React from "react";

const Tokenomics = () => {
  return (
    <section className="tokenomics" id="tokenomics">
      <div className="container">
        <div className="tokenomics__dash">
          <div className="tokenomics__board">
            <img
              src="/static/tokenomics/dash_human.png"
              className="tokenomics__dash-human wow animate__ animate__fadeIn animated"
              data-wow-duration="1s"
              data-wow-delay="1.6s"
              alt="Dashboard human"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "1.6s",
                animationName: "fadeIn",
              }}
            />
            <img
              className="wow animate__ animate__fadeIn animated"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              src="/static/tokenomics/2.png"
              alt="Elipse"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.6s",
                animationName: "fadeIn",
              }}
            />
            <img
              className="wow animate__ animate__fadeIn animated"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              src="/static/tokenomics/1.png"
              alt="Elipse"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            />
            <img
              className="wow animate__ animate__fadeIn animated"
              data-wow-duration="1s"
              data-wow-delay="1s"
              src="/static/tokenomics/3.png"
              alt="Elipse"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "1s",
                animationName: "fadeIn",
              }}
            />
            <img
              className="wow animate__ animate__fadeIn animated"
              data-wow-duration="1s"
              data-wow-delay="1.4s"
              src="/static/tokenomics/4.png"
              alt="Elipse"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "1.4s",
                animationName: "fadeIn",
              }}
            />
          </div>
        </div>

        <div className="tokenomics__info">
          <h2
            className="wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            Tokenomics
          </h2>

          <p
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
            The power behind MetaRobotica is $MROB, an ERC-20 token. This token
            will allow you to make your voice heard in the society of
            MetaRobotica; the more tokens you hold, the more influential our
            vote will be in ecosystem initiatives. The tokens can be used in the
            Vanilla Forge as well as in the MetaRobotica marketplace.
          </p>

          <div className="tokenomics__blocks">
            <div
              className="tokenomics__block wow animate__ animate__fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <span>50%</span>
              <span>
                Airdrop For <br /> MetaRobotica NFT <br /> Holders
              </span>
            </div>
            <div
              className="tokenomics__block wow animate__ animate__fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <span>10%</span>
              <span>Marketing</span>
            </div>
            <div
              className="tokenomics__block wow animate__ animate__fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <span>15%</span>
              <span>Development team</span>
            </div>
            <div
              className="tokenomics__block wow animate__ animate__fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.8s",
                animationName: "fadeInUp",
              }}
            >
              <span>25%</span>
              <span>Team reserve</span>
            </div>
          </div>

          <br />

          <p>
            The $MROB token will enable you to achieve a better player
            experience. $MROB can be used to:
          </p>

          <ul>
            <li>Buy and sell NFT characters, items, cosmetics, and cards</li>
            <li>Reward players for advancing in the solo PvE mode</li>
            <li>Reward players for winning battles</li>
            <li>
              Payout staking rewards from the treasury for players to earn
              passive returns
            </li>
            <li>Enter the battle Arena via staking protocols</li>
          </ul>

          <br />

          <p>
            Each ship will have different characteristics, and they will play a
            significant part in the future game.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

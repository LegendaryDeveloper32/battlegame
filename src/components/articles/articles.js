import React from "react";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__logos">
          <a
            className="articles__logo"
            href="https://www.marketwatch.com/press-release/a-new-generation-of-nft-warriors-is-set-to-drop-2022-02-17?mod=search_headline"
            target="_blank"
            referrerpolicy="no-referrer"
          >
            <img src="/static/articles/MarketWatch.svg" alt="MarketWatch" />
          </a>

          <a
            className="articles__logo"
            href="https://www.entrepreneur.com/search#gsc.tab=0&amp;gsc.q=metarobotica&amp;gsc.sort="
            target="_blank"
            referrerpolicy="no-referrer"
          >
            <img
              src="/static/articles/Entrepreneur.svg"
              alt="Entrepreneur"
              style={{ visibility: "visible" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;

import logo from "./logo.svg";
import "./App.scss";

//import components
import Hero from "./components/hero/hero";
import Articles from "./components/articles/articles";
import OurStory from "./components/our-story/our-story";
import AboutUs from "./components/about-us/about-us";
import Roadmap from "./components/roadmap/roadmap";
import Tokenomics from "./components/tokenomics/tokenomics";
import Team from "./components/team/team";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";

import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Hero />
        <Articles />
        <OurStory />
        <AboutUs />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

export default App;

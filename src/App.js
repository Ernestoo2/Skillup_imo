import "./";
import "./tailwind.css";
import FAQ from "./Components/fAQ.tsx";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import MoreReasons from "./Components/MoreReasons.tsx";
import Newsletter from "./Components/Newsletter.tsx";
import TrendingNow from "./Components/TrendingNow.tsx";

function App () {
  return (
    <div className="App  w-full max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5x  ">
      <Header />
      <TrendingNow />
      <MoreReasons/>
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

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
    <div className="App  max-w-fit mx-auto ">
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

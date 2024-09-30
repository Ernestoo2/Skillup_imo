import "./App.css";
import FAQ from "./Components/fAQ.tsx";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import Newsletter from "./Components/Newsletter.tsx";
import TrendingNow from "./Components/TrendingNow.tsx";

function App () {
  return (
    <div className="App">
      <Header />
      <TrendingNow />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

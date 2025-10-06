import "./App.css";
import BuySection from "./components/BuySection";
import ContentMain from "./components/ContentMain";
import Features from "./components/Features";
import Header from "./components/Header";
import Motivation from "./components/Motivation";

function App() {
  return (
    <div>
      <Header />
      <ContentMain />
      <Features />
      <Motivation />
      <BuySection />
    </div>
  );
}

export default App;

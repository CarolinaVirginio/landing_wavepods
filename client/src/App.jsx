import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ContentMain from "./components/ContentMain";
import Features from "./components/Features";
import Motivation from "./components/Motivation";
import BuySection from "./components/BuySection";
import Footer from "./components/Footer";
import Success from "./components/Success";
import Canceled from "./components/Canceled";

function Home() {
  return (
    <>
      <Header />
      <ContentMain />
      <Features />
      <Motivation />
      <BuySection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Canceled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

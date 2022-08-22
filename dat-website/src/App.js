import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Analytics from "./components/Analytics";
import Newslatter from "./components/Newslatter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newslatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

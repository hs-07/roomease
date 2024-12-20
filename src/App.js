import React from "react";

import { Navbar, Hero, Feature, MatchRoomate, Footer } from "./components";

const App = () => {
  return (
    <div className="scroll-smooth h-full">
      <Navbar />
      <Hero />
      <Feature />
      <MatchRoomate />
      <Footer />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Error, Faq, Tracks, Timeline, Navigation } from "./Pages";
import { Navbar, Footer } from "./Components";
import Loader from "./Components/Loader/Loader";

const App = () => {
  return (
    <main className="max-w-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Loader />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;

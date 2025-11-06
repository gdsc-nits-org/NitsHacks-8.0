import { Routes, Route } from "react-router-dom";

import { Home, Error, Faq, Tracks, Timeline, Team } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <main className="max-w-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;

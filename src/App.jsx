import { Routes, Route, useLocation } from "react-router-dom";

import { Home, Error, Faq, Tracks, Timeline, Team } from "./Pages";

import { Navbar, Footer, Loader } from "./Components";

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = ["/", "/tracks", "/timeline"].includes(location.pathname);

  return (
    <main className="max-w-screen overflow-hidden">
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </main>
  );
};

export default App;

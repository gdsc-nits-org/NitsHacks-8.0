import { Routes, Route, useLocation } from "react-router-dom";

import { Home, Error, Faq, Tracks, Timeline, Navigation } from "./Pages";
import { Navbar, Footer } from "./Components";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = ["/", "/tracks", "/timeline"].includes(location.pathname);

  return (
    <main className="max-w-screen overflow-hidden">
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </main>
  );
};

export default App;

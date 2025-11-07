import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Error, Faq, Tracks, Timeline, Navigation } from "./Pages";
import { Navbar, Footer, LoadingScreen } from "./Components";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoadingScreen(false);
      setShowLoader(true);
    }, 6000);

    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setAppReady(true);
    }, 9000);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  if (showLoader) {
    return <Loader />;
  }
  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  if (appReady) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    );
  }

  return null;
};

export default App;

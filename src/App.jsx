import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, Footer } from "./Components";
import Faq from "./Components/Faq/Faq";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

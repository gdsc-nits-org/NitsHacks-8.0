import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, About , Footer  } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
         <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

import { Home, Error, Team } from "./Pages";

import { Navbar, About, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/team" element={<Team />}/>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

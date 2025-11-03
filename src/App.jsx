import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, Footer , Loader} from "./Components";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
         <Route path="/loader" element={<Loader />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

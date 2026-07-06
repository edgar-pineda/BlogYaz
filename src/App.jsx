import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

//Importamos las Navs
import LinkHome from "./components/LinkHome";

//Importamos las pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Principal from "./pages/Principal";

function App() {

  return(
    <AnimatePresence  mode="wait">
      <Router>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/start" element={<Principal />}/>

        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App;
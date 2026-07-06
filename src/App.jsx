import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

//Importamos las Navs
import LinkHome from "./components/LinkHome";

//Importamos las pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

//Creamos el Layout con Nav
function WebLayout() {
  return(
    <div className="relative z-0 min-h-screen">
        <LinkHome />
        <Outlet />
    </div>
  )
}

function NoLayout() { 

  return(
    
          <Outlet />
  )
}

function App() {

  return(
    <AnimatePresence  mode="wait">
      <Router>
        <Routes>

          {/* Paginas sin Nav */}
          <Route element={<NoLayout />}>
            <Route path="/" element={<Home />}/>
          </Route>

          {/* Paginas con Nav */}
          <Route element={<WebLayout />}>
              <Route path="/gallery" element={<Gallery />}/>
          </Route>

        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App;
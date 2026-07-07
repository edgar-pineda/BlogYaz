import { BrowserRouter, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import PrivateRoute from "./components/PrivateRoute";

//Importamos las pages
import Inicio from "./pages/Inicio";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Principal from "./pages/Principal";
import AgregarBlog from "./pages/AgregarBlog";

function App() {

  return(
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Inicio />}/>

          <Route element={<PrivateRoute />}>
            <Route path="/nav" element={<Home />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/start" element={<Principal />}/>
          </Route>

          <Route path="/agregarBlog" element={<AgregarBlog />}/>

        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App;
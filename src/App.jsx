import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Offer from './pages/Offer';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offer" element={<Offer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

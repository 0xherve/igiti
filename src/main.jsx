import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Faq from './pages/Faq';
import Viewer from './pages/Viewer';
import ScrollTop from './components/ScrollTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <ScrollTop/>
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/return-policy" element={<Viewer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
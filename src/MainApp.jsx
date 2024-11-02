// MainApp.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { client } from './assets/sanityClient'

import Loader from './pages/Loader';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Faq from './pages/Faq';
import Viewer from './pages/Viewer';
import ScrollTop from './components/ScrollTop';
import SanityStudio from './pages/SanityStudio';

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true); // Start loading
  
    try {
      const query = '*[type=_heroSection]'
      const data = await client.fetch(query)
      if(data){
        console.log('Website Fetched')
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      // setLoading(false);
      loadData()
    }, 2500); // Simulated load time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/return-policy" element={<Viewer />} />
          <Route path="/studio" element={<SanityStudio />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default MainApp;

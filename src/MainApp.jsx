import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

import { DataProvider, useData } from './DataContext.jsx'; // Import the context provider and hook

const MainAppContent = () => {
  const { loading } = useData(); // Access loading from DataContext

  if (loading) {
    return <Loader />; // Show loader until all data is loaded
  }

  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} className="mt-24" />
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

const MainApp = () => {
  return (
    <DataProvider> {/* Wrap MainAppContent in DataProvider to provide data context */}
      <MainAppContent />
    </DataProvider>
  );
};

export default MainApp;

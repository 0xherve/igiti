import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Loader from './pages/Loader';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import ScrollTop from './components/ScrollTop';
import { DataProvider, useData } from './DataContext.jsx';

const Contact = lazy(() => import('./pages/Contact'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Faq = lazy(() => import('./pages/Faq'));
const Viewer = lazy(() => import('./pages/Viewer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy.jsx'));
const TermsConditions = lazy(() => import('./components/termsConditions.jsx'));
const Sponsors = lazy(() => import('./sections/Sponsors'));

const MainAppContent = () => {
  const { error, retryLoad } = useData();

  return (
    <Router>
      <Navbar />
      <ScrollTop />
      {error && (
        <div role="alert" className="mx-auto mt-4 flex max-w-3xl items-center justify-between gap-4 rounded-lg bg-amber-100 p-4 text-sm">
          <span>{error} Showing available content.</span>
          <button type="button" className="underline" onClick={retryLoad}>Retry</button>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/return-policy" element={<Viewer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </Router>
  );
};

const MainApp = () => (
  <DataProvider>
    <MainAppContent />
  </DataProvider>
);

export default MainApp;

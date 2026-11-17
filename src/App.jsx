import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import MobileStickyCallBar from './components/MobileStickyCallBar';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Residential Plumbing Repair');

  const handleOpenQuote = (serviceName) => {
    if (typeof serviceName === 'string' && serviceName.length > 0) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Top Navbar */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/service-area" element={<ServiceAreaPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuote={() => handleOpenQuote()} />

        {/* Floating / Sticky Mobile Quick Action Bar */}
        <MobileStickyCallBar onOpenQuote={() => handleOpenQuote()} />

        {/* Interactive Free Estimate Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={handleCloseQuote}
          initialService={selectedServiceForQuote}
        />
      </div>
    </Router>
  );
}

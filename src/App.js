import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { ServicesPage } from "./pages/ServicesPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Terms } from "./pages/Terms";
import { CustomCursor } from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import { CookieBanner } from "./components/CookieBanner";
import { Toaster } from "sonner";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <ContactSection />
            </main>
          }
        />
        <Route path="/servizi" element={<ServicesPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/termini" element={<Terms />} />
      </Routes>
      <Footer />
      <CookieBanner />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
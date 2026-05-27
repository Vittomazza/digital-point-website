import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";
import { ServicesPage } from "./pages/ServicesPage";
import { CustomCursor } from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
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
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

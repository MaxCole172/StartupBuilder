import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import CookieBanner from "./components/layout/CookieBanner";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfService from "./components/legal/TermsOfService";
import CookiePolicy from "./components/legal/CookiePolicy";
import Pricing from "./components/pricing/Pricing";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

// Preload fonts
const preloadFonts = () => {
  const fontFamilies = [
    "'DM Sans', sans-serif",
    "'Clash Display', sans-serif",
    "'Inter var', sans-serif",
    "'Fira Code', monospace",
  ];

  fontFamilies.forEach((fontFamily) => {
    document.fonts.load(`1em ${fontFamily}`);
  });
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  // Preload fonts when component mounts
  useEffect(() => {
    preloadFonts();
  }, []);

  // Initialize dark mode based on user preference
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Default to dark mode if no preference is saved
      setDarkMode(true);
      // Save this preference
      localStorage.setItem("theme", "dark");
    }

    // Check cookie consent
    const cookieConsent = localStorage.getItem("cookieConsent");
    setCookiesAccepted(cookieConsent ? JSON.parse(cookieConsent) : null);
  }, []);

  // Update body class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle cookie consent
  const handleCookieConsent = (accepted: boolean) => {
    setCookiesAccepted(accepted);
    localStorage.setItem("cookieConsent", JSON.stringify(accepted));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router basename={process.env.PUBLIC_URL}>
        <div
          className={`App min-h-screen flex flex-col transition-colors duration-300 ${
            darkMode
              ? "dark bg-darkBg text-gray-100"
              : "bg-lightBg-light text-gray-900"
          }`}
        >
          <Header />
          <main className="flex-grow relative">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          {cookiesAccepted === null && (
            <AnimatePresence>
              <CookieBanner
                onAccept={() => handleCookieConsent(true)}
                onDecline={() => handleCookieConsent(false)}
              />
            </AnimatePresence>
          )}
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

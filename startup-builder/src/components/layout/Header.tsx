import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <StyledHeader
      className={`transition-all duration-300 ${scrolled ? "py-3" : "py-5"} 
      ${
        darkMode
          ? "bg-darkBg/80 border-b border-darkGray-lightest/10"
          : "bg-white/80 border-b border-gray-100"
      } ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="group flex items-center"
          aria-label="MVP Dynamics Home"
        >
          <span
            className={`text-2xl font-display font-bold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className={darkMode ? "text-primary-light" : "text-primary"}>
              MVP
            </span>
            <span className={darkMode ? "text-accent-light" : "text-accent"}>
              Dynamics
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <nav className="hidden md:block mr-8">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-base font-medium transition-colors relative px-1 py-2
                    ${
                      location.pathname === item.path
                        ? darkMode
                          ? "text-white"
                          : "text-gray-900"
                        : darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          darkMode
                            ? "bg-gradient-to-r from-primary-light to-accent-light"
                            : "bg-gradient-to-r from-primary to-accent"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${
              darkMode
                ? "bg-darkGray-light text-yellow-300 hover:bg-darkGray"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full mr-4 transition-colors
            ${
              darkMode
                ? "bg-darkGray-light text-yellow-300"
                : "bg-gray-100 text-gray-700"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="sm" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-md focus:outline-none ${
              darkMode
                ? "text-white hover:bg-darkGray-light"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              darkMode
                ? "bg-darkBg border-t border-darkGray-lightest/10"
                : "bg-white border-t border-gray-100"
            }`}
          >
            <nav className="container mx-auto px-6 py-6">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`block py-2 text-lg font-medium transition-colors
                      ${
                        location.pathname === item.path
                          ? darkMode
                            ? "text-gradient"
                            : "text-gradient"
                          : darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;

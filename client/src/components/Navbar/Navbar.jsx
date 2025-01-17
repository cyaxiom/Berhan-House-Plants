import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { NAV_LINKS, CURRENCIES, LANGUAGES } from "../../constants/constants";
import { BHP_logo, BHP_text_logo } from "../../assets/Images";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for the user's theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light mode if no preference is saved
      setIsDarkMode(false);
    }
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);

    // Save the theme preference in localStorage
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderLinks = () =>
    NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        to={link.href}
        className="text-gray-700 font-bold hover:text-gray-900"
      >
        {link.label}
      </Link>
    ));

  const renderSelectOptions = (options) =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left: Logo */}
          <Link
            to={"/"}
            className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-1"
          >
            {/* Logo Image */}
            <img
              src={BHP_logo}
              alt="Berhan house plant logo"
              className="scale-90 md:scale-100"
            />

            {/* Text Logo */}
            <img
              src={BHP_text_logo}
              alt="Berhan house plant text logo"
              className="scale-90 md:scale-100"
            />
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {renderLinks()}
          </div>

          {/* Right: Currency, Language, Search, User, and Dark/Light Mode */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Currency Selector */}
            <select
              className="bg-gray-100 text-gray-700 p-2 rounded-md"
              defaultValue="USD"
            >
              {renderSelectOptions(CURRENCIES)}
            </select>

            {/* Language Selector */}
            <select
              className="bg-gray-100 text-gray-700 p-2 rounded-md"
              defaultValue="EN"
            >
              {renderSelectOptions(LANGUAGES)}
            </select>

            <button className="text-gray-700 hover:text-gray-900">
              <FaSearch size={24} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FaUser size={24} />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 hover:text-gray-900"
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>

          {/* Mobile: Sandwich Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 space-y-4">
            {renderLinks()}
            <div className="space-y-4">
              <select
                className="bg-gray-100 text-gray-700 p-2 rounded-md w-full"
                defaultValue="USD"
              >
                {renderSelectOptions(CURRENCIES)}
              </select>

              <select
                className="bg-gray-100 text-gray-700 p-2 rounded-md w-full"
                defaultValue="EN"
              >
                {renderSelectOptions(LANGUAGES)}
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

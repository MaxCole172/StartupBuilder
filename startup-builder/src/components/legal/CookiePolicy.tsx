import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const CookiePolicy: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`cookie-policy ${darkMode ? "bg-darkBg" : "bg-lightBg-light"}`}
    >
      <motion.section
        className={`py-20 ${darkMode ? "bg-darkSurface" : "bg-gray-50"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h1
            className={`text-4xl md:text-5xl font-display font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Cookie Policy
          </h1>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Last updated: {currentYear}-01-01
          </p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className={`prose max-w-none ${darkMode ? "prose-invert" : ""}`}
            variants={containerAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={itemAnimation}
              className={`mb-12 p-8 rounded-2xl shadow-card ${
                darkMode ? "bg-darkSurface shadow-dark-card" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                1. What Are Cookies
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Cookies are small pieces of text sent by your web browser by a
                website you visit. A cookie file is stored in your web browser
                and allows the website or a third-party to recognize you and
                make your next visit easier and the website more useful to you.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Cookies can be "persistent" or "session" cookies. Persistent
                cookies remain on your personal computer or mobile device when
                you go offline, while session cookies are deleted as soon as you
                close your web browser.
              </p>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className={`mb-12 p-8 rounded-2xl shadow-card ${
                darkMode ? "bg-darkSurface shadow-dark-card" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                2. How We Use Cookies
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                When you use and access our website, we may place a number of
                cookie files in your web browser. We use cookies for the
                following purposes:
              </p>
              <ul
                className={`list-disc space-y-3 ml-6 mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>To enable certain functions of the website</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
                <li>To enable dark mode and theme selection</li>
                <li>To remember your cookie consent preferences</li>
              </ul>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We use both session and persistent cookies on our website and we
                use different types of cookies to run the website:
              </p>
              <ul
                className={`list-disc space-y-3 ml-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>
                  <strong className={darkMode ? "text-white" : "text-gray-900"}>
                    Essential cookies.
                  </strong>{" "}
                  We may use essential cookies to authenticate users and prevent
                  fraudulent use of user accounts.
                </li>
                <li>
                  <strong className={darkMode ? "text-white" : "text-gray-900"}>
                    Preference cookies.
                  </strong>{" "}
                  We use preferences cookies to remember information that
                  changes the way the website behaves or looks, such as the dark
                  mode option.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className={`mb-12 p-8 rounded-2xl shadow-card ${
                darkMode ? "bg-darkSurface shadow-dark-card" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                3. What Are Your Choices Regarding Cookies
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                If you'd like to delete cookies or instruct your web browser to
                delete or refuse cookies, please visit the help pages of your
                web browser.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Please note, however, that if you delete cookies or refuse to
                accept them, you might not be able to use all of the features we
                offer, and some of our pages might not display properly.
              </p>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className={`p-8 rounded-2xl shadow-card ${
                darkMode ? "bg-darkSurface shadow-dark-card" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                4. Contact Us
              </h2>
              <p
                className={`mb-6 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                If you have questions or comments about our Cookie Policy,
                please contact us at:
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <strong className={darkMode ? "text-white" : "text-gray-900"}>
                  Email:
                </strong>{" "}
                privacy@mvpdynamics.dev
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;

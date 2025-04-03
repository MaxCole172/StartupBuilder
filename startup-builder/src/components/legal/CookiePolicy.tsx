import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const CookiePolicy: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="cookie-policy">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Cookie Policy Content */}
      <section className={`py-16 ${darkMode ? "bg-darkBg" : "bg-white"}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className={`prose prose-lg ${
              darkMode ? "prose-invert" : ""
            } mx-auto`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                This Cookie Policy explains how MVP Dynamics ("we", "us", or
                "our") uses cookies and similar technologies on our website. We
                encourage you to read this policy to understand what cookies
                are, how we use them, and how you can control them.
              </p>

              <h2>1. What Are Cookies?</h2>

              <p>
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile) when you visit a website. Cookies
                are widely used to make websites work more efficiently and
                provide information to the website owners. They help with
                functionality, remembering your preferences, and improving your
                overall browsing experience.
              </p>

              <h2>2. How We Use Cookies</h2>

              <p>We use cookies for several purposes, including:</p>

              <ul>
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the website to function properly. They enable
                  core functionality such as security, network management, and
                  account access. You cannot opt out of these cookies.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These cookies allow the
                  website to remember choices you make (such as your preferred
                  language or the region you are in) and provide enhanced, more
                  personal features.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us
                  understand how visitors interact with our website by
                  collecting and reporting information anonymously. This helps
                  us improve our website's structure and content.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to
                  track visitors across websites. The intention is to display
                  ads that are relevant and engaging for the individual user.
                </li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>

              <h3>3.1 First-Party Cookies</h3>

              <p>
                These are cookies that are set by our website directly. We use
                these cookies to:
              </p>

              <ul>
                <li>Remember your session when you navigate between pages</li>
                <li>
                  Remember your display preferences, such as dark mode settings
                </li>
                <li>
                  Process form submissions and provide secure areas of our
                  website
                </li>
                <li>Improve your user experience on our site</li>
              </ul>

              <h3>3.2 Third-Party Cookies</h3>

              <p>
                These are cookies that are set by our partners and service
                providers. We use these cookies to:
              </p>

              <ul>
                <li>
                  Analyze how our website is used so we can improve it (Google
                  Analytics)
                </li>
                <li>
                  Allow you to share content on social media (LinkedIn, Twitter)
                </li>
                <li>Process payments (if applicable)</li>
                <li>Provide enhanced functionality on our website</li>
              </ul>

              <h2>4. Specific Cookies We Use</h2>

              <table className="border-collapse border border-gray-300 my-6 w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="p-3 text-left border border-gray-300">
                      Name
                    </th>
                    <th className="p-3 text-left border border-gray-300">
                      Provider
                    </th>
                    <th className="p-3 text-left border border-gray-300">
                      Purpose
                    </th>
                    <th className="p-3 text-left border border-gray-300">
                      Expiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-300">mvpd_theme</td>
                    <td className="p-3 border border-gray-300">MVP Dynamics</td>
                    <td className="p-3 border border-gray-300">
                      Stores your theme preference (light/dark mode)
                    </td>
                    <td className="p-3 border border-gray-300">1 year</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300">_ga</td>
                    <td className="p-3 border border-gray-300">
                      Google Analytics
                    </td>
                    <td className="p-3 border border-gray-300">
                      Used to distinguish users
                    </td>
                    <td className="p-3 border border-gray-300">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300">_gid</td>
                    <td className="p-3 border border-gray-300">
                      Google Analytics
                    </td>
                    <td className="p-3 border border-gray-300">
                      Used to distinguish users
                    </td>
                    <td className="p-3 border border-gray-300">24 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300">_gat</td>
                    <td className="p-3 border border-gray-300">
                      Google Analytics
                    </td>
                    <td className="p-3 border border-gray-300">
                      Used to throttle request rate
                    </td>
                    <td className="p-3 border border-gray-300">1 minute</td>
                  </tr>
                </tbody>
              </table>

              <h2>5. Managing Your Cookie Preferences</h2>

              <p>
                Most web browsers allow you to manage your cookie preferences.
                You can:
              </p>

              <ul>
                <li>
                  <strong>Delete cookies:</strong> You can delete all cookies
                  that are already on your device. If you do this, however, you
                  may have to manually adjust some preferences every time you
                  visit a website and some services may not work.
                </li>
                <li>
                  <strong>Block cookies:</strong> You can set most web browsers
                  to block cookies, but this may impair the functionality of
                  many websites.
                </li>
                <li>
                  <strong>Allow only first-party cookies:</strong> You can allow
                  cookies from the website you are visiting while blocking
                  cookies from third-party services.
                </li>
              </ul>

              <p>
                Here are links to instructions for managing cookies in common
                browsers:
              </p>

              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2>6. Do Not Track (DNT) Signals</h2>

              <p>
                Some browsers have incorporated "Do Not Track" (DNT) features
                that can send a signal to the websites you visit indicating you
                do not wish to be tracked. Because there is not yet a common
                understanding of how to interpret the DNT signal, our website
                does not currently respond to browser DNT signals. You can use
                the range of other tools we provide to control data collection
                and use, including the ability to opt out of receiving marketing
                from us as described above.
              </p>

              <h2>7. Changes to Our Cookie Policy</h2>

              <p>
                We may update our Cookie Policy from time to time. We will
                notify you of any changes by posting the new Cookie Policy on
                this page and updating the "Last Updated" date at the top of
                this page.
              </p>

              <p>
                We encourage you to review this Cookie Policy periodically to
                stay informed about how we are using cookies.
              </p>

              <h2>8. Contact Us</h2>

              <p>
                If you have any questions about our Cookie Policy, please
                contact us at:
              </p>

              <p>
                Email:{" "}
                <a href="mailto:contact@mvpdynamics.dev">
                  contact@mvpdynamics.dev
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;

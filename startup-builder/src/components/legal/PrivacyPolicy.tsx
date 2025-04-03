import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const PrivacyPolicy: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="privacy-policy">
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
            Privacy Policy
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Privacy Policy Content */}
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
                At MVP Dynamics ("we," "us," or "our"), we respect your privacy
                and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website and use our
                services.
              </p>

              <h2>1. Information We Collect</h2>

              <p>
                We may collect several types of information from and about users
                of our website, including:
              </p>

              <h3>1.1 Personal Information</h3>
              <ul>
                <li>
                  Contact Information: Name, email address, and other contact
                  details you provide when using our contact forms or signing up
                  for our services.
                </li>
                <li>
                  Business Information: Company name, job title, and business
                  contact details if you engage with us for business purposes.
                </li>
                <li>
                  Communications: Records of correspondence if you contact us.
                </li>
              </ul>

              <h3>1.2 Non-Personal Information</h3>
              <ul>
                <li>
                  Usage Data: Information about how you use our website, which
                  pages you visit, the time spent on those pages, and other
                  diagnostic data.
                </li>
                <li>
                  Technical Data: Internet protocol (IP) address, browser type
                  and version, time zone setting, browser plug-in types and
                  versions, operating system, and platform.
                </li>
                <li>
                  Cookies and Similar Technologies: Information collected
                  through cookies and similar tracking technologies (see our
                  Cookie Policy for more details).
                </li>
              </ul>

              <h2>2. How We Collect Your Information</h2>

              <p>We collect information through:</p>
              <ul>
                <li>
                  Direct interactions when you provide your personal information
                  by filling in forms, corresponding with us, or otherwise
                  engaging with our services.
                </li>
                <li>
                  Automated technologies or interactions as you navigate through
                  our website. We may automatically collect technical data about
                  your equipment, browsing actions, and patterns.
                </li>
                <li>
                  Third parties or publicly available sources such as analytics
                  providers, hosting providers, and search information
                  providers.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>

              <p>
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services.</li>
                <li>
                  Process and fulfill your requests for information or services.
                </li>
                <li>
                  Communicate with you about our services, updates, and other
                  relevant information.
                </li>
                <li>
                  Analyze usage patterns to enhance user experience and website
                  functionality.
                </li>
                <li>
                  Detect, prevent, and address technical issues, fraud, or other
                  illegal activities.
                </li>
                <li>
                  Comply with legal obligations and enforce our terms and
                  conditions.
                </li>
              </ul>

              <h2>4. Legal Basis for Processing</h2>

              <p>
                We process your personal data based on one or more of the
                following legal grounds:
              </p>
              <ul>
                <li>
                  Performance of a contract when we need to process your
                  information to fulfill our contractual obligations.
                </li>
                <li>
                  Legitimate interests in conducting and managing our business
                  operations.
                </li>
                <li>
                  Compliance with legal obligations when the law requires us to
                  process your data.
                </li>
                <li>Your consent, which you can withdraw at any time.</li>
              </ul>

              <h2>5. Data Sharing and Disclosure</h2>

              <p>We may share your information with:</p>
              <ul>
                <li>
                  Service providers and contractors who perform services on our
                  behalf.
                </li>
                <li>
                  Professional advisers including lawyers, bankers, auditors,
                  and insurers.
                </li>
                <li>
                  Regulatory bodies, law enforcement agencies, or other third
                  parties when required by law.
                </li>
              </ul>

              <p>We do not sell your personal information to third parties.</p>

              <h2>6. Data Security</h2>

              <p>
                We implement appropriate technical and organizational measures
                to ensure a level of security appropriate to the risk,
                including:
              </p>
              <ul>
                <li>Encryption of sensitive data.</li>
                <li>Regular security assessments and testing.</li>
                <li>Access controls and authentication procedures.</li>
                <li>Secure backup systems and disaster recovery protocols.</li>
              </ul>

              <p>
                However, no method of transmission over the internet or
                electronic storage is completely secure, and we cannot guarantee
                absolute security.
              </p>

              <h2>7. Data Retention</h2>

              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes for which we collected it, including to
                satisfy any legal, accounting, or reporting requirements. To
                determine the appropriate retention period, we consider the
                amount, nature, and sensitivity of the data, the potential risk
                of harm from unauthorized use or disclosure, and applicable
                legal requirements.
              </p>

              <h2>8. Your Rights</h2>

              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul>
                <li>Access: Request access to your personal information.</li>
                <li>Correction: Request correction of inaccurate data.</li>
                <li>
                  Erasure: Request deletion of your personal information under
                  certain circumstances.
                </li>
                <li>
                  Restriction: Request restriction of processing of your
                  personal information.
                </li>
                <li>
                  Data Portability: Request the transfer of your personal
                  information to you or a third party.
                </li>
                <li>
                  Objection: Object to processing of your personal information.
                </li>
                <li>
                  Withdraw Consent: Withdraw your consent at any time where we
                  rely on consent to process your personal information.
                </li>
              </ul>

              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:contact@mvpdynamics.dev">
                  contact@mvpdynamics.dev
                </a>
                .
              </p>

              <h2>9. International Data Transfers</h2>

              <p>
                Your information may be transferred to and processed in
                countries other than the country in which you reside. These
                countries may have different data protection laws than your
                country of residence. We take appropriate safeguards to require
                that your personal information will remain protected in
                accordance with this Privacy Policy.
              </p>

              <h2>10. Children's Privacy</h2>

              <p>
                Our services are not intended for individuals under the age of
                16. We do not knowingly collect personal information from
                children. If you become aware that a child has provided us with
                personal information, please contact us, and we will take steps
                to delete such information.
              </p>

              <h2>11. Third-Party Links</h2>

              <p>
                Our website may contain links to third-party websites or
                services that are not owned or controlled by us. We have no
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites or
                services. We encourage you to review the privacy policies of all
                third-party websites you visit.
              </p>

              <h2>12. Changes to This Privacy Policy</h2>

              <p>
                We may update our Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                will notify you of any significant changes by posting a
                prominent notice on our website or sending you an email
                notification.
              </p>

              <h2>13. Contact Us</h2>

              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
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

export default PrivacyPolicy;

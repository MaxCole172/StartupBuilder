import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const TermsOfService: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="terms-of-service">
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
            Terms of Service
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Terms of Service Content */}
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
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the MVP Dynamics website and services
                (the "Service") operated by MVP Dynamics ("us", "we", or "our").
              </p>

              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who access or use the
                Service.
              </p>

              <p>
                By accessing or using the Service, you agree to be bound by
                these Terms. If you disagree with any part of the terms, you may
                not access the Service.
              </p>

              <h2>1. Services</h2>

              <p>
                MVP Dynamics provides software development, technical
                consulting, and related services to businesses and
                organizations. The specific services to be performed will be
                detailed in separate agreements or statements of work between
                MVP Dynamics and the client.
              </p>

              <h2>2. Use of Our Services</h2>

              <p>
                You agree to use our Services only for purposes that are
                permitted by:
              </p>
              <ol type="a">
                <li>These Terms;</li>
                <li>
                  Any applicable law, regulation, or generally accepted
                  practices or guidelines in the relevant jurisdictions.
                </li>
              </ol>

              <p>
                You agree that you will not engage in any activity that
                interferes with or disrupts the Services or the servers and
                networks connected to the Services.
              </p>

              <h2>3. Communications</h2>

              <p>
                By creating an account or contacting us through our website, you
                agree to receive communications from us, which may include
                service announcements, newsletters, and other information. You
                may opt out of non-essential communications at any time.
              </p>

              <h2>4. Content</h2>

              <p>
                Our Service allows you to post, link, store, share, and
                otherwise make available certain information, text, graphics,
                videos, or other material ("Content"). You are responsible for
                the Content that you post on or through the Service, including
                its legality, reliability, and appropriateness.
              </p>

              <p>
                By posting Content on or through the Service, you represent and
                warrant that the Content is yours and/or you have the right to
                use it and the right to grant us the rights and license as
                provided in these Terms.
              </p>

              <h2>5. Intellectual Property</h2>

              <h3>5.1 Our Intellectual Property</h3>

              <p>
                The Service and its original content (excluding Content provided
                by users), features, and functionality are and will remain the
                exclusive property of MVP Dynamics and its licensors. The
                Service is protected by copyright, trademark, and other laws of
                both the United Kingdom and foreign countries. Our trademarks
                and trade dress may not be used in connection with any product
                or service without the prior written consent of MVP Dynamics.
              </p>

              <h3>5.2 Client Materials and Deliverables</h3>

              <p>
                Ownership of and rights to materials and deliverables created as
                part of our Services will be governed by the specific agreements
                entered into between MVP Dynamics and the client. Unless
                otherwise specified in such agreements:
              </p>

              <ul>
                <li>
                  Materials provided by the client remain the property of the
                  client.
                </li>
                <li>
                  Pre-existing materials, tools, methodologies, and proprietary
                  technologies of MVP Dynamics remain the property of MVP
                  Dynamics.
                </li>
                <li>
                  Upon full payment of all applicable fees, the client will own
                  the deliverables created specifically for the client, subject
                  to any third-party rights or restrictions.
                </li>
              </ul>

              <h2>6. Payment and Fees</h2>

              <p>
                Rates and payment terms for our Services will be as specified in
                separate agreements with clients. Unless otherwise stated:
              </p>

              <ul>
                <li>All fees are quoted in British Pounds Sterling (GBP).</li>
                <li>Payment is due within 30 days of invoice date.</li>
                <li>Development services (£120/hour)</li>
                <li>Technical consultation (£200/hour)</li>
              </ul>

              <h2>7. Termination</h2>

              <p>
                We may terminate or suspend access to our Service immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>

              <p>
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>

              <h2>8. Disclaimer of Warranties</h2>

              <p>
                Your use of the Service is at your sole risk. The Service is
                provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>

              <p>
                MVP Dynamics, its subsidiaries, affiliates, and its licensors do
                not warrant that:
              </p>

              <ol type="a">
                <li>
                  The Service will function uninterrupted, secure, or available
                  at any particular time or location;
                </li>
                <li>Any errors or defects will be corrected;</li>
                <li>
                  The Service is free of viruses or other harmful components; or
                </li>
                <li>
                  The results of using the Service will meet your requirements.
                </li>
              </ol>

              <h2>9. Limitation of Liability</h2>

              <p>
                In no event shall MVP Dynamics, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>

              <ol type="a">
                <li>
                  Your access to or use of or inability to access or use the
                  Service;
                </li>
                <li>
                  Any conduct or content of any third party on the Service;
                </li>
                <li>Any content obtained from the Service; and</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content, whether based on warranty, contract, tort
                  (including negligence), or any other legal theory, whether or
                  not we have been informed of the possibility of such damage.
                </li>
              </ol>

              <p>
                To the maximum extent permitted by applicable law, the total
                liability of MVP Dynamics arising out of or related to these
                Terms or the Services, whether in contract, tort, or otherwise,
                shall not exceed the total amount paid by you to MVP Dynamics in
                the six (6) months preceding the event giving rise to the claim
                or £5,000, whichever is less.
              </p>

              <h2>10. Indemnification</h2>

              <p>
                You agree to defend, indemnify, and hold harmless MVP Dynamics
                and its licensees and licensors, and their employees,
                contractors, agents, officers, and directors, from and against
                any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to
                attorney's fees), resulting from or arising out of:
              </p>

              <ol type="a">
                <li>
                  Your use and access of the Service, by you or any person using
                  your account and password;
                </li>
                <li>A breach of these Terms; or</li>
                <li>Content posted on the Service.</li>
              </ol>

              <h2>11. Governing Law</h2>

              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the United Kingdom, without regard to its conflict
                of law provisions.
              </p>

              <p>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect.
              </p>

              <h2>12. Changes to Terms</h2>

              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>

              <p>
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the
                Service.
              </p>

              <h2>13. Force Majeure</h2>

              <p>
                MVP Dynamics shall not be liable for any failure or delay in
                performance under these Terms where such failure or delay is due
                to causes beyond our reasonable control, including but not
                limited to natural disasters, acts of government, acts of
                terror, strikes or labor disputes, or other unexpected events,
                and where such failure or delay is not reasonably avoidable.
              </p>

              <h2>14. Severability</h2>

              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary so that the Terms will otherwise remain
                in full force and effect and enforceable.
              </p>

              <h2>15. Entire Agreement</h2>

              <p>
                These Terms constitute the entire agreement between you and MVP
                Dynamics regarding our Service and supersede and replace any
                prior agreements we might have had between us regarding the
                Service.
              </p>

              <h2>16. Contact Us</h2>

              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>

              <p>
                Email:{" "}
                <a href="mailto:maxleecole@icloud.com">maxleecole@icloud.com</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;

import React, { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
// Import emailjs when you're ready to implement email functionality
// import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormError("");

    try {
      // Email configuration - to be implemented with actual EmailJS credentials
      // Set up with destination email: maxleecole@icloud.com

      // Note: To implement email functionality, uncomment and update with your EmailJS details
      // First import emailjs from '@emailjs/browser' at the top of this file
      // Then use: await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_USER_ID');
      // Make sure the EmailJS template is configured to send emails to maxleecole@icloud.com

      // Simulate sending for now
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("error");
      setFormError(
        "There was an error sending your message. Please try again."
      );
      console.error("Error sending email:", error);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm mb-5">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Contact Us
          </h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? We'd love to hear about it. Use the form
            below to start a conversation.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-darkBg opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-full max-w-md h-40 bg-gradient-radial from-white/20 to-transparent opacity-30"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 dark:from-primary/5 dark:to-darkBg z-0 opacity-80"></div>
        <div className="mesh-gradient"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-darkSurface rounded-2xl shadow-lg dark:shadow-dark-card overflow-hidden relative"
              >
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Fill out the form below and we'll get back to you as soon as
                    possible. We're looking forward to learning more about your
                    project.
                  </p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-2xl mx-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-darkGray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:bg-darkSurface dark:text-white"
                          disabled={formStatus === "submitting"}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-darkGray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:bg-darkSurface dark:text-white"
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-darkGray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:bg-darkSurface dark:text-white"
                        disabled={formStatus === "submitting"}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-darkGray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:bg-darkSurface dark:text-white"
                        disabled={formStatus === "submitting"}
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <div className="text-red-600 dark:text-red-400 text-sm py-2 bg-red-50 dark:bg-red-900/20 px-4 rounded-lg">
                        {formError}
                      </div>
                    )}

                    {formStatus === "success" && (
                      <div className="text-green-600 dark:text-green-400 text-sm py-2 bg-green-50 dark:bg-green-900/20 px-4 rounded-lg">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-primary dark:bg-primary-light text-white rounded-xl font-medium hover:bg-primary-dark dark:hover:bg-primary transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <FontAwesomeIcon
                              icon={faSpinner}
                              className="animate-spin mr-2"
                            />
                            Sending...
                          </>
                        ) : formStatus === "success" ? (
                          <>
                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                            Message Sent
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <p className="text-lg">
                We typically respond to inquiries within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-white/10 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Whether you need development expertise or strategic consultation,
              we're here to help transform your vision into reality.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <motion.a
                href="/pricing"
                className="px-6 py-4 bg-white/95 text-primary font-medium rounded-xl inline-block shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                View Pricing
              </motion.a>
              <motion.a
                href="/services"
                className="px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl inline-block border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

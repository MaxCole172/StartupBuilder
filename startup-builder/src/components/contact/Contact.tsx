import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context/ThemeContext";
// Import emailjs when you're ready to implement email functionality
// import emailjs from "@emailjs/browser";

interface ContactMethodProps {
  title: string;
  icon: "mail" | "github" | "map";
  darkMode: boolean;
  delay: number;
  children: React.ReactNode;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  title,
  icon,
  darkMode,
  delay,
  children,
}) => {
  // Choose the appropriate icon
  const getIcon = () => {
    switch (icon) {
      case "mail":
        return faEnvelope;
      case "github":
        return faGithub;
      case "map":
        return faMapMarkerAlt;
      default:
        return faEnvelope;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-xl ${
        darkMode ? "bg-darkSurface" : "bg-gray-50"
      } shadow-sm`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            darkMode ? "bg-primary/20" : "bg-primary/10"
          } mr-3`}
        >
          <FontAwesomeIcon
            icon={getIcon()}
            className={`text-primary ${darkMode ? "text-primary-light" : ""}`}
          />
        </div>
        <h3
          className={`text-lg font-display font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className={darkMode ? "text-gray-300" : "text-gray-700"}>
        {children}
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the email body with proper line breaks
    const body = `Name: ${formState.name}%0D%0A%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;

    // Construct mailto link with subject and body
    const mailtoLink = `mailto:contact@mvpdynamics.dev?subject=${encodeURIComponent(
      formState.subject
    )}&body=${body}`;

    // Open the default mail client
    window.location.href = mailtoLink;

    // Reset form after opening mail client
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-darkGray-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:bg-darkSurface dark:text-white"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                          darkMode
                            ? "bg-primary-light hover:bg-primary text-white"
                            : "bg-primary hover:bg-primary-dark text-white"
                        } hover:shadow-glow`}
                      >
                        Open Email Client
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

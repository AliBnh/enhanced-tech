import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const emailJsKey = import.meta.env.VITE_EMAILJS_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId, // Replace with your EmailJS service ID
        templateId, // Replace with your EmailJS template ID
        form.current,
        emailJsKey // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message envoyé avec succès");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Échec de l'envoi du message");
        }
      );
    e.target.reset();
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 min-h-screen pt-32 pb-20 md:px-20 sm:mx-5">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Contactez-nous</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-primary" />
                <span>10 rue Ghandi technopak, Rabat, Maroc</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-primary" />
                <span>
                  Technopark de l'Université Al Akhawayn, Ifrane, Maroc
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-primary" />
                <span>+212 5 35 56 73 60</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMobileAlt className="text-primary" />
                <span>+212 6 35 35 74 42</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-primary" />
                <span>enhanced@aui.ma</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  target="_blank"
                  href="https://www.facebook.com/p/Enhanced-Technologies-100063540521874/"
                >
                  <FaFacebook className="text-primary" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/enhanced-technologies/"
                >
                  <FaLinkedin className="text-primary" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC8og90sYHzCTEVLbTH-Tong"
                >
                  <FaYoutube className="text-primary" />
                </a>
              </div>
              <div className="">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0940461898456!2d-6.851562684741564!3d34.0219356806164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76bb9e518850f:0x9760a534cdd9c604!2sTechnopark%20Rabat!5e0!3m2!1sen!2sma!4v1622120955336!5m2!1sen!2sma"
                    width="200"
                    height="200"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location 1"
                  ></iframe>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.173398982983!2d-5.106567984746654!3d33.5275379807518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda1d776eefad96b%3A0x54cd86bd0a45f90d!2sEnhanced%20Technologies!5e0!3m2!1sen!2sma!4v1622120955336!5m2!1sen!2sma
"
                    width="200"
                    height="200"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location 2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Envoyez-nous un message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

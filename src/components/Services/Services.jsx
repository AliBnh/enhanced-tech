import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import {
  FaBriefcase,
  FaBullseye,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";
const skillsData = [
  {
    name: "Nous connaitre",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    link: "#",
    description:
      "Avec plusieurs années d'expérience et une position de pionnier dans les technologies de l'information et de la communication, Enhanced Technologies se distingue par son expertise et son innovation.",
    aosDelay: "0",
  },
  {
    name: "Notre métier",
    icon: <FaBriefcase className="text-4xl text-primary" />,
    link: "#",
    description:
      "Nous créons et intégrons des systèmes qui automatisent entièrement les démarches administratives au sein des collectivités locales, permettant ainsi aux employés de se concentrer sur leurs missions principales.",
    aosDelay: "200",
  },
  {
    name: "Notre mission",
    icon: <FaBullseye className="text-4xl text-primary" />,
    link: "#",
    description:
      "Notre mission est de devenir un leader majeur des systèmes E-gov pour les collectivités locales marocaines et africaines, en mettant un accent particulier sur la qualité et l'accessibilité de nos solutions.",
    aosDelay: "400",
  },
  {
    name: "Nos valeurs",
    icon: <FaLightbulb className="text-4xl text-primary" />,
    link: "#",
    description:
      "Nos valeurs guident la gestion de notre entreprise, la conduite de nos employés, et nos collaborations principales. Nous valorisons l'excellence, l'intégrité et l'innovation.",
    aosDelay: "600",
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Nos Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Nous proposons des solutions de support IT, de helpdesk, ainsi que
              des ressources à distance ou sur site. Nous vous accompagnons dans
              la résolution de tous vos incidents IT.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-justify">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              onClick={() => {
                document
                  .getElementById("histoire")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="primary-btn"
            >
              En savoir plus
            </button>
          </div>
        </div>
        <span id="histoire"></span>
      </div>
    </>
  );
};

export default Services;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Enhanced Technologies
            </h1>
            <p className="text-sm text-justify">
              Nous somme une jeune équipe complémentaire extrêmement créatifs et
              dynamique nous aimons ce que nous faisons et nous mettons à votre
              service nos compétences pluridisciplinaires .{" "}
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC8og90sYHzCTEVLbTH-Tong"
              >
                <FaYoutube className="text-2xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/p/Enhanced-Technologies-100063540521874/"
              >
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/enhanced-technologies/"
              >
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Bureaux
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>10 rue Ghandi technopak, Rabat</span>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>Technopark de l'Université Al Akhawayn, Ifrane</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contactez-nous
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>05 35 56 73 60</span>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>enhanced@aui.ma</span>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>www.enhanced-tech.ma</span>
                  </li>
                  <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                    <span>Formulaire de contact</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import hero from "../../assets/website/hero-1.jpeg";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-24 sm:mt-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-md"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md "
            >
              <p className="text-gray-500 text-sm ">⭐Projets</p>
              <h1 className="font-bold">
                50+ <span className="font-normal">Réalisés</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Spécialisé dans le{" "}
              <span className="text-primary">
                développement d'applications.
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-justify">
              Pour offrir des solutions toujours plus performantes à nos clients
              et rester à la pointe de l'innovation technologique, Enhanced
              Technologies investit continuellement dans la recherche et le
              développement.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="primary-btn"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

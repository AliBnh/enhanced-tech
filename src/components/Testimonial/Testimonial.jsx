import React from "react";
import Slider from "react-slick";
import hero from "../../assets/website/hero-2.jpg";
const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <div className="my-6">
              {/* card */}
              <h1
                data-aos="fade-up"
                className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary text-center mb-2"
              >
                Notre Histoire
              </h1>
              <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative items-center">
                <img
                  src={hero}
                  alt=""
                  className="block mx-auto h-[250px] w-full sm:w-[200px] object-cover rounded-md"
                />
                <div className="space-y-4">
                  <p className=" dark:text-white xl:pr-40 text-justify">
                    Créée en 2005 à l’Université Al Akhawayn, Enhanced
                    Technologies s’est rapidement imposée comme un acteur majeur
                    dans le domaine des technologies de l’information et de la
                    communication au Maroc. Notre équipe, composée de jeunes
                    ingénieurs, architectes, formateurs et sociologues, allie
                    compétences pluridisciplinaires et passion pour embellir
                    l’environnement informatique marocain, tant au niveau
                    national qu’international. Nous mettons un accent
                    particulier sur la qualité des solutions que nous offrons à
                    nos utilisateurs.
                  </p>
                  <h1 className="text-xl font-bold">{name}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

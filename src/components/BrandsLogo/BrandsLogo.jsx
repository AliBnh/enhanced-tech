import React from "react";
import Brand1 from "../../assets/references/e-Guelmim.jpg";
import Brand2 from "../../assets/references/e-Esfalat.jpg";
import Brand3 from "../../assets/references/e-Ifrane.jpg";
import Brand4 from "../../assets/references/e-Meknes.jpg";
import Brand5 from "../../assets/references/e-Myalichrif.jpg";
import Brand6 from "../../assets/references/e-Ouazzane.jpg";
import Brand7 from "../../assets/references/e-sefrou.jpg";
import Brand8 from "../../assets/references/e-Safi.jpg";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-[-2rem]">
        <h2
          data-aos="fade-up"
          className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary text-center "
        >
          Nos Références
        </h2>{" "}
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} className="w-28 rounded-sm" alt="" />
          <img src={Brand2} className="w-28 rounded-sm" alt="" />
          <img src={Brand3} className="w-28 rounded-sm" alt="" />
          <img src={Brand4} className="w-28 rounded-sm" alt="" />
          <img src={Brand5} className="w-28 rounded-sm" alt="" />
          <img src={Brand6} className="w-28 rounded-sm" alt="" />
          <img src={Brand7} className="w-28 rounded-sm" alt="" />
          <img src={Brand8} className="w-28 rounded-sm" alt="" />
        </div>
        <span id="services"></span>
      </div>
    </>
  );
};

export default BrandsLogo;

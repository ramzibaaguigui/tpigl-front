import React from "react";
import img from "../../images/2.png";
import { motion } from "framer-motion";

function About() {
  return (
    <main className=" my-32 flex flex-col lg:flex-row  px-24 xl:px-32 ">
      <div className="imgContainer mainImg flex-1">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={img}
          alt="Image"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold my-8">
          Plus 1M+ D’annonces sur notre site
        </h2>
        <p className="text-xl font-light lowercase">
          Immob a pris le prix du meilleur site pour la vente et la location des
          bien immobilères lA STRUCTURE DU SITE VOUS PERMET RAPIDEMENT DE
          TROUVER CE QUE VOUS CHERCHER OU MEME IL VOUS PROPOSE DES ANNONCES
          IMMOBILIèRES sans etre authentifié
        </p>
        <button className="px-10 py-4 text-white text-2xl bg-theme-orange rounded-md mt-12 hover:bg-white hover:border hover:border-theme-orange hover:text-theme-orange">
          Lire Plus
        </button>
      </div>
    </main>
  );
}

export default About;

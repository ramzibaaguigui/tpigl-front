import React from "react";
import img from "../../images/1.png";
import { motion } from "framer-motion";
import Typed from "react-typed"

function Main() {
  return (
    <main className=" mt-16 flex flex-col gap-4 lg:flex-row  px-24 xl:px-32">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-theme-orange">
          Résidentiel et bureau{" "}
        </h2>
        <h1 className="text-5xl font-bold my-8 leading-tight">
          
        </h1>
        <Typed
          className="text-5xl font-bold my-8 leading-tight"
          strings={[
                "Le meilleur endroit pour  trouver la maison de  vos reves!",
              ]}
              typeSpeed={10}
        />
        <br/>
        <Typed
          className="text-xl font-light"
          strings={[
                "Vous souhaitez trouver un bien immobilier rapidement, mais vous manquez de temps et de compétences ? Notre équipe est la pour vous accompagner avec toute confiance pour trouver le meilleur .",
              ]}
              typeSpeed={10}
              startDelay={1000}
        />
        <div class="flex mt-16">
          <div class="mb-3 xl:w-96">
            <form action="/search" class="input-group relative flex  items-stretch w-full mb-4">
              <input
                type="text"
                name="s"
                class="form-control relative flex-auto min-w-0 block w-full h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-theme-orange focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                class="btn inline-block px-6 py-2 border-2 border-theme-orange bg-theme-orange text-white font-medium text-xs leading-tight uppercase rounded-r-md   focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="imgContainer mainImg flex-1">
        <motion.img
          initial={{ opacity: 0 ,scale: 0}}
          whileInView={{ opacity: 1 ,scale: 1}}
          transition={{ duration: 1 }}
          src={img}
          alt="Image"
        />
      </div>
    </main>
  );
}

export default Main;

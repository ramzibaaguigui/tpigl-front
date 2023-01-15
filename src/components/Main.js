import React from 'react'
import img from '../images/1.png'

function Main() {
  return (
    <main className=" mt-16 flex flex-col gap-4 lg:flex-row  px-24 xl:px-32">
        <div className="flex-1">
            <h2 className="text-2xl font-bold text-theme-orange">Résidentiel et bureau </h2>
            <h1 className="text-5xl font-bold my-8 leading-tight">Le meilleur endroit pour <br/> trouver la maison de <br/> vos reves !</h1>
            
            <p className="text-xl font-light">
            Vous souhaitez trouver un bien immobilier rapidement, mais vous manquez de temps et de compétences ? 
            Notre équipe est la pour vous accompagner avec toute confiance pour trouver le meilleur .
            </p>
            <div class="flex mt-16">
                <div class="mb-3 xl:w-96">
                    <div class="input-group relative flex  items-stretch w-full mb-4">
                    <input type="search" class="form-control relative flex-auto min-w-0 block w-full h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-theme-orange focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                    <button class="btn inline-block px-6 py-2 border-2 border-theme-orange bg-theme-orange text-white font-medium text-xs leading-tight uppercase rounded-r-md   focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer mainImg flex-1">
            <img
            src={img}
            alt="Image"
            />
        </div>
    </main>
  )
}

export default Main
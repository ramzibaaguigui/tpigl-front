import React from 'react'
import img from '../images/3.jpg'
import {FaBuysellads } from 'react-icons/fa'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {MdOutlineChangeCircle} from 'react-icons/md'

function Services() {
  return (
    <div className='flex flex-col items-center'>
        <div className="flex-1">
            <h1 className="text-5xl font-bold my-8 leading-tight text-center">NOS SERVICES </h1>
            
            <p className="text-xl font-light">
                Notre agence vous facilite l’achat la vente et meme <br/> la location et l’echange de votre bien 
            </p>
        </div>
        <main className=" my-6 flex flex-col gap-16 lg:flex-row  px-24 xl:px-32">
            <div className="flex-1">
                <div className='flex gap-4 shadow-lg p-4 rounded-xl my-8 max-w-md'>
                    <FaBuysellads className='mt-4 text-3xl text-theme-orange'/>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-bold my-4'>acheter une maison</div>
                        <div>Vous êtes un acheteur ? découvrez notre choix en maisons,appartements et terrains sur notre site.</div>
                    </div>
                </div>
                <div className='flex gap-4 shadow-lg p-4 rounded-xl my-8 max-w-md'>
                    <AiOutlineDollarCircle className='mt-4 text-4xl text-theme-orange'/>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-bold my-4'>vendre une maison</div>
                        <div>Vous êtes un vendeur ? déposez votre annonce sur notre site et recevez les meilleurs réponses</div>
                    </div>
                </div>
                <div className='flex gap-4 shadow-lg p-4 rounded-xl my-8 max-w-md'>
                    <MdOutlineChangeCircle className='mt-4 text-4xl text-theme-orange'/>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-bold my-4'>Louer ou échanger</div>
                        <div>Découvrez les meilleurs annonces sur notre site qui vous facilitent la location ou l’échange de votre bien </div>
                    </div>
                </div>
            </div>
            <div className=" flex-1">
                <img
                src={img}
                alt="Image"
                />
            </div>
        </main>
    </div>
  )
}

export default Services
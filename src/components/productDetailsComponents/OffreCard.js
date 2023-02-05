import React from 'react'
import { Link } from "react-router-dom";

function OffreCard({product}) {
  return (
    <Link to={`../post/${product.id}`} class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 overflow-hidden">

   
    <p class="bg-theme-orange w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> OFFER </p>

    <div class="grid grid-cols-6 p-5 gap-y-2">

      
      <div>
        <img src={product.img} class="max-w-16 max-h-16 rounded-full" />
      </div>

      <div class="col-span-5 md:col-span-4 ml-4">

        <p class="text-theme-orange font-bold text-xs"> {product.phone} </p>

        <p class="text-gray-600 font-bold"> {product.description} </p>

      </div>

      <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p class="rounded-lg text-theme-orange font-bold border border-theme-orange  py-1 px-3 text-sm w-fit h-fit"> {product.prix} </p>
      </div>

    </div>

 </Link>
  )
}

export default OffreCard
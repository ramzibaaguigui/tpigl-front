import { Link } from "react-router-dom";
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../api";
/*
import ActionButton from "../uiComponents/ActionButton";
import LikeButton from "../uiComponents/LikeButton";
import VerticalDivider from "../uiComponents/VerticalDivider";

const detailsString = "Details";

function textualizePrice(price) {
  return String(price);
}
*/

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  function delet(id) {
    const del = async () => {
      try {
        const { data } = await axiosInstance.delete(
          `http://127.0.0.1:8000/api/delete/${id}`
        );
        console.log(data.results);
      } catch (error) {
        console.log(error.stack);
      }
    };
  
    
    del();
    window.location.reload()
  }
  return (
    /* ramzi code
    <div
      className="h-fit w-fit max-w-xs my-8 flex flex-col p-2 rounded-lg bg-theme-white shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={product.imageSource}
        className="w-96 h-64 rounded-md"
        alt={product.imageAlt}
      ></img>
      <div className="flex flex-row w-full justify-between pt-1">
        <ActionButton props={{ text: product.offerType }} />
        <LikeButton
          liked={false}
          onClick={() => {
            product.liked = !product.liked;
            console.log(product.liked);
          }}
        />
      </div>
      <span className="text-black w-full h-fit font-bold">{product.name}</span>
      <div className="flex flex-row justify-between">
        <span className="text-black text-lg pt-1 pb-1">{product.location}</span>
        <span className="font-bold text-black mr-5 text-lg">{product.ref}</span>
      </div>

      <div className="font-bold text-black text-lg">{product.available}</div>
      <VerticalDivider />

      <div className="flex flex-row justify-between pt-1 pb-1 items-center">
        <span className="text-theme-orange font-bold text-lg">
          {product.price}
        </span>
        <ActionButton
          props={{
            text: detailsString,
            onClick: product.onDetailsClick,
          }}
        />
      </div>
    </div>
    */
    <div
      tabindex="0"
      class="rounded-lg shadow-lg overflow-hidden focus:outline-none mx-2 my-5  w-72 xl:mb-0 mb-8"
    >
      <Link to={`../post/${product.id}`}>
        <img
          alt="image"
          src={product.image}
          tabindex="0"
          class="focus:outline-none w-full h-44"
        />
      </Link>
      <div class="bg-white">
        <div class="p-4">
          <div class="flex items-center justify-between">
            <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">
              {product.price} DA
            </h2>
            <div class="bg-theme-orange py-1.5 px-6 rounded-full">
              <p tabindex="0" class="focus:outline-none text-xs  text-white">
                {product.type}
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="focus:outline-none text-xs text-gray-600 mt-2 line"
          >
            {product.description}
          </p>

          <div class="flex items-center justify-between py-4">
            <h2
              tabindex="0"
              class="focus:outline-none text-theme-orange text-xs font-semibold"
            >
              {product.commune}, {product.wilaya}
            </h2>
            {product.del ? 
            <button onClick={() => delet(product.id)} className="z-50">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70 text-red-600" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
           </svg>
           </button>: 
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 group-hover:opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

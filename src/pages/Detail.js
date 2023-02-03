import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/sharedComponents/NavBar";
import { useParams } from "react-router-dom";
import Mappost from "../components/landingComponents/Mappost";

function Detail() {
  const [result, setResult] = useState();
  const [images, setimages] = useState();
  const [grimages, setgrimages] = useState();
  const { postId } = useParams();
  useEffect(() => {
    const Search = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/detail/${postId}`
        );
        setResult(data.results);
      } catch (error) {
        console.log(error.stack);
      }
    };

    const image = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/detail/images/${postId}`
        );
        setimages(data.results);
        setgrimages(images[0])
      } catch (error) {
        console.log(error.stack);
      }
    };

    Search();
    image();
    setgrimages(images?images[0].img.replace('http://127.0.0.1:8000/','http://127.0.0.1:8000/api/'):null)
  }, [images]);

  return (
    <Fragment>
      <Navbar />
      {result
        ? result.map((item) => (
            <Fragment>
              <section class="text-gray-700 body-font overflow-hidden bg-white flex flex-col items-center mb-10">
                <div class="container px-5 pt-24 pb-10 mx-auto">
                  <div class="lg:w-3/5 max-h-96 overflow-hidden mx-auto flex flex-wrap">
                    <img
                      alt="image"
                      class="lg:w-1/2 w-full h-full  object-cover object-center rounded border border-gray-200"
                      src={grimages}
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 class="text-md title-font text-theme-orange tracking-widest">
                        {item.category}
                      </h2>
                      <h1 class="text-gray-900 text-3xl my-3 title-font font-medium">
                        {item.type}
                      </h1>
                      <p class="leading-relaxed text-lg text-gray-600">
                        {item.description}
                      </p>
                      <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                      <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">
                          {item.prix} DA
                        </span>
                        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                          Send offre
                        </button>
                        <button class="rounded-full w-10 h-10 bg-white p-0 border-0 inline-flex items-center justify-center  ml-4">
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Mappost lat={item.adress.lat} lng={item.adress.long} />
              </section>
            </Fragment>
          ))
        : null}
    </Fragment>
  );
}

export default Detail;

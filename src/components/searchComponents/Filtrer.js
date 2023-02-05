import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/productDetailsComponents/ProductCard";

function Filtrer() {
  const queryParameters = new URLSearchParams(window.location.search);
  const se = queryParameters.get("s");
  const [s, setS] = useState(se);
  const [type, setType] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [wilayas, setWilayas] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const Search = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/search/?s=${s}&type=${type}&wilaya=${wilaya}&first=${first}&last=${last}`
        );
        setResult(data.results);
      } catch (error) {
        console.log(error.stack);
      }
    };

    Search();
  }, [s, type,wilaya]);

  useEffect(() => {
    

    const getwilayas = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/getwilayas/`
        );
        console.log(data.results)
        setWilayas(data.results);
      } catch (error) {
        console.log(error.stack);
      }
    };
    getwilayas()
  }, []);

  return (
    <Fragment>
      <div class="w-full md:w-2/3 shadow p-5 rounded-lg bg-white block mx-auto mt-10">
        <div class="relative">
          <div class="absolute flex items-center ml-2 h-full">
            <svg
              class="w-4 h-4 fill-current text-primary-gray-dark"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
            </svg>
          </div>

          <input
            type="text"
            name="s"
            onChange={(event) => {
              setS(event.target.value);
            }}
            value={s}
            placeholder="Search here..."
            class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>
        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              name="type"
              onChange={(event) => {
                setType(event.target.value);
              }}
              value={type}
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="">All Type</option>
              <option value="Vente">Vente</option>
              <option value="Location">Location</option>
              <option value="Location vacance">Location vacance</option>
            </select>

            <select
              name="wilaya"
              onChange={(event) => setWilaya(event.target.value)}
              value={wilaya}
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="">ALL Wilayas</option>
              {wilayas ? (
          wilayas.map((item) => (
              <option value={item.name}>{item.name}</option>
          ))):null}
            </select>

            <div class="relative">
              <input
                onChange={(event) => setFirst(event.target.value)}
                value={first}
                name="start"
                type="date"
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Select date start"
              />
            </div>
            <div class="relative">
              <input
                onChange={(event) => setLast(event.target.value)}
                value={last}
                name="end"
                type="date"
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Select date end"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto my-10 gap-3 justify-center">
        {result ? (
          result.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                id: item.Post.id,
                del:false,
                image: item.img.replace(
                  "http://127.0.0.1:8000/",
                  "http://127.0.0.1:8000/api/"
                ),
                wilaya: item.Post.adress.commune.wilaya.name,
                commune: item.Post.adress.commune.name,
                description: item.Post.description,
                price: item.Post.prix,
                type: item.Post.category,
              }}
            />
          ))
        ) : (
          <div class="flex items-center justify-center w-56 h-56">
            <div class="px-6 py-2 text-md font-medium leading-none text-center text-white bg-theme-orange rounded-full animate-pulse">
              loading...
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Filtrer;

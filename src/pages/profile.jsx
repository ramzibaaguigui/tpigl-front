import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../api";
import ProductCard from "../components/productDetailsComponents/ProductCard";
import Navbar from "../components/sharedComponents/NvabarProfile";

function Profile() {
  const user = localStorage.getItem("access_token");
  const [post, setpost] = useState([]);

  useEffect(() => {
    async function getpost() {
      try {
        const response = await axiosInstance.get("/mypost/");
        setpost(response.data.results);
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    getpost();
  }, []);
  if (user == null) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <Navbar currentPage="announces" />
      <div className="flex flex-wrap mx-auto my-10 gap-3 justify-center">
        {post.length ? (
          post.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                id: item.Post.id,
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
        ):(
          <div role="mt-10">
            <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
              No announce yet
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Profile;

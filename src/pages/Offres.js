import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../api";
import OffreCard from "../components/productDetailsComponents/OffreCard";
import Navbar from "../components/sharedComponents/NvabarProfile";

function Profile() {
  const user = localStorage.getItem("access_token");
  const [post, setpost] = useState([]);

  useEffect(() => {
    async function getpost() {
      try {
        const response = await axiosInstance.get("/myoffre/")
        
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
      <Navbar currentPage="offres" />
      <div className="container flex flex-wrap mx-auto my-10 mt-20 gap-3 justify-center">
        {post.length ? (
          post.map((item) => (
            <OffreCard
              key={item.id}
              product={{
                id : item.post.id,
                prix : item.prix,
                phone : item.phone,
                description : item.description,
                img : item.sender.profile_picture.replace(
                  "http://127.0.0.1:8000/",
                  "http://127.0.0.1:8000/api/"
                ),
              }}
            />
          ))
        ) : (
          <div role="mt-10">
           <p class=" text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">No offre yet</p>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Profile;

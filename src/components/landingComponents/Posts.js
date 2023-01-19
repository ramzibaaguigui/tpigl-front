import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductCard from "../../components/productDetailsComponents/ProductCard";


const testImageSource =
  "https://images.pexels.com/photos/8755443/pexels-photo-8755443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const testImageAlt = "this is just a test alt";
const productNameTest = "Product name test";
const testAvailable = "34 lots/34m2";
const testRef = "ref 80";
const testLocation = "Alger";
const testPrice = "234000 DA";
const slideImages = [
  {
    url: "images/slide_2.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/slide_3.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
  },
];
function Posts() {
  return (
    <div className="my-24">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-5xl font-bold my-8 leading-tight text-center">
          NOS Anounces
        </h1>

        <p className="text-xl font-light text-center">
          Notre agence vous facilite l’achat la vente et meme <br /> la location
          et l’echange de votre bien
        </p>
      </div>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="flex justify-evenly h-fit" key={index}>
            <ProductCard
              product={{
                imageSource: testImageSource,
                imageAlt: testImageAlt,
                offerType: productNameTest,
                available: testAvailable,
                ref: testRef,
                location: testLocation,
                price: testPrice,
              }}
            />
            <ProductCard
              product={{
                imageSource: testImageSource,
                imageAlt: testImageAlt,
                offerType: productNameTest,
                available: testAvailable,
                ref: testRef,
                location: testLocation,
                price: testPrice,
              }}
            />
            <ProductCard
              product={{
                imageSource: testImageSource,
                imageAlt: testImageAlt,
                offerType: productNameTest,
                available: testAvailable,
                ref: testRef,
                location: testLocation,
                price: testPrice,
              }}
            />
            <ProductCard
              product={{
                imageSource: testImageSource,
                imageAlt: testImageAlt,
                offerType: productNameTest,
                available: testAvailable,
                ref: testRef,
                location: testLocation,
                price: testPrice,
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Posts;

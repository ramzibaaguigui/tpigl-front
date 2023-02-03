import React , {useEffect , useState} from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductCard from "../../components/productDetailsComponents/ProductCard";
import axios from "axios";



function Posts() {

  const [elements, setelements] = useState();
useEffect(()=>{
  const Posts = async ()=> {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/posts/`
      );
      let l1 = data.results.slice(0, 4)
      let l2 = data.results.slice(4, 8)
      let l3 = data.results.slice(8, 12)
      let l4 = data.results.slice(12, 16)
      let filallist = [l1,l2,l3,l4]
      setelements(filallist)
    } catch (error) {
      console.log(error.stack);
    }
  }
 

  Posts()
  
},[])

  return (
    <div className="my-24" id="pricing">
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
        {elements ? elements.map((elem, index) => (
          <div className="flex flex-wrap py-5 justify-evenly h-fit" key={index}>
            {elem.map((item, index) => (
            <ProductCard
              key={index}
              product={{
                id : item.Post.id,
                image : item.img,
                wilaya: item.Post.adress.commune.wilaya.name,
                commune:item.Post.adress.commune.name,
                description: item.Post.description,
                price: item.Post.prix,
                type:item.Post.category
              }}
            />))}
            
          </div>
        )) : null}
      </Slide>
    </div>
  );
}

export default Posts;

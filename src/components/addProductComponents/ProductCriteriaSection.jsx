import React, { useState,  useEffect } from "react";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";

const productCriteriaNumber = '02';
const productCriteriaTitle = 'Product Criteria';


const ProductCriteriaSection = ({sendData,sendData2,sendData3,sendData4}) => {
  

        const [category, setcategory] = useState('')
    
        useEffect(()=>{
          sendData(category)
    },[category])

        const [type, settype] = useState('')
    
        useEffect(()=>{
          sendData2(type)
    },[type])

        const [surface, setsurface] = useState('')
    
        useEffect(()=>{
          sendData3(surface)
    },[surface])

        const [prix, setprix] = useState('')
    
        useEffect(()=>{
          sendData4(prix)
    },[prix])
    return(
        <div className="flex flex-col">
            <SectionHeader
                number={productCriteriaNumber}
                title={productCriteriaTitle} />

            <TitleTextField placeholder={'Type du bien'} onInputChange={event => setcategory(event.target.value)}/>       
            <TitleTextField placeholder={'Surface'} onInputChange={event => setsurface(event.target.value)}/>
            <TitleTextField placeholder={'Prix'} onInputChange={event => setprix(event.target.value)}/>
            <TitleTextField placeholder={`Type d'offre`} onInputChange={event => settype(event.target.value)}/>
            
    

        </div>
    )
}

export default ProductCriteriaSection;


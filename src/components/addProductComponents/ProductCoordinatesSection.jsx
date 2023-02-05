import VerticalDivider from "../uiComponents/VerticalDivider";
import AddProductInputField from "./AddProductInputField";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";
import DropdownSelect from "./SelectOption"
import axios from "axios";
import React, { useState,  useEffect } from "react";


const coordinatesSectionNumber = '03'
const coordinatesSectionTitle = 'Coordonnees'


const numeroTelephoneString = 'Numero du telephone'


function ProductCoordinatesSection({sendData}) {

    const [telephone, setTelephone] = useState('')

    useEffect(()=>{
      sendData(telephone)
},[telephone])
/*
    const [wilayas, setWilayas] = useState();
    const [communs, setcommunes] = useState();
    useEffect(() => {
        const getwilayas = async () => {
          try {
            const { data } = await axios.get(
              `http://127.0.0.1:8000/api/getwilayas/`
            );
            setWilayas(data.results);
          } catch (error) {
            console.log(error.stack);
          }
        };
        getwilayas()
      }, []);

   useEffect(() => {   
      const getcommunes = async () => {
        try {
          const { data } = await axios.get(
            `http://127.0.0.1:8000/api/getcommunes/`
          );
          setcommunes(data.results);
          console.log(data.results)
        } catch (error) {
          console.log(error.stack);
        }
      };
      getcommunes()
    }, [selectedWilaya]);*/

    return (
        <div className="flex flex-col w-full">


            <SectionHeader
                number={coordinatesSectionNumber}
                title={coordinatesSectionTitle} />
           
            <TitleTextField placeholder={numeroTelephoneString}
                onInputChange={event => setTelephone(event.target.value)} />

        </div>
    )
}

export default ProductCoordinatesSection;
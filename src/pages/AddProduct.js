
import React, { Fragment ,useState , useEffect} from 'react'
import axiosInstance from '../api';
import ProductCoordinatesSection from "../components/addProductComponents/ProductCoordinatesSection";
import ProductCriteriaSection from "../components/addProductComponents/ProductCriteriaSection"
import ProductDescriptionSection from "../components/addProductComponents/ProductDescriptionSection";
import Navbar from "../components/sharedComponents/NvabarProfile";
const AddProduct = () => {

    const [category, setcategory] = useState('Vente');
    const [type, settype] = useState('');
    const [surface, setsurface] = useState('');
    const [prix, setprix] = useState('');
    const [description, setdescription] = useState('');
    const [phone, setphone] = useState('');

    const [imgs, setimgs] = useState([]);
    
    const addimage = (e) => {
        let s = URL.createObjectURL(e.target.files[0])
        setimgs(imgs => [...imgs, s]);
    }

    async function ajouter(e)  {
        let lat = 0
        let long=0
        e.preventDefault();
        if (imgs.length) {

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    lat =  position.coords.latitude
                    long =  position.coords.longitude
                });
                try {
                    const response = await axiosInstance.post('/post/create/', {
                        category: category,
                        type: type,
                        surface: surface,
                        prix: prix,
                        description: description,
                        images:imgs,
                        lat :lat,
                        long :long,
                        phone:phone
                    });
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    console.log(response)
                    return response.data;
                } catch (error) {
                    throw error;
                }
        }else{
            alert("geolocation isn't available")
        }
        } else {
            alert('add picture')
        }
        
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
        });
    })

    const handledescription = (receivedData) => {
        setdescription(receivedData);
      };

    const handlephone = (receivedData) => {
        setphone(receivedData);
      };
      const handlecategory = (receivedData) => {
        setcategory(receivedData);
      };
      const handletype = (receivedData) => {
        settype(receivedData);
      };
      const handlesurface = (receivedData) => {
        setsurface(receivedData);
      };
      const handleprix = (receivedData) => {
        setprix(receivedData);
      };
    return (
        <Fragment>
            <Navbar currentPage="add"/>
        <div className="container my-10 px-16 flex flex-col">
            <ProductDescriptionSection sendData={handledescription}/>
            <div className="h-4"></div>
            <ProductCriteriaSection sendData={handlecategory} sendData2={handletype} sendData3={handlesurface} sendData4={handleprix}/>
            <div className="h-4"></div>
            <ProductCoordinatesSection sendData={handlephone} />
            
        </div>
        </Fragment>
    )

}

export default AddProduct;
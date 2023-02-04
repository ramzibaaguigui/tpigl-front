import ProductDescriptionSection from "../components/addProductComponents/ProductDescriptionSection";
import ProductCoordinatesSection from "../components/addProductComponents/ProductCoordinatesSection";
import ProductCriteriaSection from "../components/addProductComponents/ProductCriteriaSection"
import ProductPhotosSection from "../components/addProductComponents/ProductPhotosSection"
import ActionButton from "../components/uiComponents/ActionButton";
import { useState } from "react";

const publishString = 'Publier'
const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [surface, setSurface] = useState('')
    const [type, setType] = useState('')
    const [typeOffre, setTypeOffre] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [images, setImages] = useState([])

    const handlePublishClicked = (e) => {
        console.log(e.target.innerHTML);
    }

    const constructPost = () => {

    }

    return (
        <div className="flex flex-col items-center p-10">
            <ProductDescriptionSection
                onTitleChanged={event => setTitle(event.target.value)}
                onDescriptionChanged={event => setDescription(event.target.value)} />
            <div className="h-4"></div>
            <ProductCriteriaSection
                onTypeOffreChanged={event => setTypeOffre(event.target.value)}
                onTypeChanged={event => setType(event.target.value)}
                onSurfaceChanged={event => setSurface(event.target.value)}
                onPrixChanged={event => setPrix(event.target.value)} />

            <div className="h-4"></div>
            
            <ProductCoordinatesSection />
            <div className="h-4" ></div>
            <ProductPhotosSection />

            <div className="flex flex-row items-end p-2">
                <ActionButton props={{ text: publishString, onClick: handlePublishClicked }} />
            </div>


        </div>
    )

}

export default AddProduct;
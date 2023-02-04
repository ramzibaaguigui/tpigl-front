import { useState } from "react";
import SectionHeader from "./SectionHeader";
import addPhotoImage from "./../../images/add_product_photo.png"

const photosSectionNumber = '04'
const photosSectionTitle = 'Photos'
const photosSectionHint = 'Vous pouvez ajouter plusieurs photos'

const smapleImageSource = `file:///C:/Users/Ramzi/Pictures/Screenshots/Screenshot%20(41).png`
const AddPhoto1 = ({ onAddPhotoClicked }) => {
    return (
        <div onClick={onAddPhotoClicked}
            className="m-2 hover:bg-gray-50 active:bg-gray-100 cursor-pointer w-40 h-40 border-2 border-black justify-center items-center flex flex-col">
            <img className=" w-40 h-32" src={addPhotoImage}></img>
            <span className="">Ajouter photo</span>
        </div>
    )
}

const AddPhoto = ({ handleChange }) => {

    return (
        <div className="hidden m-2 w-40 h-40 border-2 border-black">
            <input id="file-selector" className="display-none w-40 h-40"
             type={'file'}
                accept={"image/png, image/jpeg"}
                onChange={event => handleChange(event)} />
                
        </div>
    )
}

const PhotoItemView = ({ imageSource = smapleImageSource, onDeleteClicked }) => {

    return (
        <div className="m-2 w-40 h-40 border-2 border-black relative">

            <img className="w-full h-full bg-black object-scale-down" src={imageSource} />
        </div>
    )
}

function ProductPhotosSection() {

    const [photos, setPhotos] = useState([])


    const addimage = (e) => {
        let s = URL.createObjectURL(e.target.files[0])
        setPhotos(photos => [...photos, s]);
        console.log(photos.length)
    }

    const onAddPhotoClick = (e) => {
        let fileSelector = document.getElementById('file-selector');
        fileSelector.click();
    }

    return (
        <div className="flex flex-col w-full">
            <SectionHeader
                number={photosSectionNumber}
                title={photosSectionTitle} />
            <span>{photosSectionHint}</span>
            <div className="flex flex-row overflow-x-scroll">
                
                <AddPhoto handleChange={e => addimage(e)} />
                <AddPhoto1 onAddPhotoClicked={onAddPhotoClick}/>
                <div className="flex flex-row">
                    {photos.map((item, index, array) => 
                        <PhotoItemView imageSource={item} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProductPhotosSection;
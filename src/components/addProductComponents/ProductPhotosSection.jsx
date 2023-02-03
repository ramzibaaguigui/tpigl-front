import { useState } from "react";
import SectionHeader from "./SectionHeader";
import addPhotoImage from "./../../images/add_product_photo.png"
const photosSectionNumber = '04'
const photosSectionTitle = 'Photos'
const photosSectionHint = 'Vous pouvez ajouter plusieurs photos'

const AddPhoto = () => {
    return (
        <div 
        className="hover:bg-gray-50 active:bg-gray-100 cursor-pointer w-40 h-40 border-2 border-black flex flex-col items-center justify-center">
            <img className=" w-32 h-32" src={addPhotoImage}></img>
            <span>Ajouter photo</span>
        </div>
    )
}

const PhotoItem = () => {
    const [image, setImage] = useState(null);
    const handleChange = (event) => {
        console.log(event.target.files[0])
    }
    return (
        <div className="w-40 h-40 border-2 border-black relative">
            <input type={'file'} onChange={handleChange} />
            {image && <img src={image} alt={'uploaded'} />}
        </div>
    )
}

function ProductPhotosSection() {

    const [photos, setPhotos] = useState([])

    const addPhoto = (photo) => {
        let oldPhotos = photos;
        oldPhotos.append(photo);
        setPhotos(oldPhotos)
    }
    return (
        <div className="flex flex-col w-full">
            <SectionHeader
                number={photosSectionNumber}
                title={photosSectionTitle} />
            <span>{photosSectionHint}</span>

        </div>
    )
}
import { useState } from "react";


const AddProductInputField = ({ placeholderText }) => {

    const [input, setInput] = useState('')
    return (
        <div className="mt-2 h-fit w-full p-2 text-base border-solid border-black border-2 rounded-md">
            <input type="text" id="type" list="types" onChange={event => { setInput(event.target.value) }}
                placeholder={placeholderText}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline outline-theme-orange"
                required />
            <datalist id="types">
                <option>Terrain</option>
                <option>Terrain Agricole</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Bungalow</option>
            </datalist>

        </div>
    )
}



export default { AddProductInputField };
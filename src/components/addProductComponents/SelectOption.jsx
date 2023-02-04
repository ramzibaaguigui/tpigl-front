
import React from "react";



const DropdownSelect = ({options , onItemSelected}) => {
   

    return (
        <select className="w-full p-2 text-lg shadow-lg border-solid mt-2 
        border-black border-2 rounded-md outline-none" onChange={event => onItemSelected(event)}>
            {
                options?options.map(
                    (item) => (
                        <option value={item.name}>{item.name}</option>
                    )
                ):null
            }
        </select>
    )
}

export default DropdownSelect
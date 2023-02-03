
const wilayas = ['batna', 'biskra', 'alger']
const placeholder = 'placeholder'

const DropdownSelect = ({options = wilayas, onItemSelected}) => {

    return (
        <select className="w-full p-2 text-lg shadow-lg border-solid mt-2 
        border-black border-2 rounded-md outline-none" onChange={event => onItemSelected(event)}>
            {
                options.map(
                    (item, index) => (
                        <option value={index}>{item}</option>
                    )
                )
            }
        </select>
    )
}

export default DropdownSelect
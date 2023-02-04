

const TextInputField = ({placeholder, onTextChange}) => {
    return (
        <div className="p-2 text-lg shadow-lg border-solid mt-2 
        border-black border-2 rounded-md outline-none">
            <textarea className="w-full" 
            onChange={onTextChange}
            placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextInputField;
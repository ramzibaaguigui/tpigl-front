
const DescriptionTextField = ({placeholder = 'this is the long text placeholder'}) => {
    return (
        <div className="mt-2 h-fit w-full p-2 text-base border-solid border-black border-2 rounded-md">
            <textarea className='border-none outline-none w-full h-32' placeholder={placeholder}></textarea>
        </div>
    )
}

export default DescriptionTextField;
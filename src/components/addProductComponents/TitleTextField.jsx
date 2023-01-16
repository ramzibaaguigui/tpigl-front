
const TitleTextField = ({ placeholder }) => {
    return (
        <div className="p-2 text-lg shadow-lg border-solid mt-2 
        border-black border-2 rounded-md outline-none">
            <input placeholder={placeholder} type={'text'}
                className='w-full h-fit focus:border-none active:border-none'></input>
        </div>
    )
}

export default TitleTextField;
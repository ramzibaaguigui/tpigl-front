
const TitleTextField = ({ placeholder, onInputChange  }) => {
    return (
        <div className="p-2 text-lg shadow-lg border-solid mt-2 
        border-black border-2 rounded-md outline-none">
            <input placeholder={placeholder} type={'text'} onChange={event => onInputChange(event)}
                className='w-full h-fit focus:border-none focus:outline-none active:border-none'></input>
            
        </div>
    )
}

export default TitleTextField;

const searchFieldPlaceholder = 'Enter a keyword in order to search'

const SearchBar = () => {
    return (
        <div className="w-full flex flex-row align-middle rounded-full bg-theme-white p-1">
            <input placeholder={searchFieldPlaceholder} type={"text"} className='w-full h-12 text-2xl pt-4 pb-4 pl-4 pr-4 rounded-full'></input>
            <div className="h-full w-fit -translate-x-1 p-2 text-white flex flex-row text-center rounded-full bg-theme-orange z-20 self-center align-middle text-2xl pr-4 pl-4 ">
                <span className="h-full">Search</span>
                
                </div>

        </div>
    );
}

export default SearchBar;
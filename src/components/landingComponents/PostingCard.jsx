
const likeImageSource = require('./../../public/icons/ic_like.png')
const likedImageSource = require('./../../public/icons/ic_like.png');


const PostingCard = ({postingType, isLiked, estateTitle, estateLocation, estateArea, estatePrice, estateRef, estateImageSource,
estateImageAlt}) => {
    return (
        <div className="flex flex-col shadow-xl p-4 rounded-sm mr-4 ml-4 min-w-max overflow-x-clip">
            <img src={estateImageSource} alt={estateImageAlt}
            className="rounded-lg object-cover bg-theme-orange h-72 w-72"></img>
            <div className="flex flex-row justify-between p-2 align-middle">
                <span className='self-center text-theme-white font-bold bg-theme-orange rounded-full pt-1 pb-1 pl-4 pr-4'>{postingType}</span>
                <img src={isLiked? likedImageSource : likeImageSource}
                className='self-center h-8 w-8'></img>
            </div>

            <span className='font-bold'>{estateTitle}</span>
            <span className=''>{estateLocation}</span>
            <span>{estateArea}</span>
            <div className="w-full h-[2px] rounded-full bg-theme-orange">
                <span>{estateArea}</span>
            </div>
            <div className="flex flex-row justify-between">
                <span className='text-theme-orange font-bold'>{estatePrice}</span>
                <span className='text-black font-bold'>{estateRef}</span>
            </div>
        </div>
    )
}

export default PostingCard;
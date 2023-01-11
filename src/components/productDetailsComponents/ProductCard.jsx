import ActionButton from "../uiComponents/ActionButton";
import LikeButton from "../uiComponents/LikeButton";
import VerticalDivider from "../uiComponents/VerticalDivider";

const detailsString = 'Details'

function textualizePrice(price) {
    return String(price);
}
const ProductCard = ({ product }) => {
    
    return (
        <div className="h-fit w-fit flex flex-col p-2 rounded-lg bg-theme-white shadow-lg">
            <img src={product.imageSource}
                className='w-96 h-64 rounded-md'
                alt={product.imageAlt} ></img>
            <div className="flex flex-row w-full justify-between pt-1">
                <ActionButton props={{ text: product.offerType }} />
                <LikeButton liked={false} onClick={() => {product.liked = !product.liked; console.log(product.liked)}} />
            </div>
            <span className="text-black w-full h-fit font-bold">{product.name}</span>
            <div className="flex flex-row justify-between">
                <span className="text-black text-lg pt-1 pb-1">{product.location}</span>
                <span className="font-bold text-black mr-5 text-lg">{product.ref}</span>
            </div>

            <div className="font-bold text-black text-lg">{product.available}</div>
            <VerticalDivider />

            <div className="flex flex-row justify-between pt-1 pb-1 items-center">
                <span className="text-theme-orange font-bold text-lg">{product.price}</span>
                <ActionButton props={{
                    text: detailsString,
                    onClick: product.onDetailsClick
                }} />
            </div>
        </div>
    )
}
export default ProductCard;
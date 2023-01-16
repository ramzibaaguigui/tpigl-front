import AdvertiserCard from "../components/productDetailsComponents/AdvertiserCard";
import ProductCard from "../components/productDetailsComponents/ProductCard";
import LikeButton from "../components/uiComponents/LikeButton";

const testImageSource = "https://q-xx.bstatic.com/xdata/images/hotel/840x460/87616830.jpg?k=d3190f350292713118958a4cbf9d82d44222d6cd6db03014bb248d904c623946&o="
// const testImageSource = require('./../../public/icons/favicon.ico')
const testImageAlt = 'this is just a test alt'
const productNameTest = 'Product name test'
const testAvailable = '34 lots/34m2'
const testRef = 'ref 80'
const testLocation = 'Alger'
const testPrice = '234000 DA'
const Test = () => {
    return (
        <div className="flex flex-col w-full ">

            <ProductCard
                product={{
                    imageSource: testImageSource,
                    imageAlt: testImageAlt,
                    offerType: productNameTest,
                    available: testAvailable,
                    ref: testRef,
                    location: testLocation,
                    price: testPrice
                }}
            />
        </div>


    )
}
export default Test;
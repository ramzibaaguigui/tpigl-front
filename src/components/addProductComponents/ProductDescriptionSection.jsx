import DescriptionTextField from "./DescriptionTextField";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";

const productDescriptionNumber = '01'
const productDescriptionTitle = 'Product Description'

const ProductDescriptionSection = () => {
    return (
        <div className="flex flex-col">
            <SectionHeader
                number={productDescriptionNumber}
                title={productDescriptionTitle} />
            
            <TitleTextField placeholder={'Product Title'} />
            <DescriptionTextField 
            placeholder={"enter the description of your product"} />
            
        </div>
    )
}

export default ProductDescriptionSection;
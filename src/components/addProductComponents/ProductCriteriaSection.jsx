import SectionHeader from "./SectionHeader";

const productCriteriaNumber = '02';
const productCriteriaTitle = 'Product Criteria';

const ProductCriteriaSection = () => {
    return (
        <div className="flex flex-col">
            <SectionHeader
                number={productCriteriaNumber}
                title={productCriteriaTitle} />
            
            
        </div>
    )
}

export default ProductCriteriaSection;
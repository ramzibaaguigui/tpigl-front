import AddProductInputField from "./AddProductInputField";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";

const productCriteriaNumber = '02';
const productCriteriaTitle = 'Product Criteria';

const ProductCriteriaSection = () => {
    return (

        <div className="flex flex-col">
            <SectionHeader
                number={productCriteriaNumber}
                title={productCriteriaTitle} />

            <TitleTextField placeholder={'Type du bien'} />
            <TitleTextField placeholder={'Surface'} />
            <TitleTextField placeholder={'Prix'} />
            <TitleTextField placeholder={`Type d'offre`} />


        </div>

    )
}

export default ProductCriteriaSection;


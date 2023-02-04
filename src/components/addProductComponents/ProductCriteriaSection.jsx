import AddProductInputField from "./AddProductInputField";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";

const productCriteriaNumber = '02';
const productCriteriaTitle = 'Product Criteria';

const ProductCriteriaSection = ({onTypeChanged, onSurfaceChanged, onPrixChanged, onTypeOffreChanged}) => {
    return (

        <div className="flex flex-col w-full">
            <SectionHeader
                number={productCriteriaNumber}
                title={productCriteriaTitle} />

            <TitleTextField placeholder={'Type du bien'} onInputChange={onTypeChanged}  />
            <TitleTextField placeholder={'Surface'} onInputChange={onSurfaceChanged} />
            <TitleTextField placeholder={'Prix'} onInputChange={onPrixChanged} />
            <TitleTextField placeholder={`Type d'offre`} onInputChange={onTypeOffreChanged} />
            

        </div>

    )
}

export default ProductCriteriaSection;


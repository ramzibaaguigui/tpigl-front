import ProductDescriptionSection from "../components/addProductComponents/ProductDescriptionSection";
import ProductCoordinatesSection from "../components/addProductComponents/ProductCoordinatesSection";
import ProductCriteriaSection from "../components/addProductComponents/ProductCriteriaSection"
const AddProduct = () => {
    return (
        <div className="flxe flex-col">
            <ProductDescriptionSection />
            <div className="h-4"></div>
            <ProductCriteriaSection />
            <div className="h-4"></div>
            <ProductCoordinatesSection />
            
        </div>
    )

}

export default AddProduct;
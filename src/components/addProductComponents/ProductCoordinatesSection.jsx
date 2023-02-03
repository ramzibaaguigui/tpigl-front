import VerticalDivider from "../uiComponents/VerticalDivider";
import AddProductInputField from "./AddProductInputField";
import SectionHeader from "./SectionHeader";
import TitleTextField from "./TitleTextField";
import DropdownSelect from "./SelectOption"
import { useState } from "react";

const coordinatesSectionNumber = '03'
const coordinatesSectionTitle = 'Coordonnees'

const wilayas = ['adrar', 'chlef', 'leghouat', 'other']
const communes = ['adrar', 'chlef', 'other']

const villeString = 'Ville'
const numeroTelephoneString = 'Numero du telephone'


function ProductCoordinatesSection() {

    const [selectedWilaya, setSelectedWilaya] = useState('');
    const [selectedCommune, setSelectedCommune] = useState('');
    const [ville, setVille] = useState('')
    const [telephone, setTelephone] = useState('')


    return (
        <div className="flex flex-col w-full">


            <SectionHeader
                number={coordinatesSectionNumber}
                title={coordinatesSectionTitle} />

            <DropdownSelect options={wilayas} onItemSelected={
                (event) => { setSelectedWilaya(wilayas[event.target.value]) }
            } />
            <DropdownSelect options={communes}
                onItemSelected={(event) => setSelectedCommune(communes[event.target.value])} />
            <TitleTextField placeholder={villeString}
                onInputChange={event => setVille(event.target.value)} />
            <TitleTextField placeholder={numeroTelephoneString}
                onInputChange={event => setTelephone(event.target.value)} />

        </div>
    )
}

export default ProductCoordinatesSection;
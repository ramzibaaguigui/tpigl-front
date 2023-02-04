import { useState } from 'react'
import TextInputField from './TextInputField';
import TitleTextField from './TitleTextField';
import SectionHeader from './SectionHeader'
import { useEffect } from 'react';

function ProductDescriptionSection({sendData}) {
    const [description, setDescription] = useState('')

    const onDescriptionChanged = event => setDescription(event.target.value);

    useEffect(()=>{
        sendData(description)
},[description])

    return (
        <div className="flex flex-col w-full">

            <SectionHeader number={'01'} title={"Description de l'article"} />
            

            <TextInputField 
            placeholder={"Description de l'article"}
            onTextChange={onDescriptionChanged} />

        </div>
    )
}

export default ProductDescriptionSection;
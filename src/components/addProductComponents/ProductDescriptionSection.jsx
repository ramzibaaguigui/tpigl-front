import { useState } from 'react'
import TextInputField from './TextInputField';
import TitleTextField from './TitleTextField';
import SectionHeader from './SectionHeader'

function ProductDescriptionSection({onTitleChanged, onDescriptionChanged}) {

    return (
        <div className="flex flex-col w-full">

            <SectionHeader number={'01'} title={`Description de l'article`} />
            <TitleTextField onInputChange={onTitleChanged}
            placeholder={'Title'} />
            
            <TextInputField 
            placeholder={`Description de l'article`}
            onTextChange={onDescriptionChanged} />
            
        </div>
    )
}

export default ProductDescriptionSection;
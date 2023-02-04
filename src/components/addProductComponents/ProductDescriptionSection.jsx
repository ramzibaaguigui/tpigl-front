import { useState } from 'react'
import TextInputField from './TextInputField';
import TitleTextField from './TitleTextField';
import SectionHeader from './SectionHeader'

function ProductDescriptionSection() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onTitleChanged = event => setTitle(event.target.value);
    const onDescriptionChanged = event => setDescription(event.target.value);



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
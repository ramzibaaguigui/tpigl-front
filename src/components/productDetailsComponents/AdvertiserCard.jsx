
import ActionButton from "../uiComponents/ActionButton";



const personIconImageSource = require('./../../public/icons/ic_person.png')
const phoneIconImageSource = require('./../../public/icons/ic_phone.png')
const emailIconImageSource = require('./../../public/icons/ic_email.png')
const chatIconImageSource = require('./../../public/icons/ic_chat.png')

const advertiserString = 'Advertiser'
const sendInquiryString = 'Send Inquiry'

const AdvertiserInfoItem = ({ iconImageSource, text, underlined, bold }) => {
    return (
        <div className="flex flex-row h-fit w-full">
            <img src={iconImageSource} className={'w-10 h-10'}></img>
            <span className={`text-lg text-black ${underlined ? ' underline ' : ' '} ${bold ? ' font-bold ' : ' '}`}>{text}</span>
        </div>
    )
}

const AdvertiserCard = ({ advertiser }) => {
    return (
        <div className="p-1 flex flex-col rounded-md shadow-2xl w-64">
            <ActionButton props={{ text: advertiserString }} />
            {/*For the name of the publisher */}
            <AdvertiserInfoItem
                bold={true}
                text={advertiser.name}
                iconImageSource={personIconImageSource} />

            {/** For the publisher's phone number*/}
            <AdvertiserInfoItem

                iconImageSource={phoneIconImageSource}
                text={advertiser.phone} />

            {/**For the publisher's email address */}
            <AdvertiserInfoItem
                text={advertiser.email}
                iconImageSource={emailIconImageSource} />

            <ActionButton props={{ text: sendInquiryString, fullWidth: true }} />
        </div>
    )
}

export default AdvertiserCard;


const NumberCircle = ({ number = '22' }) => {
    return <div className="w-10 h-10 bg-theme-orange flex justify-center items-center
    rounded-full">
        <span className="text-theme-white">{number}</span>
    </div>
}

const SectionTitle = ({ title = 'Section Title' }) => {
    return (
        <span className="text-theme-orange font-bold text-2xl ml-5">hello</span>
    )
}

const HorizontalLine = () => {
    return (
        <div className="bg-theme-orange h-[1px] w-full mt-2" ></div>
    )
}

const SectionHeader = ({ number, title }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <NumberCircle number={number} />
                <SectionTitle title={title} />
            </div>
            <HorizontalLine />
        </div>
    )
}


export default SectionHeader;
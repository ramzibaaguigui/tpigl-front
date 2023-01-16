

const ActionButton = ({props}) => {
    return <div className={`h-fit ${props.fullWidth? 'w-full' : 'w-fit'} bg-theme-orange rounded-full pr-2 pl-2 pt-2 pb-2 text-sm font-bold`}>
        <span onClick={props.onClick} 
        className="text-theme-white font-bold">{props.text}</span>
    </div>
}

export default ActionButton;
import React from 'react'

type Props = {
    icon: any;
    className?: string;
    iconStyle?: string;
}

const IconContainer = (props: Props) => {

    const btnStyle = props?.className ? props.className : '';

    return (
        <div className="flex flex-col items-center justify-center">
            <button className={`flex flex-col items-center 
                justify-center border-none border-0 bg-none ${btnStyle}`}>
                <props.icon className={`relative block ${props?.iconStyle}`} />
            </button>
        </div>
    )
}

export default IconContainer
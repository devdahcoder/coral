import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode
    className?: string;
}

const BodyFrame = ({children, className}: Props) => {

    const classStyle = className ? className : '';
    
    return (
        <div className={`w-4/5 my-0 mx-auto ${classStyle}`}>
            {
                children
            }
        </div>
    )
}

export default BodyFrame
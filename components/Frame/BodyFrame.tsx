import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const BodyFrame = ({children}: Props) => {
    return (
        <div className="w-4/5 my-0 mx-auto ">
            {
                children
            }
        </div>
    )
}

export default BodyFrame
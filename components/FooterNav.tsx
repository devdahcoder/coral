import Link from 'next/link';
import React from 'react'

type Props = {
    header: string;
    links: Record<string, any>[];
}

const FooterNav = (props: Props) => {
    return (
        <div className="flex flex-col">
            <div className="text-sm font-semibold text-black mb-4 uppercase">
                <p>{props?.header}</p>
            </div>
            <div className="flex flex-col space-y-4">
                {
                    props.links.map((link, index) => {
                        return (
                            <div key={index}>
                                <Link href={link?.link}>
                                    <div className="w-full cursor-pointer flex items-center justify-start flex-row text-xs font-medium">
                                        <p>{link?.text}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FooterNav
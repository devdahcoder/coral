import React from 'react';
import BodyFrame from './Frame/BodyFrame';
import IconContainer from './IconContainer';
import { subHeaderLinks } from '../constants/subHeaderLinks'
import Logo from '../public/Icons/Logo';
import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Search from './Search';


type Props = {}

const Header = (props: Props) => {


    const HeaderLink = (props: any) => {
        return (
            <div className="flex flex-row items-center">
                <a href="" className="w-full flex flex-row items-center">
                    <IconContainer iconStyle={'w-4.5 h-4.5'} icon={props?.icon} />

                    <span className="ml-1.5 text-xs font-medium">{props?.text}</span>
                </a>
            </div>
        )
    }

    return (
        <header>
            <BodyFrame>
                <div className="flex py-4 border-b flex-row items-center justify-between">
                    
                    <div>
                        <Search />
                    </div>

                    <div className="">
                        <Logo />
                    </div>

                    <div className="flex flex-row items-center space-x-4">

                        <HeaderLink text={'Account'} icon={IoPersonOutline} />

                        <HeaderLink text={'Shopping'} icon={HiOutlineShoppingBag} />
                        
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between py-4">
                    {
                        subHeaderLinks.map(({text}: {text: string}, index: number) => {
                            return (
                                <>
                                    <div key={index} className="flex rounded-sm flex-row items-center">
                                        <a href="" className="w-full flex flex-row items-center 
                                            text-xs py-2 px-1 font-medium rounded-sm hover:bg-black hover:text-white hover:transition-all hover:ease-linear hover:delay-200">
                                            {text}
                                        </a>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                
            </BodyFrame>
        </header>
    )
}

export default Header
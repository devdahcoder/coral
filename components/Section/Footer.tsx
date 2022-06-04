import React from 'react';
import Payment from '../../public/Images/payment.png';
import { BsArrowUp, BsTwitter, BsFacebook, BsDribbble } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import BodyFrame from '../Frame/BodyFrame';
import Logo from '../../public/Icons/Logo';
import Link from 'next/link';
import FooterNav from '../FooterNav';
import { catalog, aboutUs, customerServices } from '../../constants/footerNav';
import { text } from 'node:stream/consumers';

type Props = {}

const Footer = (props: Props) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const socialMediaIcons = [
        {
            icon: BsFacebook,
            link: 'https://facebook.com/',
            text: 'Facebook'
        },
        {
            icon: BsTwitter,
            link: 'https://twitter.com/',
            text: 'Twitter'
        },
        {
            icon: GrLinkedinOption,
            link: 'https://linkedin.com/',
            text: 'Linkedin'
        },
        {
            icon: BsDribbble,
            link: 'https://dribbble.com/',
            text: 'Dribbble'
        },
    ]


    return (
        <div className="flex flex-col">

            <div className="py-16">
                <BodyFrame>
                    <div className="flex flex-row">
                        <div className="w-[35%] space-y-9 mr-16">
                            <div>
                                <Logo />
                            </div>
                            <div className="text-[14px] capitalize pr-2 leading-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p>
                            </div>

                            <div>
                                <div className="flex flex-row items-center space-x-8">
                                    {
                                        socialMediaIcons?.map((icon, index) => (
                                            <div key={index} className="">
                                                <a href={icon?.link}><icon.icon /></a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row grow justify-between">
                            <FooterNav header={"catalog"} links={catalog} />
                            <FooterNav header={"about us"} links={aboutUs} />
                            <FooterNav header={"customer services"} links={customerServices} />
                        </div>

                    </div>
                </BodyFrame>
            </div>
            <div className="flex flex-row items-center bg-black py-1">
                <BodyFrame>
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-white text-sm">
                            <p>© 2022 Coral , Inc.</p>
                        </div>

                        <div>
                            <div>
                                <img src={Payment.src} alt="" />
                            </div>
                        </div>

                        <div>
                            <button onClick={scrollToTop} className=" text-white text-sm flex flex-row items-center justify-center border-none 
                                border-0 outline-0 outline-none rounded-sm py-2 
                                        px-2 bg-black hover:bg-white hover:text-black hover:transition-all">
                                Scroll to top
                                <span className="ml-1.5 animate-bounce "><BsArrowUp /></span>
                            </button>
                        </div>
                    </div>
                </BodyFrame>
                
            </div>
        </div>
    )
}

export default Footer
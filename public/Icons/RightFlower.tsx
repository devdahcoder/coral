import React from 'react'

const RightFlower = (props: {
    className?: string;
    width?: string;
    height?: string;
}) => {

    const className = props.className ?? '';
    const width = props?.width ?? '120';
    const height = props?.height ?? '125';

    return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1_319)">
            <path d="M-27.342 66.1843C-18.6832 63.1495 -10.0176 60.2215 -1.50068 56.7983C6.87824 53.4066 14.8716 49.1348 22.3467 44.0537C36.5745 34.3453 49.1606 22.1262 64.6828 14.3265C72.4207 10.2329 80.9651 7.88675 89.7212 7.45135C89.8647 7.46152 90.0017 7.51627 90.1132 7.60806C90.2246 7.69984 90.3051 7.82408 90.3432 7.96342C90.3814 8.10276 90.3753 8.25026 90.3259 8.38545C90.2766 8.52064 90.1863 8.63675 90.0678 8.71762L67.4359 19.5708C59.8931 23.2063 52.5112 27.0256 44.8792 30.6019C43.8079 31.2204 42.769 29.4685 43.9088 28.9211C51.4397 25.2648 59.0971 21.9228 66.7051 18.305L89.3969 7.55561C89.6006 7.90836 89.6188 8.36817 89.7314 8.80115C73.0151 9.15613 58.5027 18.7523 46.0616 29.0339C39.2022 34.7095 32.5483 40.5985 25.307 45.803C18.0929 50.9003 10.3205 55.1557 2.13906 58.4873C-7.30567 62.2965 -16.9677 65.5468 -26.7975 68.2217C-28.0452 68.5823 -28.5178 66.6695 -27.3061 66.2466L-27.342 66.1843Z" fill="black" fillOpacity="0.08"/>
            <path d="M-25.6704 65.6067C-11.4788 63.6384 0.52577 53.8854 15.2949 54.8206C22.4401 55.5565 29.471 57.1854 36.2243 59.6694C43.3151 62.0077 50.2674 64.7559 57.0461 67.9003C64.6577 71.5093 72.0614 75.5484 79.2214 79.9979C79.3888 80.0993 79.5195 80.2521 79.5939 80.4335C79.6684 80.6149 79.6826 80.8152 79.6346 81.0046C79.5865 81.194 79.4786 81.3624 79.3271 81.4847C79.1756 81.6071 78.9885 81.6768 78.7936 81.6835C71.2078 81.5811 63.416 81.5976 56.6071 77.8926C49.7981 74.1876 44.8802 67.6201 38.0885 63.8498C37.905 63.7466 37.7696 63.5747 37.7118 63.372C37.654 63.1693 37.6786 62.9524 37.7804 62.7689C37.8821 62.5854 38.0525 62.4505 38.2541 62.3937C38.4557 62.337 38.672 62.3631 38.8555 62.4663C45.3712 66.0916 50.5703 71.5284 56.9657 75.2785C63.3611 79.0286 71.327 79.7416 78.8749 79.9212C78.7283 80.4762 78.5612 81.0431 78.4266 81.6188C72.1918 77.8481 65.7294 74.4732 59.0775 71.5139C52.329 68.4028 45.4107 65.6813 38.3568 63.3629C31.6362 60.9381 24.7081 59.1488 17.6631 58.0184C10.6768 57.2433 3.61727 58.1426 -2.93496 60.6423C-10.291 63.174 -17.5316 66.5242 -25.391 66.9948C-26.1561 67.0492 -26.3431 65.7738 -25.5813 65.666L-25.6704 65.6067Z" fill="black" fillOpacity="0.08"/>
            <path d="M7.16727 54.5883C13.4135 56.3179 19.7803 57.563 26.2111 58.3123C32.1795 58.8544 38.1901 58.395 43.9958 56.9531C54.7711 54.3011 64.7861 49.2382 75.5341 46.4913C81.3758 44.8707 87.4863 44.4268 93.5143 45.1852L93.0281 46.96C77.4771 42.79 60.9797 44.4452 46.6278 51.6155C42.5519 53.6399 38.7319 56.1426 35.2473 59.0713C35.1344 59.1911 34.9968 59.2849 34.8441 59.3461C34.6913 59.4074 34.5269 59.4347 34.3622 59.4261C34.1975 59.4176 34.0364 59.3734 33.8899 59.2967C33.7433 59.22 33.6148 59.1125 33.5132 58.9816C33.4116 58.8507 33.3393 58.6994 33.3011 58.5382C33.263 58.377 33.26 58.2097 33.2923 58.0476C33.3246 57.8856 33.3914 57.7327 33.4883 57.5994C33.5851 57.4661 33.7096 57.3556 33.8533 57.2754C46.9337 47.1915 63.1791 42.1055 79.7076 42.9197C84.3587 43.1726 88.9738 43.911 93.4783 45.123C94.6513 45.4418 94.1345 47.0682 92.9922 46.8977C81.7149 45.3021 70.821 49.4614 60.478 53.3855C50.1351 57.3096 39.2004 61.1604 27.7062 60.1881C20.6199 59.3723 13.6161 57.9254 6.77782 55.8645C5.91007 55.6461 6.26358 54.3077 7.13133 54.526L7.16727 54.5883Z" fill="black" fillOpacity="0.08"/>
            <path d="M-26.7484 66.1184C-21.8031 64.824 -16.6233 64.671 -11.5965 65.6706C-6.34074 66.5569 -1.16741 67.8928 3.86674 69.6635C15.2405 73.4721 26.8048 77.0875 37.8049 81.9142C43.6264 84.2785 49.0962 87.4433 54.0568 91.3172C54.6189 91.7674 53.8355 92.5516 53.294 92.0896C48.8883 88.6604 44.0183 85.8815 38.8333 83.8381C33.6828 81.721 28.2861 80.2717 23.0169 78.4722L5.87506 72.5711C1.0724 70.8519 -3.82641 69.4211 -8.79523 68.2863C-11.6597 67.6455 -14.574 67.2632 -17.5032 67.1442C-20.4153 67.1316 -23.3217 67.3658 -26.1915 67.8443C-26.4052 67.8751 -26.6233 67.8259 -26.8042 67.7062C-26.9852 67.5865 -27.1165 67.4046 -27.1731 67.1949C-27.2298 66.9853 -27.2078 66.7625 -27.1115 66.5689C-27.0152 66.3754 -26.8512 66.2245 -26.6506 66.1449L-26.7484 66.1184Z" fill="black" fillOpacity="0.08"/>
            </g>
            <defs>
            <clipPath id="clip0_1_319">
            <rect width="132.34" height="66.6102" fill="white" transform="matrix(-0.866025 0.5 0.5 0.866025 86.164 0.624023)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default RightFlower;
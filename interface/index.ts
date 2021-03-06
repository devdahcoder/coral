export interface SubHeaderLinks {
    id: number;
    text: string;
    hrefLink?: string;
}

export interface NewProductHeaderLink {
    id: number;
    label: string;
}

export interface NewProductItem {
    id: number;
    title: string;
    category: string;
    price: string;
    oldPrice?: string;
    imageLink: string;
    banner?: string;
}

export interface PopularCollection {
    id: number;
    imageLink: string;
    title: string;
    amount: number;
    className: string;
}

export interface InstagramPost {
    id: number;
    imageLink: string;
}

export interface FooterNav {
    id: number;
    link: string;
    text: string;
}
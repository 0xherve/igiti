import { facebook, instagram, support, truckFast, twitter } from "../assets/icons";
import { kids, adults, hubert, paula, brandi, green, enock, obed, adultPuzzle, kidsPuzzle} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const puzzles = [
    {
        thumbnail: kids,
        bigShoe: kids,
    },
    {
        thumbnail: adults,
        bigShoe: adults,
    },
];


export const products = [
    {
        imgURL: kidsPuzzle,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: adultPuzzle,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Partner with Us",
        subtext: "Partner with us to bring engaging and culturally relevant education. Enjoy  bulk order discounts, and custom options. Let's work together to spread African culture through entertaining education."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way. Get expert assistance for all your questions and concerns"
    },
];

export const team = [
    {
        index:0,
        imgURL: hubert,
        name: 'Habiyambere Muhire Hubert',
        role: 'Managing Director',
        },
    {
        index:1,
        imgURL: paula,
        name: 'Paula Brooks Aziz',
        role: 'Chairperson',
        },
        {
            index: 2,
            imgURL: enock,
            name: 'Akimana Enock',
            role: 'Finance and Marketing Director',
            },
    {
        index: 3,
        imgURL: brandi,
        name: 'Brandi McLellan Brooks',
        role: 'Internatinal Distribution Director',
        },
        {
            index: 4,
            imgURL: green,
            name: 'Edris Christine Green',
            role: 'US Marketing Director',
            },
        {
            index: 5,
            imgURL: obed,
            name: 'Munyakuri Obed',
            role: 'Product Development Director',
            },
            

];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com"},
            { name: "+92554862354"},
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
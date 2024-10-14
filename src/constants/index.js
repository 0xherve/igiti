import { facebook, instagram, support, truckFast, twitter } from "../assets/icons";
import { kids, adults, hubert, paula, brandi, green, enock, obed, adultPuzzle, kidsPuzzle} from "../assets/images";

export const navLinks = [
    { href: "hero", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "products", label: "Products" },
    { href: "contact", label: "Contact Us" },
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
        name: "Kids Puzzle",
        price: "$29.99",
    },
    {
        imgURL: adultPuzzle,
        name: "Adult Puzzle",
        price: "$39.99",
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
        title: "Help",
        links: [
            { name: "About us", link: "about-us" },
            { name: "Conatct Us", link: "contact" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            // { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "Adults Puzzle", link: "#products" },
            { name: "Kids Puzzle", link: "#products" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "hub.init.business@gmail.com"},
            { name: "+250788444011"},
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link:'/'},
    { src: twitter, alt: "twitter logo", link:'/' },
    { src: instagram, alt: "instagram logo", link:'/' },
];
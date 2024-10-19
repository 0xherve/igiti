import { tiktok, instagram, support, truckFast, twitter } from "../assets/icons";
import { kids, adults, hubert, paula, brandi, green, enock, obed, adultPuzzle, kidsPuzzle} from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
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
    // {
    //     title: "Sections",
    //     links: [
    //         { name: "Home", link: "hero" },
    //         { name: "Popular Products", link: "products" },
    //         { name: "Our Team", link: "/" },
    //         { name: "CustomerReviews", link: "review" },

    //     ],
    // },
    {
        title: "Help",
        links: [
            // { name: "About us", link: "/#about-us" },
            { name: "Home", link: "/" },
            { name: "Contact Us", link: "/contact" },
            { name: "Return Policy", link: "/return-policy" },
            // { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@igitienterprises.com"},
            { name: "+250788444011"},
        ],
    },
];

export const socialMedia = [
    { src: tiktok, alt: "tiktok logo", link:'https://www.tiktok.com/@igitienterprises?is_from_webapp=1&sender_device=pc'},
    { src: twitter, alt: "twitter logo", link:'https://x.com/Igiti_puzzles' },
    { src: instagram, alt: "instagram logo", link:'https://www.instagram.com/igiti_enterprises/' },
];

export const reviews = [
    {
        imgURL: hubert,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: green,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const faq = [
    {
        index: 0 ,
        question: ' What does Igiti Enterprise do?',
        answer: ' The answer goes here.....',
    },
    {
        index: 1 ,
        question: 'Who are our games made for?',
        answer: 'The answer goes here.....',
    },
    {
        index: 2 ,
        question: 'What are the benefits of our games?',
        answer: 'The answer goes here.....',
    },
    {
        index: 3 ,
        question: 'How can I get your products?',
        answer: 'The answer goes here.....',
    },
    {
        index: 4 ,
        question: 'Who do we work with?',
        answer: 'The answer goes here.....',
    },
    {
        index: 5 ,
        question: "What is our vision for the future? ",
        answer: 'The answer goes here.....',
    },
]


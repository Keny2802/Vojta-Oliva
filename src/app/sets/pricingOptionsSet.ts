import {
    pricingOptionsProps
} from "../types/pricingOptionsProps";

const pricingOptionsSet:pricingOptionsProps[] = [
    // {
    //     name: "Napojení API",
    //     price: 500,
    //     description: "API integrace třetích stran, jako Meta Pixel a další.",
    //     howLongItTakes: ""
    // },
    {
        name: "Filtrování produktů",
        price: 500,
        description: "Filtrování produktů, podle cen, názvu, oblíbenosti.",
        howLongItTakes: 2
    },
    {
        name: "Kontaktní Formulář",
        price: 1000,
        description: "Kontaktní formulář pro na následující kontakt klienta.",
        howLongItTakes: 2.5
    },
    {
        name: "Vlastní kalendář",
        price: 1500,
        description: "Vytvoření vlastního kalendáře na míru.",
        howLongItTakes: 4
    },
    {
        name: "Vlastní AI chatbot",
        price: 3000,
        description: "Vlastní AI chatbot, který Vaším klientům bude pomáhat s jejich problémy.",
        howLongItTakes: 6
    },
    {
        name: "Vlastní AI Assistent",
        price: 5000,
        description: "Vlastní AI assistent, který nejen s Vámi chatuje, ale dělá změny i na webu, cokoliv co mu řeknete, on tu změnu na webu udělá a ještě více.",
        howLongItTakes: 10
    },
    {
        name: "Chat bez AI",
        price: 2500,
        description: "Chat, kde Vám klienti píši a Vy jím sami odpovídate.",
        howLongItTakes: 6
    },
    {
        name: "Vlastní admin panel",
        price: 5000,
        description: "Služba vlastní admin panel obsahuje, že můžete přidávat obsah, upravovat si admin panel jak se Vám zlíbí, bez zásahu programátora.",
        howLongItTakes: ""
    },
    {
        // Registrace & Login + Účet
        name: "Profile Pack",
        price: 4500,
        description: "Tato služba obsahuje vlastní registrační a přihlašovací formulář a vlastní účty Vašich uživatelů.",
        howLongItTakes: 10
    },
];

export default pricingOptionsSet;
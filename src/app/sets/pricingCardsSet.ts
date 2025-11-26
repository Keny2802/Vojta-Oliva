import {
    pricingCardsProps
} from "../types/pricingCardsProps";

const pricingCardsSet:pricingCardsProps[] = [
    {
        cardLabel: "Pro ty co spěchají",
        cardHeading: "Landing page",
        cardPrice: 4500,
        cardSubheading: "Landing page, jednostránkový web pro vaší prezentaci.",
        cardIncludingSet: [
            "Jednostránkový web (hero, služby, ceník, kontakt), max 10 sekcí.",
            "2 Návrhy pro váš web.",
            "Stálá komunikace s klientem.",
            "Průběžné podávání informací o stavu projektu.",
            "Dodání do 7 dnů."
        ]
    },
    {
        cardLabel: "Nejlepší",
        cardHeading: "Kompletní web",
        cardPrice: 6000,
        cardSubheading: "Webová prezentace s 10 podstránkami.",
        cardIncludingSet: [
            "Kompletní webová stránka na míru.",
            "Až 10 podstránek.",
            "Vlastní funkce na míru.",
            "Stálá komunikace s klientem.",
            "Průběžné podávání informací o stavu projektu.",
            "Dodání do 14 dnů nebo podle domluvy."
        ]
    },
    {
        cardLabel: "Novinka",
        cardHeading: "Správa webu",
        cardPrice: 2000,
        cardSubheading: "Údržba a pravidelná aktualizace webu.",
        cardIncludingSet: [
            "Četnost aktualizací webu, podle přání klienta.",
            "Pravidelné zálohy webu.",
            "Úpravy webu a přidávání obsahu.",
            "Stálá komunikace s klientem o úpravách či změnách na webu."
        ]
    }
];

export default pricingCardsSet;
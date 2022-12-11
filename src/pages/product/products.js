import hoodieS from "../../assets/images/product/hoodie-small.jpg"
import hoodieB from "../../assets/images/product/hoodie-big.jpg"
import tshirtSf from "../../assets/images/product/tshirt-small-front.jpg"
import tshirtBf from "../../assets/images/product/tshirt-big-front.jpg"
import tshirtSb from "../../assets/images/product/tshirt-small-back.jpg"
import tshirtBb from "../../assets/images/product/tshirt-big-back.jpg"
import hatS1 from "../../assets/images/product/hat-small-1.jpg"
import hatS2 from "../../assets/images/product/hat-small-back.jpg"
import hatS3 from "../../assets/images/product/hat-small-front.jpg"
import hatB1 from "../../assets/images/product/hat-big-1.jpg"
import hatB2 from "../../assets/images/product/hat-big-back.jpg"
import hatB3 from "../../assets/images/product/hat-big-front.jpg"
import mugS from "../../assets/images/product/mug-small.jpg"
import mugB from "../../assets/images/product/mug-big.jpg"
import lampS1 from "../../assets/images/product/lamp-small-1.jpg"
import lampS2 from "../../assets/images/product/lamp-small-2.jpg"
import lampS3 from "../../assets/images/product/lamp-small-3.jpg"
import lampB1 from "../../assets/images/product/lamp-big-1.jpg"
import lampB2 from "../../assets/images/product/lamp-big-2.jpg"
import lampB3 from "../../assets/images/product/lamp-big-3.jpg"
import beanieS from "../../assets/images/product/beanie-small.jpg"
import beanieB from "../../assets/images/product/beanie-big.jpg"
import pslampS from "../../assets/images/product/pslamp-small.jpg"
import pslampB from "../../assets/images/product/pslamp-big.jpg"
import prideS1 from "../../assets/images/product/pride-small-1.jpg"
import prideS2 from "../../assets/images/product/pride-small-2.jpg"
import prideB1 from "../../assets/images/product/pride-big-1.jpg"
import prideB2 from "../../assets/images/product/pride-big-2.jpg"



export const products= { 
    hoodie : {
        name: "hoodie",
        title: "Felpa con cappuccio e zip PlayStation Heritage",
        price: "70,00€",
        priceN: 70,
        number: 1530159,
        hasSize: true,
        details: {
            title: "Inoltre, celebra l'eredità di PlayStation è questa nuova felpa con cappuccio con zip Heritage PlayStation che aggiunge comfort quando si indossa a strati.",
            one: "",
            two: "",
            three: "",
        },
        img: {
            small1: hoodieS,
            small2: "",
            small3: "",
            big1: hoodieB,
            big2: "",
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1530159_b.jpg?v=637728811603240150"
        },
        options : [
            {value: "S adulto", available: true},
            {value: "M adulto", available: true},
            {value: "L adulto", available: true},
            {value: "XL adulto", available: true},
            {value: "2XL adulto", available: true},
        ]
    },

    tshirt : {
        name: "tshirt",
        title: "Maglietta PlayStation ™",
        price: "25,00€",
        priceN: 25,
        number: 1525126,
        hasSize: true,
        details: {
            title: "La maglietta classica, comoda, per tutti i giorni.",
            one: "Caratteristiche: tessuto morbido, lavato e tinto in capo",
            two: "Loghi serigrafati",
            three: "Grigia"
        },
        img: {
            small1: tshirtSf,
            small2: tshirtSb,
            small3: "",
            big1: tshirtBf,
            big2: tshirtBb,
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1525126_b.jpg?v=637563679892785443"
        },
        options : [
            {value: "S adulto", available: true},
            {value: "M adulto", available: true},
            {value: "L adulto", available: true},
            {value: "XL adulto", available: true},
            {value: "2XL adulto", available: true},
        ]
    },

    hat : {
        name: "hat",
        title: "Cappello di marca PlayStation ™ 47",
        price: "25,00€",
        priceN: 25,
        number: 1525129,
        hasSize: false,
        details: {
            title: "Nuovo ed essenziale accessorio per la primavera!",
            one: "Caratteristiche visiera pre-curvata, non strutturato, profilo basso",
            two: "Logo ricamato",
            three: "Bianco"
        },
        img: {
            small1: hatS1,
            small2: hatS2,
            small3: hatS3,
            big1: hatB1,
            big2: hatB2,
            big3: hatB3,
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1525129_b.jpg?v=637588578004590116"
        },
    },

    mug : {
        name: "mug",
        title: "Tazza PlayStation Heritage",
        price: "20,00€",
        priceN: 20,
        number: 1530165,
        hasSize: false,
        details: {
            title: "Non c'è niente di meglio che svegliarsi in quelle fredde mattine d'inverno, mettersi comodi sul divano e sorseggiare una bella tazza di caffè caldo o una cioccolata calda. Questa tazza PlayStation Heritage è perfetta per quelle mattine. Formato: 355 ml",
            one: "",
            two: "",
            three: ""
        },
        img: {
            small1: mugS,
            small2: "",
            small3: "",
            big1: mugB,
            big2: "",
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1530165_b.jpg?v=637728811367300270"
        },
    },
    lamp : {
        name: "lamp",
        title: "Lampada con icone PlayStation™",
        price: "30,00€",
        priceN: 30,
        number: 1521905,
        hasSize: false,
        details: {
            title: "Perfetta per i gamer. Su questa lampada con icone PlayStation™ sono raffigurati i simboli della PlayStation™ su una stupenda base nera. Un pezzo d’arredamento ideale per tutte le camerette o stanze da gioco. Lampada a batteria o USB (cavo USB incluso; 3 batterie AAA non incluse).",
            one: "Larga 30 cm e alta 10 cm.",
            two: "Sono disponibili tre impostazioni: illuminazione standard, variabile a colori e modalità reattiva alla musica.",
            three: ""
        },
        img: {
            small1: lampS1,
            small2: lampS2,
            small3: lampS3,
            big1: lampB1,
            big2: lampB2,
            big3: lampB3,
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1521905_b.jpg?v=637401307840238997"
        },
    },
    beanie : {
        name: "beanie",
        title: "Berretto PlayStation Heritage",
        price: "25,00€",
        priceN: 25,
        number: 1530160,
        hasSize: false,
        details: {
            title: "Questo berretto PlayStation Heritage di Stormtech presenta il nostro logo PlayStation originale e il logo Katakana ricamati sul davanti, così puoi tenere la testa al caldo mentre mostri a tutti il tuo amore per PlayStation con stile!",
            one: "",
            two: "",
            three: ""
        },
        img: {
            small1: beanieS,
            small2: "",
            small3: "",
            big1: beanieB,
            big2: "",
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1530160_b.jpg?v=637753537541703220"
        },
    },
    pslamp : {
        name: "pslamp",
        title: "Lampada con logo della PlayStation™",
        price: "43,20€",
        priceN: 43.20,
        number: 1533020,
        hasSize: false,
        details: {
            title: "È arrivata la decorazione perfetta per ogni fan della PlayStation™! Questa lampada da 20cm a forma di logo della PlayStation™ è completamente montabile a parete, ma può anche essere appoggiata su qualsiasi superficie grazie al supporto incluso. Inoltre, la luce ha 3 modalità di illuminazione: modulazione del colore, scelta del colore ed è reattiva alla musica! Alimentazione a batteria o micro-USB (richiede 3 batterie AAA; batterie e micro-USB non incluse)",
            one: "",
            two: "",
            three: ""
        },
        img: {
            small1: pslampS,
            small2: "",
            small3: "",
            big1: pslampB,
            big2: "",
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1533020_b.jpg?v=637946193544295380"
        },
    },
    pride : {
        name: "pride",
        title: "PlayStation™ Pride 2022 T-Shirt",
        price: "34,99€",
        priceN: 34.99,
        number: 1533557,
        hasSize: true,
        details: {
            title: "Fatti sentire e sii orgoglioso con questa elegante maglietta Pride realizzata dal gruppo di dipendenti Pride @ PlayStation. Questa maglietta riporta il motto \"We Say Play\" del 2022 e il nuovo logo aggiornato con l\'intero set di colori della bandiera del Progress Pride.",
            one: "",
            two: "",
            three: ""
        },
        img: {
            small1: prideS1,
            small2: prideS2,
            small3: "",
            big1: prideB1,
            big2: prideB2,
            big3: "",
            web: "https://c.bdac.co/bdac/PLAYSTATIONEU/ProductImages/1533557_b.jpg?v=637898980553108420"
        },
        options : [
            {value: "S adulto", available: true},
            {value: "M adulto", available: true},
            {value: "L adulto", available: true},
            {value: "XL adulto", available: true},
            {value: "2XL adulto", available: true},
        ]
    },
}
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
        }
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
        }
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
        }
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
        }
    }
}
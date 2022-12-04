import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  it: {
    translation: {
        //NAVBAR MOBILE
        "sign-in":"Accedi",
        "games":"Giochi",
        "hardware":"Hardware",
        "service":"Servizi",
        "new":"Novità",
        "shopping":"Fai acquisti",
        "supports":"Supporto",
        "search":"Cerca",
        //NAVBAR DROPDOWN
        "indie":"Indie",
        "titoli":"Titoli per PS4 su PS5",
        "pc":"PlayStation su PC",
        "promo":"Promozioni e offerte",
        "buy-games":"Compra giochi",
        "controller1":"Controller wireless DualSense",
        "headphones":"Cuffie wireless con microfono Pulse 3D",
        "controller2":"Controller wireless DUALSHOCK 4",
        "acc-ps":"Accessori per PS5 e PS4",
        "entertaiment1":"Intrattenimento per PS5",
        "entertaiment2":"Intrattenimento per PS4",
        "this-month":"Questo mese su PlayStation",
        "access":"Accessibilità",
        "privacy":"Privacy e sicurezza",
        "latest":"Ultime uscite",
        "new-sales":"Nuovi sconti",
        "raccolte":"Raccolte",
        "buy-card":"Acquista carta regalo",
        "subscribe":"Abbonamento a PS Plus",
        "support2":"Supposto",
        "state":"Stato del PSN",
        "store":"Acquisti",
        "subscriptions":"Abbonamenti",
        "games2":"Giochi",
        //HERO 
        "hero-title1":"Benvenuto nella nuova era",
        "content1":"Prova un'esperienza da VIP con l'Edizione Cassaforte",
        "buy-now":"Acquista ora",
        "hero-title2":"La saga norrena continua",
        "content2":"Avventurati in un viaggio epico ed emozionante: accompagna Kratos e Atreus nella loro lotta all'insegna del resistere e del lasciarsi andare, disponibile dal 9 novembre su PS4 e PS5",
        "pre-order":"Pre-ordina ora",
        "hero-title3":"Volteggia e grinda sopra le nuvole",
        "content3":"Cavalca i venti verso la perduta metropoli dello skate in cielo,   Radlandia, in questa nuova espansione del famoso gioco di piattaforme d'azione,  disponibile ora su PS4 e PS5",
        "more-info":"Maggiori informazioni",
        "hero-title4":"Apex Legends: Eclissi",
        "content4":"Raggiungi la vittoria sfruttando le teleferiche nella nuova mappa Luna distrutta e sfodera la tua forza interiore con la nuova leggenda Catalyst",
        "play-now":"Gioca ora gratuitamente",
        "hero-title5":"L'Akasha batte, la fiamma del kalpa sorge",
        "content5":"Combatti per il futuro di Sumeru e incontra Nahida come personaggio giocabile nell'ultimo aggiornamento dell'acclamato GDR d'avventura a mondo aperto",
        //PS5 HERO & SLIDER
        "ps5-1":"Console PlayStation 5",
        "description1":"Scopri una nuovissima generazione di incredibili giochi PlayStation",
        "ps5-2":"Controller wireless DualSense™",
        "description2":"Immergiti nell'esperienza di gioco con un controller che supporta il feedback aptico reattivo e gli effetti del grilletto dinamico.",
        "ps5-3":"Cuffie wireless con microfono PULSE 3D™",
        "description3":"Goditi un'esperienza wireless perfetta con un paio di cuffie con microfono ottimizzate per l'audio 3D della console PS5.",
        "ps5-4":"Telecomando Media",
        "description4":"Controlla facilmente film, servizi di streaming e altro ancora sulla tua console PS5 grazie a un'interfaccia intuitiva.",
        "ps5-5":"Telecamera HD",
        "description5":"Partecipa in prima persona alle tue trasmissioni e ai video della tua azione di gioco grazie alla nitidissima acquisizione di immagini Full HD.",
        "ps5-6":"PS5 Covers Console",
        "description6":"Personalizza la tua console PlayStation 5 o PlayStation 5 Digital Edition con una vivace gamma di nuove opzioni di colore.",
        //EXPLORE PLAY
        "title-explore":"Esplora PlayStation®4",
        "sub-explore":"Giochi incredibili e intrattenimento senza fine. Non c'è mai stato un momento migliore per giocare sulla tua PS4.",
        "sub1":"Giochi incredibili live su PS4, con 1 TB di spazio di archiviazione.",
        "btn-explore":"Scopri di più",
        "sub2":"Oltre 500 titoli ed esperienze di gioco. Scoprili tutti.",
        "accessories":"Accessori",
        "sub3":"Migliora la tua esperienza PS4 con una gamma di accessori ufficiali.",
        // SALES PLAY
        "title-sales":"Nuovi risparmi sul PlayStation Store",
        "sub-sales":"Esplora gli ultimi sconti e le offerte stagionali su giochi grandiosi e contenuti aggiuntivi per PS4 e PS5.",
        "btn-block":"Vedi tutte le offerte",
        //STRAY
        "title-stray":"Fuggi dalla città",
        "sub-stray":"Svela antichi misteri e trova la strada di casa in questa avventura felina unica, disponibile ora per PS5.",
        "btn-stray":"Maggiori Informazioni",
        //SLIDE HOMEPAGE CARDS
        "title-slider":"Nuove uscite",
        "sub-slider":"Giochi incredibili per PS4 e PS5 disponibili ora",
        "title-slider2":"In arrivo",
        "sub-slider2":"Nuove entusiasmanti esperienze sono appena dietro l'angolo",
        //THIS MONTH
        "title-thisMonth":"QUESTO MESE",
        "sub-thisMonth":"SU PLAYSTATION",
        "subText-thisMonth":"Scopri le più grandi uscite di questo mese con contenuti speciali, guide e molto altro ancora.",
        "btn-info":"Maggiori Informazioni",
        "first-card":"I migliori giochi battle royale per PS5 e PS4",
        "first-banner":"I migliori giochi battle royale per PS5 e PS4",
        "second-banner":"20 imperdibili gioiellini su PS Plus Extra",
        "third-banner":"Riscopri alcuni arcade classici su PS4 e PS5",
        //STORE SECTION
        "store-title":"Abbigliamento e merchandise su licenza ufficiale di PlayStation",
        "sub-title":"Visita il negozio PlayStation Gear per accessori ufficiali, oggetti collezionabili, abbigliamento e molto altro ancora",
        "acquista":"Acquista Ora",
        "collection":"Acquista la collezione",
        "product1":"Felpa con zip Heritage PlayStation™",
        "product2":"Maglietta logo PlayStation",
        "product3":"Cappello di marca PlayStation ™ 47",
        "product4":"Tazza Heritage PlayStation™",
        //CARDS CAROUSEL
        "banner-title1":"Celebriamo i 20 anni di Ratchet & Clank",
        "banner-content1":"Ratchet & Clank festeggia oggi vent'anni! Qualcuno ha per caso armeggiato con il Grande Orologio?! Già, incredibile a dirsi, ma è tutto vero!",
        "banner-title2":"Gioca la FIFA World Cup 2022™ in FIFA 23 dal 9 novembre",
        "banner-content2":"È di nuovo quel momento. Il mondo sta per riunirsi per celebrare l’appuntamento calcistico più importante del pianeta e quale modo migliore per seguire questo evento che viverlo in prima persona? La FIFA World Cup 2022™ sarà giocabile in FIFA 23 senza alcun costo aggiuntivo, con tutta la passione, l’entusiasmo e l’autenticità della competizione reale",
        "banner-title3":"Dare vita ai personaggi di Sonic Frontiers",
        "banner-content3":"Preparatevi a esplorare nuove frontiere e a sperimentare Sonic the Hedgehog come mai prima d’ora in Sonic Frontiers! Il gioco di piattaforme action-adventure ad aree aperte di Sonic esce l’8 novembre e sancisce un enorme salto in avanti nel futuro dei giochi d’azione 3D di Sonic.",
        "banner-title4":"Come funziona il combattimento di Forspoken e perché ha un aspetto così magico",
        "banner-content4":"Ciao a tutti, mi chiamo Ryota Nozoe, artista capo per gli effetti grafici di Forspoken. In questo nuovo e ampio gioco di ruolo vestirete i panni di Frey Holland, una giovane donna che viene trasportata nel misterioso mondo di Athia!",
        "banner-title5":"Shuhei Yoshida consiglia 10 titoli dal catalogo dei classici di PlayStation Plus Premium ",
        "banner-content5":"Con centinaia di titoli disponibili su PlayStation Plus Premium, la scelta potrebbe essere difficile.",
        "banner-description5":"Responsabile di PlayStation Indies, SIE",
        "banner-title6":"Players’ Choice: Vota per il miglior nuovo gioco di ottobre 2022",
        "banner-content6":"Tempo di mettere via le zucche dato che ottobre è venuto e andato via portando con sé dei giochi fantastici! Quale nuova uscita conquisterà la corona del Players’ Choice? Votate nel sondaggio qui sotto per contribuire alla scelta!",
        "banner-description6":"Vicepresidente, Network Advertising, Loyalty & Licensed Merchandise",
        "banner-title7":"11 nuovi giochi annunciati per PS VR2: The Dark Pictures: Switchback, Crossfire: Sierra Squad, Cities VR – Enhanced Edition e molti altri",
        "banner-content7":"Finora avevamo presentato solo alcuni dei giochi in arrivo su PS VR2 il prossimo anno, come Horizon Call of the Mountain, Resident Evil Village e tanti altri. Ma ci sono ancora molti titoli di cui parlare.",
        "banner-description7":"Sceneggiatore e produttore da Coin Crew Games",
        "banner-title8":"PlayStation VR2 sarà disponibile a febbraio a €599.99",
        "banner-content8":"Negli ultimi mesi abbiamo presentato PlayStation VR2 e abbiamo dato un’occhiata alla prossima generazione di giochi in realtà virtuale, che ti permetterà di tuffarti in nuovi mondi e di provare un senso di coinvolgimento rivoluzionario.",
        "banner-title9":"Il nuovo video di God of War Ragnarök mostra come tutti i genitori possono immedesimarsi nel gioco",
        "banner-content9":"A poco più di una settimana dall’attesissima uscita di God of War Ragnarök, Kratos e Atreus continuano il loro viaggio...",
        "banner-description9":"Sceneggiatore Omaewa Moui Shindeiru",
        "banner-title10":"Intervista Final Fantasy XVI: ambientazione, prospettive diverse e personaggi preferiti",
        "banner-content10":"La scorsa settimana, il produttore Naoki Yoshida e il direttore Hiroshi Takai hanno parlato del nuovo trailer di Final Fantasy XVI, intitolato Ambition. In quel post di PS Blog hanno accennato brevemente al background del gioco, oltre a fornire ulteriori dettagli sui due nuovi personaggi svelati.",
        //SOCIAL MEDIA
        "follow":"Seguici sui social media",
        //FOOTER HOMEPAGE
        "website":"Website ©2022 Sony Interactive Entertainment Europe Limited. Tutti i contenuti, nomi dei giochi, nomi commerciali e/o di abbigliamento, marchi registrati, grafica e immagini associati sono marchi registrati e/o materiale protetto da copyright dei rispettivi proprietari. Tutti i diritti riservati. ",
        "more-info":"Maggiori info",
        "support":"Supporto",
        "terms":"Termini di utilizzo del sito Web",
        "privacy":"Informativa sulla privacy e sui cookie",
        "legals":"Termini legali",
        "about":"Chi siamo",
        "enviroment":"PlayStation e l'ambiente",
        "psn":"Termini di servizio di PSN",
        "terms-unsub":"Termini di annullamento del PS Store",
        "health-warn":"Avvertenze per la salute",
        "class-age":"Classificazioni per età",
        "terms-software":"Termini d'uso del Software",
        "work-play":"Lavora con PlayStation",
        "website-map":"Mappa del sito",
    }
  },
  en: {
    translation: {
      //NAVBAR
      "sign-in":"Sign In",
      "games":"Games",
      "hardware":"Hardware",
      "service":"Services",
      "new":"News",
      "shopping":"Shop",
      "supports":"Support",
      "search":"Search",
       //NAVBAR DROPDOWN
       "indie":"PlayStation Indies",
       "titoli":"PS4 games on PS5",
       "pc":"PlayStation games on PC",
       "promo":"Deals & offers",
       "buy-games":"Buy games",
       "controller1":"DualSense wireless controller",
       "headphones":"PULSE 3D wireless headset",
       "controller2":"DUALSHOCK 4 wireless controller",
       "acc-ps":"PS5 & PS4 accessories",
       "entertaiment1":"PS5 entertainment",
       "entertaiment2":"PS4 entertainment",
       "this-month":"This Month on PlayStation",
       "access":"Accessibility",
       "privacy":"Privacy & Safety",
       "latest":"New releases",
       "new-sales":"Latest discounts",
       "raccolte":"Collections",
       "buy-card":"Buy gift card",
       "subscribe":"Subscribe to PS Plus",
       "support2":"Support",
        "state":"PSN Status",
        "store":"Store",
        "subscriptions":"Subscriptions",
        "games2":"Games",
        //HERO 
        "hero-title1":"Welcome to the new era",
        "content1":"Try a VIP experience with the Safe Edition",
        "buy-now":"Buy now",
        "hero-title2":"The Norse saga continues",
        "content2":"Embark on an epic and emotional journey: join Kratos and Atreus in their fight to resist and let go, available November 9th on PS4 and PS5",
        "pre-order":"Pre-order now",
        "hero-title3":"Spin and grind above the clouds",
        "content3":"Ride the winds to the lost sky-skate metropolis Radlandia in this new expansion to the hit action-platformer, out now on PS4 and PS5",
        "more-info":"More info",
        "hero-title4":"Apex Legends: Eclipse",
        "content4":"Achieve victory using zip lines in the new map Shattered Moon and unleash your inner strength with the new legend Catalyst",
        "play-now":"Play now",
        "hero-title5":"The Akash beats, the kalpa flame arises",
        "content5":"Fight for the future of Sumeru and meet Nahida as a playable character in the latest update of the acclaimed open world adventure RPG",
       //PS5 HERO & SLIDER
       "ps5-1":"PlayStation 5 Console",
       "description1":"Experience an all-new generation of incredible PlayStation games.",
       "ps5-2":"DualSense™ Wireless Controller",
       "description2":"Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.",
       "ps5-3":"PULSE 3D™ Wireless Headset",
       "description3":"Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.",
       "ps5-4":"Media Remote",
       "description4":"Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
       "ps5-5":"HD Camera",
       "description5":"Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.",
       "ps5-6":"PS5 Console Covers",
       "description6":"Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.",
        //EXPLORE PLAY
       "title-explore":"Explore PlayStation®4",
       "sub-explore":"Incredible games, non-stop entertainment. There's never been a better time to enjoy PS4.",
       "sub1":"Incredible games live on PS4, with 1TB storage.",
       "btn-explore":"Learn more",
       "sub2":"Over 500 games and experiences and counting. See them all.",
       "accessories":"Accessories",
       "sub3":"Enhance your PS4 experience with a range of official accessories.",
       // SALES PLAY 
      "title-sales":"New savings on PlayStation Store",
      "sub-sales":"Explore the latest discounts and seasonal sales on great games and add-ons for PS4 and PS5.",
      "btn-block":"See all deals",
      //STRAY
      "title-stray":"Flee the city",
      "sub-stray":"Unravel ancient mysteries and find your way home in this unique feline adventure, out now for PS5",
      "btn-stray":"Find Out More",
      //SLIDE HOMEPAGE CARDS
      "title-slider":"New releases",
      "sub-slider":"Great PS5 and PS4 games available now",
      "title-slider2":"Coming soon",
      "sub-slider2":"Amazing new experiences are just around the corner",
      //THIS MONTH
      "title-thisMonth":"THIS MONTH",
      "sub-thisMonth":"ON PLAYSTATION",
      "subText-thisMonth":"Check out this month's biggest releases along with dedicated features, guides and more.",
      "btn-info":"Find out more",
      "first-card":"The best battle royale game on PS4 and PS5",
      "first-banner":"The best battle royale games on PS4 and PS5",
      "second-banner":"20 unmissable hidden gems on PS Plus Extra",
      "third-banner":"Rediscover classic arcade games on PS4 and PS5",
      //STORE SECTION
      "store-title":"PlayStation official licensed apparel and merchandise",
      "sub-title":"Browse the PlayStation Gear store for official accessories, collectibles, clothing and more",
      "acquista":"Shop Now",
      "collection":"Shop the collection",
      "product1":"PlayStation™ Heritage Zip Up Hoodie",
      "product2":"PlayStation™ Logo Tee",
      "product3":"PlayStation™ 47 Brand Hat",
      "product4":"PlayStation™ Heritage Mug",
       //CARDS CAROUSEL
       "banner-title1":"We celebrate 20 years of Ratchet & Clank",
       "banner-content1":"Ratchet & Clank celebrates 20 years today! Has anyone tinkered with the Big Clock?! Yeah, incredible to say, but it's all true!",
       "banner-title2":"Play the FIFA World Cup 2022™ in FIFA 23 from November 9th",
       "banner-content2":"It's that time again. The world is about to come together to celebrate the most important football event on the planet and what better way to follow this event than to experience it firsthand? FIFA World Cup 2022™ will be playable in FIFA 23 at no additional cost, with all the passion, excitement and authenticity of real-life competition",
       "banner-title3":"Bringing the characters from Sonic Frontiers to life",
       "banner-content3":"Get ready to explore new frontiers and experience Sonic the Hedgehog like never before in Sonic Frontiers! Sonic's open-ended action-adventure platformer launches on November 8 and marks a giant leap forward in the future of Sonic 3D action gaming.",
       "banner-title4":"How Forspoken combat works and why it feels so magical",
       "banner-content4":"Hello everyone, my name is Ryota Nozoe, Lead VFX Artist at Forspoken. In this new and expansive RPG you play Frey Holland, a young woman who is transported to the mysterious world of Athia!",
       "banner-title5":"Shuhei Yoshida recommends 10 titles from the PlayStation Plus Premium classic catalog",
       "banner-content5":"With hundreds of titles available on PlayStation Plus Premium, choosing can be difficult.",
       "banner-description5":"Head of PlayStation Indies, SIE",
       "banner-title6":"Players' Choice: Vote for the best new game of October 2022",
       "banner-content6":"Time to pack away the pumpkins as October has come and gone bringing with it some amazing games! Which new release will take the Players' Choice crown? Vote in the poll below to help choose!",
       "banner-description6":"Vice President, Network Advertising, Loyalty & Licensed Merchandise",
       "banner-title7":"11 new games announced for PS VR2: The Dark Pictures: Switchback, Crossfire: Sierra Squad, Cities VR – Enhanced Edition and many more",
       "banner-content7":"So far, we've only showcased a few of the games coming to PS VR2 next year, such as Horizon Call of the Mountain, Resident Evil Village and many more. But there are still many titles to talk about.",
       "banner-description7":"Writer and Producer from Coin Crew Games",
       "banner-title8":"PlayStation VR2 will be available in February for €599.99",
       "banner-content8":"Over the past few months, we've introduced PlayStation VR2 and taken a look at the next generation of virtual reality gaming, allowing you to dive into new worlds and experience a revolutionary sense of immersion.",
       "banner-title9":"The new God of War Ragnarök video shows how all parents can relate to the game",
       "banner-content9":"Just over a week after the highly anticipated release of God of War Ragnarök, Kratos and Atreus continue their journey…",
       "banner-description9":"Screenwriter Omaewa Moui Shindeiru",
       "banner-title10":"Final Fantasy XVI interview: setting, different perspectives and favorite characters",
       "banner-content10":"Last week, producer Naoki Yoshida and director Hiroshi Takai talked about the new trailer for Final Fantasy XVI, titled Ambition. In that PS Blog post they briefly touched on the background of the game, as well as giving more details on the two new characters revealed.",
      //SOCIAL MEDIA
      "follow":"Follow us on social media",
      //FOOTER HOMEPAGE
      "website":"Website ©2022 Sony Interactive Entertainment Europe Limited. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved.",
      "more-info":"More info",
      "support":"Support",
      "terms":"Website terms of use",
      "privacy":"Privacy and cookies",
      "legals":"Legal",
      "about":"About SIE",
      "enviroment":"PlayStation and the environment",
      "psn":"PSN terms of service",
      "terms-unsub":"PS Store cancellation policy",
      "health-warn":"Health warning",
      "class-age":"Age ratings",
      "terms-software":"Software usage terms",
      "work-play":"PlayStation careers",
      "website-map":"Site map",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "it", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
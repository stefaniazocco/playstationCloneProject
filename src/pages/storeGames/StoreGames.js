import { FooterGames } from "../../components/footer/FooterGames";
import { SliderGames } from "../../components/elements/sections/sliderGames/SliderGames";
import { big1, big2, games1, games2, theme } from "./gamesData";
import { BigCardsStore } from "../../components/elements/sections/BigCardsStore/BigCardsStore";
import { HeroGames } from "../../components/elements/sections/heroStoreGames/HeroGames";

export function StoreGames() {
    return(
        <>
            <HeroGames theme={theme.theme1}/>
            <BigCardsStore games={big1} />
            <SliderGames title="Nuovi giochi" games={games2} />
            <SliderGames title="In arrivo" games={games1} />
            <HeroGames theme={theme.theme2}/>
            <HeroGames theme={theme.theme3}/>
            <BigCardsStore games={big2} />
            <FooterGames />
        </>
    )
}
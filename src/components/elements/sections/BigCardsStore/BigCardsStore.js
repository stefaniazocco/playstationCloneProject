import { StoreCardsBig} from "../../cards/StoreGames";

export function BigCardsStore({games}){
    return(
        <section class="d-flex flex-wrap align-items-center justify-content-center containerGames">
            <div class="seeMoreTitle">Altri giochi</div>
            <div class="d-flex flex-wrap align-items-center justify-content-center containerStore">
                {games.map(game => <StoreCardsBig img={game.img} title={game.title} /> )}
            </div>
        </section>
    )
}
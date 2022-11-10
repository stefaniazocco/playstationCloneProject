import { StoreCardsLittle } from "../../cards/StoreGames";

export function SliderGames({title, games}){
    return(
        <section class="small-cards-section d-flex flex-column" id="section-container2">

            <div class="small-cards-title d-flex align-items-center justify-content-between">
                <h2>{title}</h2>
                <div>
                    <button class="small-cards-show-more-button">
                        <div class="small-cards-show-more d-flex justify-content-center align-items-center">
                            <div></div>
                        </div>
                    </button>
                    <button class="show-div"><a href="#">Visualizza tutto</a></button>
                </div>

            </div>

            <div id="slider-container2" class="slider-container">

                <button onclick="slideRight2()" class="small-cards-swipe-button slider-btn">
                    <div class="small-cards-swipe d-flex justify-content-center align-items-center">
                        <div></div>
                    </div>
                </button>

                <button onclick="slideLeft2()" class="small-cards-swipe-button slider-btn">
                    <div class="small-cards-swipe d-flex justify-content-center align-items-center">
                        <div></div>
                    </div>
                </button>

                <div id="slider-div2" class="slider-div">
                    {games.map(game => <StoreCardsLittle img={game.img} title={game.title} />)}
                    
                    <div class="small-card slidee">
                        <a href="#" class="small-card-img-div">
                            <div href="#" class="small-card-img">
                                <div class="card-more">
                                    Visualizza tutto
                                </div>
                            </div>
                            <div class="darken-img"></div>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}
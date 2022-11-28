import { StoreCardsLittle } from "../../cards/StoreGames";

export function SliderGames({title, games}){
    return(
        <section className="small-cards-section d-flex flex-column" id="section-container2">

            <div className="small-cards-title d-flex align-items-center justify-content-between">
                <h2>{title}</h2>
                <div>
                    <button className="small-cards-show-more-button">
                        <div className="small-cards-show-more d-flex justify-content-center align-items-center">
                            <div></div>
                        </div>
                    </button>
                    <button className="show-div"><a href="#">Visualizza tutto</a></button>
                </div>

            </div>

            <div id="slider-container2" className="slider-container">

                <button onclick="slideRight2()" className="small-cards-swipe-button slider-btn">
                    <div className="small-cards-swipe d-flex justify-content-center align-items-center">
                        <div></div>
                    </div>
                </button>

                <button onclick="slideLeft2()" className="small-cards-swipe-button slider-btn">
                    <div className="small-cards-swipe d-flex justify-content-center align-items-center">
                        <div></div>
                    </div>
                </button>

                <div id="slider-div2" className="slider-div">
                    {games.map(game => <StoreCardsLittle img={game.img} title={game.title} />)}
                    
                    <div className="small-card slidee">
                        <a href="#" className="small-card-img-div">
                            <div href="#" className="small-card-img">
                                <div className="card-more">
                                    Visualizza tutto
                                </div>
                            </div>
                            <div className="darken-img"></div>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}
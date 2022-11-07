export function StoreCardsBig({title, img}){
    return(
        <div class="store-otherGames">
            <a>
                <img class="imgStore" src={img}
                    alt={title} />
            </a>
        </div>
    )
}

export function StoreCardsLittle({title, img}){
    return(
        <div class="small-card slidee">
            <a href="#" class="small-card-img-div">
                <img class="small-card-img" src={img} alt={title} />
                <div class="darken-img"></div>
            </a>
            <div class="small-card-game-title">{title}</div>
        </div>
    )
}
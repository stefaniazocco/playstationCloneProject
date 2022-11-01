export function CardsSliderHomepage({img, link, title}){
    return(
        <div className="game">
            <a href={link}>
                <img src={img} alt={title} />
                <div className="p">{title}</div>
            </a>
        </div>
    )
}
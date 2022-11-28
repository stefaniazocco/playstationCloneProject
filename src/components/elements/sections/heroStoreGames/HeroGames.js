import { Button } from "../../buttons/Button";



export function HeroGames({theme}) {
    return(
        <>
        <section className="lastofus-block">
            
            <div className="lastofus-picture-bg">
                <img src={theme.img[0]} />
            </div>
            <div className="lastofus-cont">
                <div className="lastofus-logo">
                    {theme.img[1] && <img id="lof-logo" src={theme.img[1]} />}
                </div>
                <div className="lastofus-girl">
                    {theme.img[2] ? <img id="girl" src={theme.img[2]} /> : <div id="girl"></div>}
                </div>
            </div>
            <div className="text-block">
                <div className="text-cont">
                    <div className="lastofus-text">
                        <h1 id="head-text">{theme.title}</h1>
                        <span id="sub-text">{theme.sub}</span>
                    </div>
                    <Button className={theme.button.class} link={theme.button.link} string={theme.button.string} />
                </div>
            </div>
        </section>
        </>
    )
}
import twitter from "../../../../assets/images/homepage/social-twitter.webp"
import facebook from "../../../../assets/images/homepage/social-facebook.webp"
import instagram from "../../../../assets/images/homepage/social-instagram.webp"
import youtube from "../../../../assets/images/homepage/social-youtube.webp"
import twitch from "../../../../assets/images/homepage/social-twitch.webp"

export function Socials() {
    return(
        <section className="social-section">
            <div>
                <h3 className="social-title">Seguici sui social media</h3>
                <div className="social-icons">
                    <a href="#"><img className="social-twitter" alt="Twitter" src={twitter} /></a>
                    <a href="#"><img className="social-facebook" alt="Facebook" src={facebook} /></a>
                    <a href="#"><img className="social-instagram" alt="Instagram" src={instagram} /></a>
                    <a href="#"><img className="social-youtube" alt="YouTube" src={youtube} /></a>
                    <a href="#"><img className="social-twitch" alt="Twitch" src={twitch} /></a>
                </div>
            </div>
        </section>
    )
}
import { Button } from "../../buttons/Button"
import dualshock320 from '../../../../assets/images/homepage/ExplorePlay/dualshock4320px.webp'
import dualshock768 from '../../../../assets/images/homepage/ExplorePlay/dualshock4768px.webp'
import dualshock from '../../../../assets/images/homepage/ExplorePlay/srcdualshock4.webp'
import playslim320 from '../../../../assets/images/homepage/ExplorePlay/playslim320px.webp'
import playslim768 from '../../../../assets/images/homepage/ExplorePlay/playslim768px.webp'
import vrplay320 from '../../../../assets/images/homepage/ExplorePlay/vrplay320px.webp'
import vrplay768 from '../../../../assets/images/homepage/ExplorePlay/vrplay768px.webp'
import "../exploreplay/ExplorePlay.scss"


export function ExplorePlay() {


    return (
        <div className="big-cont">
            <div className="principal">
                <section className="first_cont">

                    <h1 className="title">Esplora PlayStation®4</h1>
                    <p className="sub">Giochi incredibili e intrattenimento senza fine. Non c'è mai stato un momento
                        migliore per giocare sulla tua PS4.
                    </p>

                </section>
                <div className="second_cont">

                    <div className="carousel-container">

                        <div className="content1">

                            <picture className='playslim-image' data-alt="play slim image">
                                <source srcset={playslim768} media="(min-width: 768px)" />
                                <source srcset={playslim320} media="(min-width: 320px)" />
                                <img src={playslim320} />
                            </picture>

                            <div className="text_box">
                                <h1 id="title1">PlayStation 4</h1>
                                <p id="sub1">Giochi incredibili live su PS4, con 1 TB di spazio di archiviazione.</p>
                                <Button className="button-blue btn-block" link="#" string="Scopri di più" />
                            </div>
                        </div>

                        <div class="content2">

                            <picture className='vrplay-image' data-alt="vr play image">
                                <source srcset={vrplay768} media="(min-width: 768px)" />
                                <source srcset={vrplay320} media="(min-width: 320px)" />
                                <img src={vrplay320} />
                            </picture>

                            <div class="text_box">
                                <h1 id="title2">PlayStation VR</h1>
                                <p id="sub2">Oltre 500 titoli ed esperienze di gioco. Scoprili tutti.</p>
                                <Button className="button-blue btn-block" link="#" string="Scopri di più" />
                            </div>
                            
                        </div>
                        <div class="content3" >

                            <picture className='dualshock' data-alt="dualshock image">
                                <source srcset={dualshock768} media="(min-width: 768px)" />
                                <source srcset={dualshock320} media="(min-width: 320px)" />
                                <img src={dualshock} />
                            </picture>

                            <div class="text_box">
                                <h1 id="title3">Accessori</h1>
                                <p id="sub3">Migliora la tua esperienza PS4 con una gamma di accessori ufficiali.</p>
                                <Button className="button-blue btn-block" link="#" string="Scopri di più" />
                            </div>

                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
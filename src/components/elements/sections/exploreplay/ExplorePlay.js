import { Button } from "../../buttons/Button"
import dualshock320 from '../../../../assets/images/homepage/ExplorePlay/dualshock4320px.webp'
import dualshock768 from '../../../../assets/images/homepage/ExplorePlay/dualshock4768px.webp'
import dualshock from '../../../../assets/images/homepage/ExplorePlay/srcdualshock4.webp'
import playslim320 from '../../../../assets/images/homepage/ExplorePlay/playslim320px.webp'
import playslim768 from '../../../../assets/images/homepage/ExplorePlay/playslim768px.webp'
import vrplay320 from '../../../../assets/images/homepage/ExplorePlay/vrplay320px.webp'
import vrplay768 from '../../../../assets/images/homepage/ExplorePlay/vrplay768px.webp'
import "../exploreplay/ExplorePlay.scss"
import { useTranslation } from "react-i18next";


export function ExplorePlay() {
    
    const { t } = useTranslation();

    return (
        <div className="big-cont">
            <div className="principal">
                <section className="first_cont">

                    <h1 className="title">{t("title-explore")}</h1>
                    <p className="sub">{t("sub-explore")}</p>

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
                                <p id="sub1">{t("sub1")}</p>
                                <Button className="button-blue btn-block" link="#" string={t("btn-explore")} />
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
                                <p id="sub2">{t("sub2")}</p>
                                <Button className="button-blue btn-block" link="#" string={t("btn-explore")} />
                            </div>
                            
                        </div>
                        <div class="content3" >

                            <picture className='dualshock' data-alt="dualshock image">
                                <source srcset={dualshock768} media="(min-width: 768px)" />
                                <source srcset={dualshock320} media="(min-width: 320px)" />
                                <img src={dualshock} />
                            </picture>

                            <div class="text_box">
                                <h1 id="title3">{t("accessories")}</h1>
                                <p id="sub3">{t("sub3")}</p>
                                <Button className="button-blue btn-block" link="#" string={t("btn-explore")} />
                            </div>

                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
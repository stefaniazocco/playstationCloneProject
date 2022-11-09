import bg3000 from '../../../../assets/images/homepage/srcset-3000pxbg.webp'
import bg100 from '../../../../assets/images/homepage/src-100pxbg.webp'
import bg1367 from '../../../../assets/images/homepage/scrset-1367pxbg.webp'
import bg1024 from '../../../../assets/images/homepage/srcset-1024pxbg.webp'
import bg768 from '../../../../assets/images/homepage/srcset-768pxbg.webp'
import bg320 from '../../../../assets/images/homepage/srcset-320pxbg.webp'
import plusimg320 from '../../../../assets/images/homepage/playplus320px.webp'
import plusimg768 from '../../../../assets/images/homepage/playplus768px.webp'
import plusimg1024 from '../../../../assets/images/homepage/playplus1024px.webp'
import plusimg from '../../../../assets/images/homepage/srcPlayPlusimg.webp'
import logo320 from '../../../../assets/images/homepage/pluslogo320px.webp'
import logo768 from '../../../../assets/images/homepage/pluslogo768px.webp'
import logo1024 from '../../../../assets/images/homepage/pluslogo1024px.webp'
import logo from '../../../../assets/images/homepage/pluslogosrc.webp'
import { Button } from "../../buttons/Button";
import '../sales-plus/PlayPlus.scss'


export function PlayPlus() {

    return (

        <section className="container">
            {/*BACKGROUND*/}

            <picture className='bg-image' data-alt="background image">
                <source srcset={bg3000} media="(min-width: 2400px)" />
                <source srcset={bg1367} media="(min-width: 1367px)" />
                <source srcset={bg1024} media="(min-width: 1024px)" />
                <source srcset={bg768} media="(min-width: 768px)" />
                <source srcset={bg320} media="(min-width: 320px)" />
                <img src={bg100} />
            </picture>

            <div class='grid-cont '>
                {/*IMAGE PLUS*/}

                <picture className='plus-image slide-up' data-alt="plus image">
                    <source srcset={plusimg1024} media="(min-width: 1024px)" />
                    <source srcset={plusimg768} media="(min-width: 768px)" />
                    <source srcset={plusimg320} media="(min-width: 320px)" />
                    <img src={plusimg} />
                </picture>

                {/*LOGO,TEXT, BUTTON*/}
                <div className='box-grid'>
                    <div className='box-title'>
                        <picture className='plus-logo slide-up' data-alt="plus logo image">
                            <source srcset={logo1024} media="(min-width: 1024px)" />
                            <source srcset={logo768} media="(min-width: 768px)" />
                            <source srcset={logo320} media="(min-width: 320px)" />
                            <img src={logo} />
                        </picture>
                        <p className="paragraph">
                            Migliora la tua esperienza PlayStation con l'accesso a multigiocatore online, giochi mensili, sconti esclusivi e altro ancora.
                        </p>
                    </div>

                    <Button className="button-blue btn-block" link="#" string="Esplora PlayStation Plus" />
                </div>
            </div>
        </section>

    )
}
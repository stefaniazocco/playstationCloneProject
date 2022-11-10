import sales320 from '../../../../assets/images/homepage/SalesPlay/sales320px.webp'
import sales768 from '../../../../assets/images/homepage/SalesPlay/sales768px.webp'
import sales1024 from '../../../../assets/images/homepage/SalesPlay/sales1024px.webp'
import sales from '../../../../assets/images/homepage/SalesPlay/srcsales.webp'
import { Button } from "../../buttons/Button";
import '../sales-plus/SalesPlay.scss'
import { useState } from 'react';





export function SalesPlay() {


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (

        <section className="cont">
            {/*IMAGE SALES*/}
            <div className="grid-cont">

                <picture className="picture" >
                    <source srcset={sales1024} media="(min-width: 1024px)" />
                    <source srcset={sales768} media="(min-width: 768px)" />
                    <source srcset={sales320} media="(min-width: 320px)" />
                    <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={sales} style={{ transform: `${isHovering ? 'scale(1.05)' : 'scale(1)'}` }} />
                </picture>
                <div className="text-cont">
                    <div className="text-block">
                        <h1 className="title-sales">Nuovi sconti sul PlayStation Store</h1>
                    </div>
                    <div className="subtitle">
                        <p className="sub-sales">
                            Esplora gli ultimi sconti e le offerte stagionali su giochi grandiosi e contenuti aggiuntivi per
                            PS4 e PS5.
                        </p>
                    </div>
                    <Button className="button-red btn-block" link="/store-games" string="Vedi tutte le offerte" />
                </div>
            </div>
        </section>
    );
}


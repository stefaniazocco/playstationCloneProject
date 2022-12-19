import { Button } from "../buttons/Button";
import { ButtonSelf } from "../buttons/ButtonSelf";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

export function CardsStoreHomepage({img, product, link,string}) {
    const { t } = useTranslation();

    return(
        <div class="store-card">
            <img src={img} alt={product}/>
            <p>{product}</p>
            <ButtonSelf className="button-red buttonStore" link={link} string={t("acquista")}/>
        </div>
    )
}
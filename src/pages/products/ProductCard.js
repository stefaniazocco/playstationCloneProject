import "./card.scss";
import {ProductTable} from "../../components/elements/sections/productRight/ProductTable"
import { store } from "../../redux/store";
import { addToCart } from "../../redux/cartActions";
import { Select } from "../../components/elements/select/Select";
import { Counter } from "../../components/elements/counter/StoreCounter";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";


export function ProductCard({product, close}){
    return(
        <>
        {product &&        
            <div className="p-card-bg">
                <div className="p-card-box">
                    <button className="p-card-close" onClick={()=>close(null)}>
                        <IoClose />
                    </button>
                    <div>
                        <img className="p-card-img" src={product.img.big1} />
                    </div>
                    <div className="p-card-right">
                        <div className="p-card-right-up">
                            <Link to={`/product/${product.name}`} className="p-card-right-up-title">{product.title}</Link>
                            <div className="p-card-right-up-price">{product.price} (IVA inclusa)</div>
                            <div className="p-card-right-up-number">Articolo n°: {product.number}</div>
                        </div>
                        <div className="p-card-right-details">
                            {product.details.title}
                            <ul>
                                {product.details.one && <li>{product.details.one}</li>}
                                {product.details.two && <li>{product.details.two}</li>}
                                {product.details.three && <li>{product.details.three}</li>}
                            </ul>
                        </div>
                        {product.hasSize ?
                        <>
                            <Select product={product} />
                             <Counter product={product} />
                             
                        </> :
                            <ProductTable product={product} />
                        }
                        <div className="p-card-price-description">
                            I prezzi includono l’IVA del Regno Unito. Per spedizioni al di fuori del Regno Unito, il costo dell’IVA sarà ricalcolato in fase di checkout.
                        </div>
                        <button className="p-add-to-cart" onClick={() =>store.dispatch(addToCart(product.name))}>Aggiungi al carrello</button>
                        <Link to={`/product/${product.name}`} className="p-card-more"> Visualizza dettagli completi</Link>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
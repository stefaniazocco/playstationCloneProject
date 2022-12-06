import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { FooterProduct } from "../../components/footer/FooterProduct";
import { editCart, removeFromCart } from "../../redux/cartActions";
import { store } from "../../redux/store";

import "./cart.scss"

export function Cart(){
    
    const product = useSelector((state) => state.product);
    const productPrice = product.map((item) => item.price * item.quantity)
    let total = productPrice.reduce((a, b) => a + b, 0);

    return(
        <>
            <ProductNav />
            <div className="cart-main">
          
            
            {product.length === 0
            ?   <div className="cart-center">
                    <h1>Carrello</h1>
                    <div>Il tuo carrello è vuoto</div>
                    <button className="cart-button">Continua gli acquisti</button>
                </div>
            
            :<div className="cart-center"> 
                <h1>Carrello</h1>
                <div className="d-flex">
                    <div>
                    {product.map(p => <div className="cart-prod">
                        <div className="prod-left">
                            <img className="cart-prod-img" src={p.image} />
                            <div className="cart-prod-center">
                                <div>
                                    <Link to={`/product/${p.name}`}>{p.title}</Link>
                                    <div className="art-number">Articolo n°.:{p.number}</div>
                                    {p.size && <div>{p.size}</div>}
                                </div>
                                <div>
                                    <div className="remove-prod" onClick={() => store.dispatch(removeFromCart(p.name))}>Rimuovi</div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-prod-right">
                            <div className="prod-price">{p.price.toFixed(2)}€</div>
                            <input type="number" value={p.quantity} onChange={(event) => store.dispatch(editCart(p.name, event))} />
                            <div className="prod-total">
                                <div className="tot-price">{(p.price * p.quantity).toFixed(2)}€</div>
                                <div className="tot-iva">(IVA inclusa)</div>
                            </div>
                        </div>
                    
                    </div>
                    )}
                    </div>

                    <div className="subtotal-container">
                        <div className="sub-order">Riepilogo ordine</div>
                        <div className="sub-art">Hai {product.length === 1 ? <span>1 articolo</span> : <span>{product.length} articoli</span>}  nel carrello</div>
                        <div className="sub-sub">
                            <div>Subtotale:</div>
                            <div>{total.toFixed(2)}€</div>
                        </div>
                        <button className="cart-button-orange but-width">Checkout</button>
                        <button className="cart-button but-width">Continua gli acquisti</button>
                    </div>
                </div>

            </div>


            }
            </div>
            <FooterProduct />
        </>
    )
}
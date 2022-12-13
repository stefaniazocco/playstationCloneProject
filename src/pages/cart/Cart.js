import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Message, useMessage } from "../../components/elements/sections/message/Message";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { FooterProduct } from "../../components/footer/FooterProduct";
import { clearCart, removeFromCart } from "../../redux/cartActions";
import { counterModify } from "../../redux/counterActions";
import { store } from "../../redux/store";

import "./cart.scss"

export function Cart(){
    const {message, closeMessage} = useMessage()
    const product = useSelector((state) => state.product);
    const size = useSelector(state => state.size)
    const counter = useSelector((state) => state.counter)
    const user = useSelector((state) => state.user)
    const productPrice = product.map((item) => item.price * findCounter(item))
    let total = productPrice.reduce((a, b) => a + b, 0);

    function findSize(product){
        const filter = size.find(prod => prod.name === product.name) 
        return filter.size
    }
    function findCounter(product){
        const filter = counter.find(prod => prod.name === product.name)
        return filter.quantity
    }
    
    const submitOrder = () => {
       
       
        const url = "http://localhost:5000/api/stripe/create-checkout-session"
        axios.post(url, {product, size, counter, userId: user.currentUser}
        ).then((res) =>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    const navigate = useNavigate();
    return(
        <>
            <ProductNav />
            <div className="cart-main">
          
            {message && <Message message={message} closeMessage={closeMessage} />}
            {product.length === 0
            ?   <div className="cart-center">
                    <h1>Carrello</h1>
                    <div>Il tuo carrello è vuoto</div>
                    <button className="cart-button" onClick={()=>navigate("/products")}>Continua gli acquisti</button>
                </div>
            
            :  <div className="cart-center"> 
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
                                    {p.size && <div>{findSize(p)}</div>}
                                </div>
                                <div>
                                    <div className="remove-prod" onClick={() => store.dispatch(removeFromCart(p.name))}>Rimuovi</div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-prod-right">
                            <div className="prod-price">{p.price.toFixed(2)}€</div>
                            <input type="number" value={findCounter(p)} onChange={(event) => store.dispatch(counterModify(p.name, event))} />
                            <div className="prod-total">
                                <div className="tot-price">{(p.price * findCounter(p)).toFixed(2)}€</div>
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
                        <button className="cart-button-orange but-width" onClick={submitOrder}>Checkout</button> 
                        <button className="cart-button but-width" onClick={()=>navigate("/products")}>Continua gli acquisti</button>
                        
                    </div>
                </div>

            </div>


            }
            </div>
            <FooterProduct />
        </>
    )
}
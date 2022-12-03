import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { FooterProduct } from "../../components/footer/FooterProduct";

import "./cart.scss"

export function Cart(){
    
    const product = useSelector((state) => state.product);
    console.log(product[0].price)
    return(
        <>
            <ProductNav />
            <div className="cart-main">
          
            
            {product.length === 0
            ? <div><div>CARRELLO VUOTO</div></div>
            
            
            :product.map(p => <div className="cart-prod">
                    <img className="cart-prod-img" src={p.image} />
                    <div className="cart-prod-center">
                        <div>
                            <Link to={`/product/${p.name}`}>{p.title}</Link>
                            <p>Articolo n°.:{p.number}</p>
                            {/* {taglia && <div>{taglia}</div>} */}
                        </div>
                        <div>
                            <button>RIMUOVI</button>
                        </div>

                    </div>
                    <div>
                        <div>{p.price},00€</div>
                        <input type="number" value={p.quantity} />
                        <div>{p.price * p.quantity},00€</div>
                    </div>
                
                </div>
            )}
            </div>
            <FooterProduct />
        </>
    )
}
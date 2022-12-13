import { Message, useMessage } from "../../components/elements/sections/message/Message";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { FooterProduct } from "../../components/footer/FooterProduct";
import banner from "../../assets/images/product/banner.jpg";
import "./products.scss"
import { Link } from "react-router-dom";
import { products } from "../product/products";
import { useState } from "react";
import { ProductCard } from "./ProductCard";


export function Products() {
    const {message, closeMessage} = useMessage();
    const [card, setCard] = useState(null)
 
    
    return (
        <div style={{position: "relative"}}>
            <ProductCard product={card} close={setCard} />
            <ProductNav />
            <section className="products-main">
                {message && <div className="prod-message"><Message message={message} closeMessage={closeMessage} /></div>}
                <img src={banner} className="prod-banner" />
                <div className="prod-main">
                    <div className="breadcrumbs-div">
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">PROPRIETÀ</Link></li>
                            <li><Link to="/products">PlayStation</Link></li>
                        </ul>
                    </div>
                    <h1>PlayStation</h1>
                    <div className="prod-grid">
                        {Object.values(products).map(prod => (
                        <div className="prod-card-box">   
                            <div className="prod-img-link">
                                <Link to={`/product/${prod.name}`} >
                                    <img className="prod-card-img" src={prod.img.big1} />
                                </Link>
                                <div className="prod-hover-view" onClick={() => setCard(prod)}>Vista rapida</div>
                            </div>
                            <p className="prod-cart-title"><Link to={`/product/${prod.name}`}>{prod.title}</Link></p>
                            <div className="prod-cart-details">Articolo: {prod.number}</div>
                            <div className="prod-cart-details">{prod.price} (IVA inclusa)</div>
                        </div>
                        
                        )
                        )}
                    </div>
                </div>
                
            </section>
            <FooterProduct />
           
        </div>
    )
}
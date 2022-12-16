import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { FooterProduct } from "../../components/footer/FooterProduct";
import { products } from "../product/products";
import "./order.scss"

export function Orders() {
    const [order, setOrder] = useState([])
    const user = useSelector(state => state.user)
    
    
    async function getOrder() {
        try{
        const data= await fetch("http://localhost:5000/api/stripe/order/")
        const result= await data.json()
        // const orderMap = await result.map((ord) => {
            // const par = JSON.parse(ord.userId)
            // if(par._id == user.currentUser._id) {return ord}})
        setOrder([...result])
        
        }catch(err){
            console.log(err.message + "ciao")
        }
    }


    function getQuantity(pName){
        // const prod = order.map(item => item.quantities.find(item=> item.name == pName))
        const prod = []
        order.forEach(item => {
            for(let i=0; i< item.products.length; i++){
                if(item.products[i].name === pName){
                    prod.push(item.quantities.find(i => i.name === pName))
                }
            }
        });
        return prod
    }
    
    console.log(getQuantity("lamp"))
    useEffect(() => {
        getOrder();
        
    }, []);
  console.log(order)
  return (
    <div>
        <ProductNav />
        {order === [] 
        ? <section>Non hai effettuato nessun ordine</section> 
        : <section className="order-main">
            <div className="order-center">
                <h1 className="order-title">I tuoi ordini</h1>
            {order && order.map(o => (
                <div className="order-card">
                    <div >
                    {o.products.map(p => (
                        <div className="order-card-left">
                            <div className="order-card-box">
                                <img src={products[p.name].img.big1} className="order-img" />
                                <Link className="order-name" to={`/product/${p.name}`}>{products[p.name].title}</Link>
                            </div>
                            <div style={{display: "flex", gap:"50px"}}>
                                <div className="">{products[p.name].price}</div>
                                <div>{getQuantity(p.name)[0].quantity}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="order-card-right">
                        <div>
                        <div className="order-date">Data: {o.updatedAt.slice(0, 10)}</div>
                        <div className="order-address">Mostra indirizzo di spedizione
                            <div className="address-det">
                                <span>{o.shipping.address.line1}</span>
                                <span>{o.shipping.address.city}</span>
                                <span>{o.shipping.address.state}</span>
                                <span>{o.shipping.address.postal_code}</span>
                                
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="order-subtotal">Subtotale: {(o.subtotal/100).toFixed(2)}€</div>
                        <div className="order-total">Totale: <strong>{(o.total/100).toFixed(2)}€</strong></div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
        }
        <FooterProduct />
    </div>
  )
}

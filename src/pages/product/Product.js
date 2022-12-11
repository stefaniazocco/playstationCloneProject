// import { useState } from "react";
// import { Counter } from "../../components/elements/counter/StoreCounter";
import { Link, useParams } from "react-router-dom";
import { ProductDetails } from "../../components/elements/sections/productDetails/ProductDetails";
import { ProductLeft } from "../../components/elements/sections/productLeft/ProductLeft";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { ProductRight } from "../../components/elements/sections/productRight/ProductRight";
import { ProductTitle } from "../../components/elements/sections/productRight/ProductTitle";
// import { Select } from "../../components/elements/select/Select";
import { FooterProduct } from "../../components/footer/FooterProduct";
import "./product.scss";
import { products } from "./products";


export function Product(){

    const {name} = useParams()
   
    const product = products[name]
    
    // const AddToCartHandle = (e) => {
    //     e.preventDefault();
    //     history.push(`/cart/${productId}?qty=${qty}`);
    //   };
    return(
        <>
            <ProductNav />
            <main>
                <section className="d-flex product-section">
                    <div className="centered-div">
                        <div className="breadcrumbs-div">
                            <ul className="d-flex">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">PROPRIETÀ</Link></li>
                                <li><Link to="/products">PlayStation</Link></li>
                                <li>{product.title}</li>
                            </ul>
                        </div>
                        <div className="product-main">
                            <ProductLeft product={product} />
                            <ProductTitle product={product} />
                            <ProductRight product={product} />
                        </div>
                        <ProductDetails product={product} />
                    </div>
                </section>
            </main>
            <FooterProduct />
        </>
    )
}
// import { useState } from "react";
// import { Counter } from "../../components/elements/counter/StoreCounter";
import { Link } from "react-router-dom";
import { ProductDetails } from "../../components/elements/sections/productDetails/ProductDetails";
import { ProductLeft } from "../../components/elements/sections/productLeft/ProductLeft";
import { ProductNav } from "../../components/elements/sections/productNav/ProductNav";
import { ProductRight } from "../../components/elements/sections/productRight/ProductRight";
import { ProductTitle } from "../../components/elements/sections/productRight/ProductTitle";
// import { Select } from "../../components/elements/select/Select";
import { FooterProduct } from "../../components/footer/FooterProduct";
import "./product.scss"
import { hoodie } from "./products";


export function Product(){

    return(
        <>
            <ProductNav />
            <main>
                <section class="d-flex product-section">
                    <div class="centered-div">
                        <div class="breadcrumbs-div">
                            <ul class="d-flex">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">PROPRIETÀ</Link></li>
                                <li><Link to="/">PlayStation</Link></li>
                                <li>Cappello di marca PlayStation ™ 47</li>
                            </ul>
                        </div>
                        <div class="product-main">
                            <ProductLeft img={hoodie.img} />
                            <ProductTitle />
                            <ProductRight hasSize={true} />
                        </div>
                        <ProductDetails />
                    </div>
                </section>
            </main>
            <FooterProduct />
        </>
    )
}
import { useState } from "react"
import "./productLeft.scss"

export function ProductLeft({product}){

    const [number, setNumber] = useState(product.img.big1)

    return(
        <div className="product-left">
            <div className="image-little">
                {product.img.small1 && <img  onClick={()=>setNumber(product.img.big1)} src={product.img.small1} alt="" />}
                {product.img.small2 && <img  onClick={()=>setNumber(product.img.big2)} src={product.img.small2} alt="" />}
                {product.img.small3 && <img  onClick={()=>setNumber(product.img.big3)} src={product.img.small3} alt="" />}
            </div>
            <div className="img-zoom-container">
                <div className="zoomer img-zoom-lens"></div>
                <img className="image-big mySlides2" id="myimage" src={number} alt="" />

                {product.img.big1 && <div id="myresult" className="img-zoom-result show"></div>}
                {product.img.big2 && <div id="myresult2" className="img-zoom-result show"></div>}
                {product.img.big3 && <div id="myresult3" className="img-zoom-result show"></div>}
            </div>                            
        </div>
    )
}
import "./productLeft.scss"

export function ProductLeft({product}){
    return(
        <div class="product-left">
            <div class="image-little">
                {product.img.small1 && <img class="dot2" src={product.img.small1} alt="" />}
                {product.img.small2 && <img class="dot2" src={product.img.small2} alt="" />}
                {product.img.small3 && <img class="dot2" src={product.img.small3} alt="" />}
            </div>
            <div class="img-zoom-container">
                {product.img.big1 &&<><div class="zoomer img-zoom-lens"></div>
                <img class="image-big mySlides2" id="myimage" src={product.img.big1} alt="" /></>}
                {product.img.big2 && <><div class="zoomer img-zoom-lens2"></div>
                <img class="image-big mySlides2" id="myimage2" src={product.img.big2} alt="" /></>}
                {product.img.big3 && <><div class="zoomer img-zoom-lens3"></div>
                <img class="image-big mySlides2" id="myimage3" src={product.img.big3} alt="" /></>}

                {product.img.big1 && <div id="myresult" class="img-zoom-result show"></div>}
                {product.img.big2 && <div id="myresult2" class="img-zoom-result show"></div>}
                {product.img.big3 && <div id="myresult3" class="img-zoom-result show"></div>}
            </div>                            
        </div>
    )
}
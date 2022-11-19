import "./productLeft.scss"

export function ProductLeft({img}){
    return(
        <div class="product-left">
            <div class="image-little">
                {img.small1 && <img class="dot2" onclick="currentSlide(1)" src={img.small1} alt="" />}
                {img.small2 && <img class="dot2" onclick="currentSlide(2)" src={img.small2} alt="" />}
                {img.small3 && <img class="dot2" onclick="currentSlide(3)" src={img.small3} alt="" />}
            </div>
            <div class="img-zoom-container">
                {img.big1 &&<><div class="zoomer img-zoom-lens"></div>
                <img class="image-big mySlides2" id="myimage" src={img.big1} alt="" /></>}
                {img.big2 && <><div class="zoomer img-zoom-lens2"></div>
                <img class="image-big mySlides2" id="myimage2" src={img.big2} alt="" /></>}
                {img.big3 && <><div class="zoomer img-zoom-lens3"></div>
                <img class="image-big mySlides2" id="myimage3" src={img.big3} alt="" /></>}

                {img.big1 && <div id="myresult" class="img-zoom-result show"></div>}
                {img.big2 && <div id="myresult2" class="img-zoom-result show"></div>}
                {img.big3 && <div id="myresult3" class="img-zoom-result show"></div>}
            </div>                            
        </div>
    )
}
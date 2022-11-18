import "./productLeft.scss"

export function ProductLeft(){
    return(
        <div class="product-left">
            <div class="image-little">
                <img class="dot2" onclick="currentSlide(1)" src="../assets/ps-hat/Cappello di marca PlayStation ™ 47 - icon.jpg" alt="" />
                <img class="dot2" onclick="currentSlide(2)" src="../assets/ps-hat/Cappello di marca PlayStation ™ 47 back.jpg" alt="" />
                <img class="dot2" onclick="currentSlide(3)" src="../assets/ps-hat/Cappello di marca PlayStation ™ 47 front.jpg" alt="" />
            </div>
            <div class="img-zoom-container">
                <div class="zoomer img-zoom-lens"></div>
                <img class="image-big mySlides2" id="myimage" src="../assets/ps-hat/Cappello di marca PlayStation ™ 47.jpg" alt="" />
                <div class="zoomer img-zoom-lens2"></div>
                <img class="image-big mySlides2" id="myimage2" src="../assets/ps-hat/back-big.jpg" alt="" />
                <div class="zoomer img-zoom-lens3"></div>
                <img class="image-big mySlides2" id="myimage3" src="../assets/ps-hat/front-big.jpg" alt="" />

                <div id="myresult" class="img-zoom-result show"></div>
                <div id="myresult2" class="img-zoom-result show"></div>
                <div id="myresult3" class="img-zoom-result show"></div>
            </div>                            
        </div>
    )
}
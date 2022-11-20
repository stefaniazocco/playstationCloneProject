import "./productDetails.scss"

export function ProductDetails({product}){
    return(
        
        <div class="product-details">
            <div class="details-title">Dettagli prodotto</div>
            <div class="details-description">
                {product.details.title}
                <ul>
                    {product.details.one && <li>{product.details.one}</li>}
                    {product.details.two && <li>{product.details.two}</li>}
                    {product.details.three && <li>{product.details.three}</li>}
                </ul>
            </div>
        </div>
    )
}
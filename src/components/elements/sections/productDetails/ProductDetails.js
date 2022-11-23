import "./productDetails.scss"

export function ProductDetails({product}){
    return(
        
        <div className="product-details">
            <div className="details-title">Dettagli prodotto</div>
            <div className="details-description">
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
export function ProductTitle({product}){
    return(
        <div className="product-info-title">
            <div className="product-title">{product.title}</div>
            <div className="product-price-line">
                <span className="product-price">{product.price}</span>
                <span className="product-insu"> in su</span>
                <span className="product-iva"> (IVA inclusa)</span>
            </div>
            <div className="article-number">Articolo n°: {product.number}</div>
        </div>
    )
}
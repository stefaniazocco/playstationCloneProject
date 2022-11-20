export function ProductTitle({product}){
    return(
        <div class="product-info-title">
            <div class="product-title">{product.title}</div>
            <div class="product-price-line">
                <span class="product-price">{product.price}</span>
                <span class="product-insu"> in su</span>
                <span class="product-iva"> (IVA inclusa)</span>
            </div>
            <div class="article-number">Articolo n°: {product.number}</div>
        </div>
    )
}
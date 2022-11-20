
export function ProductTable({product}){
    return(
        <table class="product-table">
            <thead class="product-thead">
                <tr>
                    <th>Quantità</th>
                    <th>Prezzo</th>
                    <th>Inventario</th>
                </tr>
            </thead>
            <tbody class="product-tbody">
                <tr>
                    <td><input class="product-input" type="number" value="1" maxlength="5" /></td>
                    <td>{product.price}</td>
                    <td>In magazzino</td>
                </tr>
            </tbody>
        </table>
    )
}
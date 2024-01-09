import React from "react";
import './relatedProduct.css'
// import all_product from "../Assets/all_product";
// import data_products from '../Assets/data'
import related_data_products from '../Assets/related_data'
import Item from "../Items/item";

const Related_Products = () => {
    return (
        <div className="relatedProducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts-item">
                {related_data_products.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
export default Related_Products
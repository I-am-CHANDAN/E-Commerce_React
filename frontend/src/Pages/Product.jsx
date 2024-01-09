import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/shopContext";
import Breadcrum from "../Components/Breadcrum/breadcrum";
import Product_Display from "../Components/ProductDisplay/productDisplay";
import Related_Products from "../Components/Related_Products/relatedProduct";

const Product = () => {
    //grab all data using Context
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    //using productId find the product data
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div className="product">
            <Breadcrum product={product} />
            <Product_Display product={product}/>
            <Related_Products />
        </div>
    )
}
export default Product
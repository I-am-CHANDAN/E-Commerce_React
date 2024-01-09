import React, { useContext } from "react"
import './CSS/shopCategory.css'
import { ShopContext } from "../Context/shopContext"
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Items/item"

//Here we will  use the Context and get the data
const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)

    return (
        <div className="shop-category">
            {/* props.banner used to see the banner in shop by category */}
            <img src={props.banner} alt="image" />

            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-10 </span>Out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="image" />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Load More
            </div>
        </div>
    )
}
export default ShopCategory
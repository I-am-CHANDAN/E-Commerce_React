import React from "react";
import './newCollection.css'
import New_Collection from '../Assets/new_collections'
import Item from "../Items/item";

const NewCollection = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {New_Collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
export default NewCollection
import React from "react";
import Home from "../Components/HomePage/home";
import Popular from "../Components/Popular/popular";
import Offer from "../Components/Offers/offer";
import NewCollection from "../Components/NewCollection/newCollection";
import NewsLetter from "../Components/NewsLetter/subscription";

const Shop = () => {
    return (
        <div className="shop">
            <Home />
            <Popular />
            <Offer />
            <NewCollection />
            <NewsLetter />
        </div>
    )
}
export default Shop
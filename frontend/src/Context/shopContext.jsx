import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'

// we will create context
export const ShopContext = createContext(null);

// here we will provide the context and pass Props
const ShopContextProvider = (props) => {
    const ContextValue = {all_product}

    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
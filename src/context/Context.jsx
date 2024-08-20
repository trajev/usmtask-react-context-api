import { createContext, useState } from "react";

export const CartContext = createContext( null );

const ContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    return ( 
        <CartContext.Provider value={ {cart, setCart} }>
            {children}
        </CartContext.Provider>
    );
}

export default ContextProvider;
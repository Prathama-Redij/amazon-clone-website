import { createContext, useContext, useReducer } from "react";



export const CartContext = createContext();

export const ContextProvider = ({reducer, initialState, children}) => {
    return(
    <CartContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </CartContext.Provider>
    );
}


export const useStateValue = () => useContext(CartContext);
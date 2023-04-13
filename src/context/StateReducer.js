export const initialState = {
    cart : [],
    user: null,
   
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => Number(item.price) + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

        case 'Add_to_Cart':
            //logic to adding cart
            return { 
                ...state,
                cart: [...state.cart, action.item],
             };
            
            //  return {
            //     ...state,
            //     cart: state.cart.map(cart =>
            //         cart.payload === action.payload ? {...cart, selected: true} : cart,
            //     ),
            //   };
    
        case 'REMOVE FROM CART':
            let newCart = [...state.cart];

            const index = state.cart.findIndex(
              (cartItem) => cartItem.id === action.id
            );
      
            if (index >= 0) {
              newCart.splice(index, 1);
            } else {
              console.warn(
                `can't remove this product as id ${action.id} doesn't exists`
              );
            }
            return { ...state, cart: newCart };
            
                
        default:
            return state;
    }
}

export default reducer
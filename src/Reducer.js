export const initialState = {
    basket: [], // Initial state for the basket
  };
  export const getBasketTotal=(basket)=>   
basket?.reduce((amount,item) =>item.price+amount,0);
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item], // Add new item to basket
        };
        case 'REMOVE_FROM_BASKET':
            // return{
            //     ...state,
            //     basket:state.basket.filter(item => item.id!==action.id)
            // }
            const index=state.basket.findIndex(
                (basketItem) => basketItem.id==action.id
            );
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`can't remove product(id: ${action.id}) as its not in basket!`)
            }
            return{
                ...state,
                basket:newBasket
            }
  
      default:
        return state;
    }
  };
  
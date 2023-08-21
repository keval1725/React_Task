import { ADD_TO_CART } from '../Constant';

const initialState = {
    cardData: []
}


export default function CartItem(state = initialState.cardData,action){
    switch (action.type) {
        case ADD_TO_CART:
            return [
            ...state,
             {cardData: [ action.data]} 
            ];
        default:
            return state
}


 
}


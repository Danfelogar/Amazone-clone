export const initialState ={
    basket: [],
    user: null
};

//selector con reducer para hacer la suma de basket.price en forma de array


export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);//esto se encarga de encontrarme el index(o posicion seleccionada en el array)
                let newBasket = [...state.basket];

                if (index >= 0) {
                    newBasket.splice(index, 1);//splicer me dice que "index" es el nomero que me ocupa del array que quiero eliminar y el "1 " la cantidad que deseo eliminar
                } else {
                    console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }
        case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }

        default:
        return state;
    }
}

export default reducer
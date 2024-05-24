
import { createContext, useReducer } from "react";

const ItemContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
});

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartitemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartitemIndex > -1) {
            const existingItem = state.items[existingCartitemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartitemIndex] = updatedItem;
        }
        else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartitemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartitemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartitemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };

            updatedItems[existingCartitemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }


    return state;

};

export function ItemContextProvider({ children }) {

    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem (item){
        dispatchCartAction({type: 'ADD_ITEM', item})
    }

    function removeItem(id){
        dispatchCartAction({type: 'REMOVE_ITEM', id})
    }

    const itemContext = {
        items : cart.items,
        addItem,
        removeItem,
    };


    return <ItemContext.Provider value={itemContext}>{children}</ItemContext.Provider>
};

export default ItemContext;

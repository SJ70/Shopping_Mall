import { createAction, handleActions } from 'redux-actions';

const ADD = 'cart/add';
const SET_COUNT = 'cart/setCount';
const REMOVE = 'cart/remove';
const CLEAR = 'cart/clear';

export const addCart = createAction(ADD);
export const setCountCart = createAction(SET_COUNT);
export const removeCart = createAction(REMOVE);
export const clearCart = createAction(CLEAR);

export interface IProductInCart {
    id: number;
    count: number;
}

export interface IProductsInCart {
    list: IProductInCart[]
}

const initialState: IProductsInCart = {
    list: []
}

const cartReducer = handleActions<IProductsInCart, any> (
    {
        [ADD]: (state, {payload: {id}}) => {
            const idx = state.list.findIndex(item => item.id === id);
            if (idx === -1) {
                const item: IProductInCart = {id: id, count: 1}
                return {
                    list: [item, ...state.list]
                }
            }
            state.list[idx].count++;
            return {
                list: [...state.list]
            }
        },
        [SET_COUNT]: (state, {payload: {id, count}}) => {
            const idx = state.list.findIndex(item => item.id === id);
            state.list[idx].count = count;
            return {
                list: state.list.filter(item => item.count > 0)
            }
        },
        [REMOVE]: (state, {payload: {id}}) => ({
            list: state.list.filter(item => item.id !== id)
        }),
        [CLEAR]: () => ({
            list: []
        }),
    },
    initialState
);

export default cartReducer;
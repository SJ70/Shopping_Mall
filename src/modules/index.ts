import { combineReducers } from 'redux';
import userReducer from './user';
import cartReducer from './cart';

const rootReducer = combineReducers({	
    user: userReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
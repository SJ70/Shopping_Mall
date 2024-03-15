import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'user/login';

export const login = createAction(LOGIN);

export interface IUser {
    uid: string | null;
}

const initialState: IUser = {
    uid: null,
}

const userReducer = handleActions<IUser, any> (
    {
        [LOGIN]: (state, {payload: {user}}) => ({
            uid: user.uid,
        })
    },
    initialState
);

export default userReducer;
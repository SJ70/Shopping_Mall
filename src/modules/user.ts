import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'user/login';
const LOGOUT = 'user/logout';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

export interface IUser {
    uid: string | null;
    email: string | null;
}

const initialState: IUser = {
    uid: null,
    email: null,
}

const userReducer = handleActions<IUser, any> (
    {
        [LOGIN]: (state, {payload: {user, email}}) => ({
            uid: user.uid,
            email: user.email,
        }),
        [LOGOUT]: () => ({
            uid: null,
            email: null,
        })
    },
    initialState
);

export default userReducer;
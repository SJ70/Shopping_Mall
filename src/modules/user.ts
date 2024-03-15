import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'user/login';

export const login = createAction(LOGIN);

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
        })
    },
    initialState
);

export default userReducer;
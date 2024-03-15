import { useSelector } from 'react-redux'
import { IUser } from '../modules/user'
import { RootState } from '../modules';

const MyPage = () => {

    const user: IUser = useSelector((state: RootState) => state.user);

    return (
        <div>
            <span>email : {user.email}</span>
        </div>
    )
}

export default MyPage;
import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import PostContainer from "./components/PostContainer";

const App: FC = () => {
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])


    return (
        <div>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{users.map(user => user.name)}*/}
            <PostContainer/>
        </div>
    );
}

export default App;

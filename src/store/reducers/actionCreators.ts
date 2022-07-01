import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";


//{rekectWithValue} from thunkAPI object
export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            return data
        } catch (e) {
            return rejectWithValue('Couldn\'t fetch users')
        }
    }
)
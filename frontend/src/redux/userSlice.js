import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/authService';

export const loginUserAsync = createAsyncThunk('user/loginUser', async(userData, thunkAPI)=>{
    try{
        const response = await loginUser(userData);
        // const {token} = response;
        localStorage.setItem('token', response)
        return response;
    }  catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const registerUserAsync = createAsyncThunk(
    'user/register', 
    async (userData, {rejectWithValue}) => {
        try{
            const response = await registerUser(userData);
            return response;
        } catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        isLoggedIn: false,
        token: null,
    },
    reducers: {   
        logout:(state)=>{
            state.userInfo = null;
            state.isLoggedIn  = false,
            state.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state,action)=>{
                state.loading = false;
                state.userInfo = action.payload.userInfo;
                state.isLoggedIn = true;
                state.token = action.payload.token; 
            }) 
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
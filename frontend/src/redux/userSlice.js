import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { loginUser } from '../../api/authService';

export const loginUserAsync = createAsyncThunk('user/loginUser', async(userData, thunkAPI)=>{
    try{
        const response = await loginUser(userData);
        return response;
    }  catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

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
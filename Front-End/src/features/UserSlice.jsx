import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { getState }) => {
        const token = getState().user.token

        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })
        const data = await response.json()
        return data.body
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ( formData, { dispatch } ) => {

        const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(formData),     
        })
        const data = await response.json()
        const token = data.body.token

        dispatch(setToken(token))
        dispatch(fetchUser(token))

        return token
    }
)

export const changeName = createAsyncThunk(
    'user/changeName',
    async ( formData, { getState } ) => {
        
        const token = getState().user.token
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`,
                },
                body : JSON.stringify(formData),
        })
        const data = await response.json()
        return data.body
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: localStorage.getItem('token'),
        isLoading: false
    },

    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        },

        logout: (state) => {
            state.user = null
            state.token = null
            localStorage.removeItem('token')
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isLoading = false
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false
            })

            .addCase(changeName.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changeName.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            .addCase(changeName.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export const { setToken, logout } = userSlice.actions
export default userSlice.reducer
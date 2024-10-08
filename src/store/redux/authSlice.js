import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "../../utils/storageFn";

export const is_valid_string = (username) => {
    const pattern = /^[A-Za-z\s]+$/;
    return typeof username === "string" && username.trim() !== "" && pattern.test(username);
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: getLocalStorage('user'),
        isAuthenticated: !!getLocalStorage('user'),
    },
    reducers: {
        register: (state, action) => {
            const payload = action.payload;
            if (is_valid_string(payload)) {
                const trimmedPayload = payload.trim();
                state.userName = trimmedPayload;
                state.isAuthenticated = true;
                setLocalStorage("user", trimmedPayload);
            } else {
                console.error("Invalid username provided. Registration failed.");
            }
        },
        logout: (state) => {
            state.userName = null;
            state.isAuthenticated = false;
            clearLocalStorage('user');
        },
    }
});

export const { register, logout } = authSlice.actions;
export const userDetails = (value) => value?.auth
export default authSlice.reducer;

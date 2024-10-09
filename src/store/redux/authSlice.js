import { createSlice } from "@reduxjs/toolkit";

export const is_valid_string = (username) => {
  const pattern = /^[A-Za-z\s]+$/;
  return (
    typeof username === "string" &&
    username.trim() !== "" &&
    pattern.test(username)
  );
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: localStorage.getItem("user"),
    isAuthenticated: !!localStorage.getItem("user"),
  },
  reducers: {
    register: (state, action) => {
      const payload = action.payload;
      if (is_valid_string(payload)) {
        const trimmedPayload = payload.trim();
        state.userName = trimmedPayload;
        state.isAuthenticated = true;
        localStorage.setItem("user", trimmedPayload);
      } else {
        console.error("Invalid username provided. Registration failed.");
      }
    },
    logout: (state) => {
      state.userName = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { register, logout } = authSlice.actions;
export const userDetails = (value) => value?.auth;
export default authSlice.reducer;

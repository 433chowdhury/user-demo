import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type UsersState = {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
};

const initialState: UsersState = { users: [] };

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersState>) => {
      state.users = action.payload.users;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const selectUsers = (state: RootState) => state.userSlice.users;

export default userSlice.reducer;

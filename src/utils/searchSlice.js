import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchValue: "",
    },
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
    },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;

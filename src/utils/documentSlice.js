import { createSlice } from '@reduxjs/toolkit'

const documentSlice = createSlice({
    name: "DocumentsData",
    initialState: [],
    reducers: {
        getData: (state, action) => {
            return action.payload.documentsData
        }
    }
});

export const { getData } = documentSlice.actions

export default documentSlice.reducer
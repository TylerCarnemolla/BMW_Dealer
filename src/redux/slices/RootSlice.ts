import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        brand:"brand",
        model:"model",
        year:"year",
        color: "color",
    },
    reducers:{ 
        chooseBrand:(state,action) => {state.brand = action.payload}, //all we are doing is setting the intup to the state.name
        chooseModel:(state,action) => {state.model = action.payload},
        chooseYear:(state,action) => {state.year = action.payload},
        chooseColor:(state,action) => {state.color = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseModel, chooseYear, chooseColor} = rootSlice.actions
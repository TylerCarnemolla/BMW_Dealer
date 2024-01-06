import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        Make:"Make",
        Model:"Model",
        Year:"Year",
        Color: "Color",
        Price: "Price",
    },
    reducers:{ 
        chooseMake:(state,action) => {state.Make = action.payload}, //all we are doing is setting the intup to the state.name
        chooseModel:(state,action) => {state.Model = action.payload},
        chooseYear:(state,action) => {state.Year = action.payload},
        chooseColor:(state,action) => {state.Color = action.payload},
        choosePrice: (state,action) => {state.Price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel, chooseYear, chooseColor, choosePrice} = rootSlice.actions
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sort: '',
    sector: [],
    topic: [],
    pestle: [],
    region: [],
    source: [],
    search: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        productype: (state, action) => {
            state.sector = action.payload;
        },
        regiontype: (state, action) => {
            state.region = action.payload;
        },
        topictype: (state, action) => {
            state.topic = action.payload;
        },
        pestletype: (state, action) => {
            state.pestle = action.payload;
        },
        sourcetype: (state, action) => {
            state.source = action.payload;
        },
        searchParam: (state, action) => {
            state.search = action.payload;
        },
        sortType: (state, action) => {
            state.sort = action.payload
        }
    }
})

export default filterSlice.reducer;
export const { productype, searchParam, sortType, topictype, regiontype, pestletype, sourcetype, end_yeartype } = filterSlice.actions;
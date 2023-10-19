import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductsApi";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchproducts = createAsyncThunk('products/fetchproducts', async () => {
    const products = await getProducts();
    return products
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchproducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchproducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchproducts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.products = []
                state.error = action.error?.message;
            })
    }
});

export default productsSlice.reducer
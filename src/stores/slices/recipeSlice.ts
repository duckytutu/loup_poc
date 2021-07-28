import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../apis/recipesApi';
import { IRecipe } from "../../features/recipes/types/Recipes";

export interface RecipesState {
    list: IRecipe[];
}

export const initialState: RecipesState = {
    list: [],
};

export const getRecipesList = createAsyncThunk(
    'recipe/getList',
    async () => {
        const { data }: any = await getAll();
        return data;
    }
);

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setList: (state, { payload }) => {
            state.list = payload;
        }
    },
    extraReducers: {
        [getRecipesList.fulfilled as any]: (state, { payload }) => {
            state.list = payload;
        }
    },
});

export const { setList } = recipeSlice.actions;
export default recipeSlice.reducer;

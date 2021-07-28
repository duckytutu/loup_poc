import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '.'
import { getRecipesList } from "../stores/slices/recipeSlice";

const useRecipes = () => {
    const [loading, setLoading] = useState(false);
    const { list } = useAppSelector((state: any) => state.recipe);
    const dispatch = useAppDispatch();
    const getList = async () => {
        setLoading(true);
        try {
            await dispatch(getRecipesList());
            return Promise.resolve();
        } finally {
            setLoading(false);
        }
    };

    return {
        list,
        loading,
        getList
    }
}

export default useRecipes;

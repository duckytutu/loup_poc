import { create as createStore } from '../../testUtils';
import reducer, {
  initialState,
  setList,
  getRecipesList,
} from './recipeSlice';
import { getAll } from '../../apis/recipesApi';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: '' })).toEqual(initialState);
});

test('should handle list being set to current state', () => {
  expect(reducer(initialState, setList([{ id: 1, name: '' }]))).toEqual({
    list: [{ id: 1, name: '' }],
  });
});

test('should call "setList" action', () => {
  const { invoke } = createStore();
  const action = getRecipesList;
  invoke(action);
  expect(getAll).toHaveBeenCalled;
});

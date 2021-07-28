import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { store } from './stores';

const thunk =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action: any) => thunk(store)(next)(action);

  return { store, next, invoke };
};

const withReduxProvider = (Component: any) => (
  <Provider store={store}>{Component}</Provider>
);

const render = (
  ui: any,
  { preloadedState, store, ...renderOptions }: any = {}
) => {
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { withReduxProvider, thunk, create, render };

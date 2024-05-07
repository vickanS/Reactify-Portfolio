import { createStore } from 'redux';

// Här är din reducer
const initialState = {
  theme: 'dark'
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    default:
      return state;
  }
}

// Skapa storen
const store = createStore(themeReducer);

export default store;
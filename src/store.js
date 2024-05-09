import { createStore } from 'redux';

//reducern i det initiala tillståndet
const initialState = {
  theme: 'dark'
};

//Reducer-funktionen för hantering av tematillståndet
function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark' //växlar mellan dark och light tillstånd
      };
    default:
      return state;
  }
}

// Skapa storen
const store = createStore(themeReducer);

export default store;
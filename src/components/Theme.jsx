import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Theme.css'

function ThemeSwitcher() {
  const theme = useSelector(state => state.theme); // Hämtar nuvarande tema från Redux store
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); // Skickar en action för att växla tema
  };

  return (
    <button onClick={toggleTheme}>
      Växla till {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  );
}

export default ThemeSwitcher;

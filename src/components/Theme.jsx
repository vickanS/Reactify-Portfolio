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
    <label className="switch">
         <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
         <span className="slider round"></span>
       </label>
  );
}

export default ThemeSwitcher;

import React from 'react';

import MoonImage from '../../assets/moon.svg'
import SunImage from '../../assets/sun.svg'

const Header = ({ handleImageClick, theme }) => {
  return (
    <header>
      <h1>To-do list</h1>

      <button onClick={handleImageClick}>
        <img src={
          theme === 'light'
            ? SunImage
            : MoonImage
        } alt="Botão para trocar de tema" />
      </button>
    </header>
  );
};

export default Header;
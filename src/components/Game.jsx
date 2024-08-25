// Обычные КРЕСТИКИ-НОЛИКИ на русском языке

// import React, { useState } from 'react'
// import Board from './Board'
// import { calculateWinner } from '../helper'
// import classes from './../../src/index.css'

// const Game = () => {
//   const [board, setBoard] = useState(Array(9).fill(null))
//   const [xIsNext, setXIsNext] = useState(true)
//   const [language, setLanguage] = useState('ru')
//   const winner = calculateWinner(board)

//   const handleClick = (index) => {
//     const boardCopy = [...board]
//     // Определить был ли клик по ячейке или игра закончена
//     if (winner || boardCopy[index]) return
//     // Определить кто ходит Х или 0
//     boardCopy[index] = xIsNext ? 'X' : '0'
//     // Обновить наш стейт
//     setBoard(boardCopy)
//     setXIsNext(!xIsNext)
//   }



//   const startNewGame = () => {
//     return(
//         <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
//     )
//   }

//   return (
//     <div className={classes}>
//       <div className="wrapper">
//         {startNewGame()}
//         <Board squares={board} click={handleClick} />
//         <p className='game__info'>
//             {winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Game

// с переключением языков
// import React, { useState } from 'react'
// import Board from './Board'
// import { calculateWinner } from '../helper'
// import classes from './../index.css'
// import englishImg from './../../src/assets/img/English.png'
// import germanImg from './../../src/assets/img/German.png'
// import russianImg from './../../src/assets/img/russian.png'
// import ukrainianImg from './../../src/assets/img/ukrainian.png'

// const Game = () => {
//   const [board, setBoard] = useState(Array(9).fill(null))
//   const [xIsNext, setXIsNext] = useState(true)
//   const [language, setLanguage] = useState('ge')
//   const winner = calculateWinner(board)

//   const handleClick = (index) => {
//     const boardCopy = [...board]
//     // Определить был ли клик по ячейке или игра закончена
//     if (winner || boardCopy[index]) return
//     // Определить кто ходит Х или 0
//     boardCopy[index] = xIsNext ? 'X' : 'O'
//     // Обновить наш стейт
//     setBoard(boardCopy)
//     setXIsNext(!xIsNext)
//   }

//   const startNewGame = () => {
//     const clearFieldText = {
//       ru: 'Очистить поле',
//       en: 'Clear Field',
//       ua: 'Очистити поле',
//       ge: 'Feld löschen'
//     }

//     return (
//       <button className='start__btn' onClick={() => {
//         setBoard(Array(9).fill(null))
//         setLanguage(language)
//       }}>
//         {clearFieldText[language]}
//       </button>
//     )
//   }

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value)
//   }

//   // 1. Переключение языков
//   const languageOptions = [
//     { value: 'ua', label: 'УКР' },
//     { value: 'en', label: 'ENG' },
//     { value: 'ge', label: 'DEU' },
//     { value: 'ru', label: 'РУС' }
//   ]

//   // 2. Отображение текста в зависимости от выбранного языка
//   const gameText = {
//     ru: {
//       winner: 'Победитель:',
//       nextPlayer: 'Следующий игрок:'
//     },
//     en: {
//       winner: 'Winner:',
//       nextPlayer: 'Next player:'
//     },
//     ua: {
//       winner: 'Переможець:',
//       nextPlayer: 'Наступний iгрок:'
//     },
//     ge: {
//       winner: 'Gewinner:',
//       nextPlayer: 'Nächster Spieler:'
//     }
//   }

//   // Выбор фоновой картинки в зависимости от языка
//   let backgroundImage = russianImg
//   if (language === 'en') {
//     backgroundImage = englishImg
//   } else if (language === 'ge') {
//     backgroundImage = germanImg
//   } else if (language === 'ua') {
//     backgroundImage = ukrainianImg
//   }

//   return (
//     <div className={classes} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
//       <div className="wrapper">
//         {/* Выпадающий список для переключения языков */}
//         <div className='label__language'>
//           <label htmlFor="language-select">
//             {/* Language: */}
//           </label>
//           <select id="language-select" value={language} onChange={handleLanguageChange}>
//             {languageOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         {startNewGame()}
//         <Board squares={board} click={handleClick} />
//         {/* Отображение текста в зависимости от выбранного языка */}
//         <div className='box__info'>
//         <p className='game__info'> {winner
//           ? `${gameText[language].winner} ${winner}`
//           : `${gameText[language].nextPlayer} ${xIsNext ? 'X' : 'O'}`}
//         </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Game

import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';
import classes from './../index.css';
import englishImg from './../../src/assets/img/English.png';
import germanImg from './../../src/assets/img/German.png';
import russianImg from './../../src/assets/img/russian.png';
import ukrainianImg from './../../src/assets/img/ukrainian.png';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [language, setLanguage] = useState('ge');
  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null); // Проверка на заполненность всего поля

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    const clearFieldText = {
      ru: 'Очистить поле',
      en: 'Clear Field',
      ua: 'Очистити поле',
      ge: 'Feld löschen'
    };

    return (
      <button className='start__btn' onClick={() => {
        setBoard(Array(9).fill(null));
        setLanguage(language);
      }}>
        {clearFieldText[language]}
      </button>
    );
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Переключение языков
  const languageOptions = [
    { value: 'ua', label: 'УКР' },
    { value: 'en', label: 'ENG' },
    { value: 'ge', label: 'DEU' },
    { value: 'ru', label: 'РУС' }
  ];

  // Отображение текста в зависимости от выбранного языка
  const gameText = {
    ru: {
      winner: 'Победитель:',
      nextPlayer: 'Следующий игрок:',
      draw: 'Ничья'
    },
    en: {
      winner: 'Winner:',
      nextPlayer: 'Next player:',
      draw: 'Draw'
    },
    ua: {
      winner: 'Переможець:',
      nextPlayer: 'Наступний iгрок:',
      draw: 'Нічия'
    },
    ge: {
      winner: 'Gewinner:',
      nextPlayer: 'Nächster Spieler:',
      draw: 'Unentschieden'
    },
  };

  // Выбор фоновой картинки в зависимости от языка
  let backgroundImage = russianImg;
  if (language === 'en') {
    backgroundImage = englishImg;
  } else if (language === 'ge') {
    backgroundImage = germanImg;
  } else if (language === 'ua') {
    backgroundImage = ukrainianImg;
  }

  return (
    <div className={classes} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="wrapper">
        <div className='label__language'>
          <label htmlFor="language-select"></label>
          <select id="language-select" value={language} onChange={handleLanguageChange}>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {startNewGame()}
        <Board squares={board} click={handleClick} />
        <div className='box__info'>
          <p className='game__info'> 
            {winner 
              ? `${gameText[language].winner} ${winner}` 
              : isBoardFull 
                ? gameText[language].draw 
                : `${gameText[language].nextPlayer} ${xIsNext ? 'X' : 'O'}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Game;
'use strict';
(() => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 2;

  const langArr = {
    eng: {
      figure: ['rock', 'scissors', 'paper'],
      gameQuestionsOne: 'Do you want to quite the game?',
      gameQuestionsTwo: 'Do you want to continue the game?',
      score: 'Score',
      computer: 'Computer',
      player: 'Player',
      error: 'Choose rock, scissors or paper',
      winner: ['It\'s a tie', 'The computer won', 'You won'],
    },
    ru: {
      figure: ['камень', 'ножницы', 'бумага'],
      gameQuestionsOne: 'Вы хотите выйти из игры?',
      gameQuestionsTwo: 'Ещё?',
      score: 'Итог игры',
      computer: 'Компьютер',
      player: 'Вы',
      error: 'Выберите камень, ножницы или бумага',
      winner: ['Ничья', 'Компьютер выиграл', 'Вы выиграли'],
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang =
      language === 'EN' || language === 'ENG' ? langArr.eng : langArr.ru;

    return function start() {
      const randomNumber = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const computerAnswer = lang.figure[randomNumber];
      const playerAnswer = prompt(lang.figure);

      const askPlayer = () => {
        const question = confirm(lang.gameQuestionsTwo);
        if (question !== true) {
          const exitQuestion = confirm(lang.gameQuestionsOne);
          if (exitQuestion === true) {
            alert(`
              ${lang.score}
              ${lang.computer}: ${result.computer},
              ${lang.player}: ${result.player}
            `);
            return;
          } else {
            start();
          }
        } else {
          start();
        }
      };

      if (playerAnswer === null) {
        const exitQuestion = confirm(lang.gameQuestionsOne);
        if (exitQuestion === true) {
          alert(`
            ${lang.score}
            ${lang.computer}: ${result.computer},
            ${lang.player}: ${result.player}
          `);
        } else {
          start();
        }
      } else if (!lang.figure.includes(playerAnswer.toLocaleLowerCase())) {
        alert(lang.error);
        start();
      } else if (computerAnswer === playerAnswer.toLocaleLowerCase()) {
        alert(`
          ${lang.computer}: ${computerAnswer},
          ${lang.player}: ${playerAnswer.toLocaleLowerCase()},
          ${lang.score}: ${lang.winner[0]}
        `);
        askPlayer();
      } else if (
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[0] && playerAnswer.toLocaleLowerCase() === lang.figure[1]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[2] && playerAnswer.toLocaleLowerCase() === lang.figure[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[1] && playerAnswer.toLocaleLowerCase() === lang.figure[2])
      ) {
        result.computer += 1;
        alert(`
          ${lang.computer}: ${computerAnswer},
          ${lang.player}: ${playerAnswer.toLocaleLowerCase()},
          ${lang.score}: ${lang.winner[1]}
        `);
        askPlayer();
      } else if (
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[1] && playerAnswer.toLocaleLowerCase() === lang.figure[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[0] && playerAnswer.toLocaleLowerCase() === lang.figure[2]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang.figure[2] && playerAnswer.toLocaleLowerCase() === lang.figure[1])
      ) {
        result.player += 1;
        console.log(result.player);
        alert(`
          ${lang.computer}: ${computerAnswer},
          ${lang.player}: ${playerAnswer.toLocaleLowerCase()},
          ${lang.score}: ${lang.winner[2]}
        `);
        askPlayer();
      }
    };
  };
  window.RPS = game;
})();

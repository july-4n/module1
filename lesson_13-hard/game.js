'use strict';
(() => {
  const FIGURES__RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES__ENG = ['rock', 'scissors', 'paper'];
  const MIN_VALUE = 0;
  const MAX_VALUE = 2;

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
      language === 'EN' || language === 'ENG' ? FIGURES__ENG : FIGURES__RUS;

    return function start() {
      const randomNumber = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const computerAnswer = lang[randomNumber];
      const playerAnswer = prompt(lang);

      const askPlayer = () => {
        const question = confirm('Ещё?');
        if (question !== true) {
          const exitQuestion = confirm('Вы хотите выйти из игры?');
          if (exitQuestion === true) {
            alert(`
              Итог игры:
              Компьютер: ${result.computer},
              Вы: ${result.player}
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
        const exitQuestion = confirm('Вы хотите выйти из игры?');
        if (exitQuestion === true) {
          alert(`
            Итог игры:
            Компьютер: ${result.computer},
            Вы: ${result.player}
          `);
        } else {
          start();
        }
      } else if (!lang.includes(playerAnswer.toLocaleLowerCase())) {
        alert(`Выберите камень, ножницы или бумага`);
        start();
      } else if (computerAnswer === playerAnswer.toLocaleLowerCase()) {
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Результат: Ничья
        `);
        askPlayer();
      } else if (
        // eslint-disable-next-line max-len
        (computerAnswer === lang[0] && playerAnswer.toLocaleLowerCase() === lang[1]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang[2] && playerAnswer.toLocaleLowerCase() === lang[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang[1] && playerAnswer.toLocaleLowerCase() === lang[2])
      ) {
        result.computer += 1;
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Результат: Компьютер выиграл
        `);
        askPlayer();
      } else if (
        // eslint-disable-next-line max-len
        (computerAnswer === lang[1] && playerAnswer.toLocaleLowerCase() === lang[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang[0] && playerAnswer.toLocaleLowerCase() === lang[2]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === lang[2] && playerAnswer.toLocaleLowerCase() === lang[1])
      ) {
        result.player += 1;
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Результат: Вы выиграли
        `);
        askPlayer();
      }
    };
  };
  window.RPS = game;
})();

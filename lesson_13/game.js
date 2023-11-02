'use strict';
(() => {
  const FIGURES__RUS = ['камень', 'ножницы', 'бумага'];
  const MIN_VALUE = 0;
  const MAX_VALUE = 2;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const randomNumber = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const computerAnswer = FIGURES__RUS[randomNumber];
      const playerAnswer = prompt(FIGURES__RUS);

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
      } else if (!FIGURES__RUS.includes(playerAnswer.toLocaleLowerCase())) {
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
        (computerAnswer === FIGURES__RUS[0] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[1]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES__RUS[2] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES__RUS[1] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[2])
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
        (computerAnswer === FIGURES__RUS[1] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES__RUS[0] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[2]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES__RUS[2] && playerAnswer.toLocaleLowerCase() === FIGURES__RUS[1])
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

'use strict';
(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];
  const MIN_VALUE = 0;
  const MAX_VALUE = 2;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    let result = {
      player: 5,
      computer: 5,
    };

    let computerFirst = false;
    let checkFlag = true;
    let answerPlayerFlag = true;
    let gameStart = true;

    const message = () => {
      alert(`
        Счет:
        Компьютер: ${result.computer},
        Вы: ${result.player}
      `);
    };

    const getFirstMove = () => {
      const randomNumber = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const computerAnswer = FIGURES[randomNumber];
      console.log(computerAnswer);
      const playerAnswer = prompt('Выберите камень, ножницы или бумага');
      if (playerAnswer === null) {
        const exitQuestion = confirm('Вы хотите выйти из игры?');
        if (exitQuestion === true) {
          answerPlayerFlag = false;
          checkFlag = false;
          return;
        } else {
          getFirstMove();
        }
        // eslint-disable-next-line max-len
      } else if (!FIGURES.includes(playerAnswer.toLocaleLowerCase()) || isNaN.playerAnswer) {
        alert('Вы должны ввести камень, ножницы или бумага');
        getFirstMove();
      } else if (computerAnswer === playerAnswer.toLocaleLowerCase()) {
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Ничья. Выберите ещё раз!
        `);
        getFirstMove();
      } else if (
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES[1] && playerAnswer.toLocaleLowerCase() === FIGURES[0]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES[0] && playerAnswer.toLocaleLowerCase() === FIGURES[2]) ||
        // eslint-disable-next-line max-len
        (computerAnswer === FIGURES[2] && playerAnswer.toLocaleLowerCase() === FIGURES[1])
      ) {
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Ваш ход первый!
        `);
      } else {
        alert(`
          Компьютер: ${computerAnswer},
          Вы: ${playerAnswer.toLocaleLowerCase()},
          Компьютер загадывает число!
        `);
        return computerFirst = true;
      }
    };

    return function start() {
      const resetGame = () => {
        computerFirst = false;
        checkFlag = true;
        gameStart = true;
        result = {
          player: 5,
          computer: 5,
        };
        start();
      };

      if (gameStart === true) {
        getFirstMove();
      }

      const checkResult = () => {
        if (result.computer <= 0) {
          result.computer = 0;
          message();
          checkFlag = false;
          const question = confirm(`
            Вы выиграли! Хотите сыграть ещё?
          `);
          if (question) {
            resetGame();
          }
        } else if (result.player <= 0) {
          result.player = 0;
          message();
          checkFlag = false;
          const question = confirm(`
            Компьютер выиграл! Хотите сыграть ещё?
          `);
          if (question) {
            resetGame();
          }
        } else {
          message();
        }
      };

      const computerFirstMove = () => {
        const randomNumber = getRandomIntInclusive(1, result.computer);
        console.log(randomNumber);
        const playerAnswer = confirm(`Число четное?`);
        const computerAnswer = randomNumber % 2 === 0;

        if ((playerAnswer === true && computerAnswer === true) ||
          (playerAnswer === false && computerAnswer === false)) {
          result = {
            computer: result.computer - randomNumber,
            player: result.player + randomNumber,
          };
          checkResult();
          if (checkFlag === true) {
            gameStart = false;
            computerFirstMove();
          }
        } else {
          result = {
            computer: result.computer + randomNumber,
            player: result.player - randomNumber,
          };
          checkResult();
          if (checkFlag === true) {
            gameStart = false;
            computerFirstMove();
          }
        }
      };

      const playerFirstMove = () => {
        const playerAnswer = prompt(`Введите число от 1 до ${result.player}`);
        if (playerAnswer === null) {
          checkResult();
          return;
        }
        const randomNumber = getRandomIntInclusive(1, result.computer);
        const computerAnswer = randomNumber % 2 === 0;
        const playerAnswerCheck = playerAnswer % 2 === 0;

        if ((Number.parseInt(playerAnswer) > result.player) ||
          isNaN(parseInt(playerAnswer)) ||
          (Number.parseInt(playerAnswer) < 1)) {
          alert(`Следует ввести число от 1 до ${result.player}`);
          playerFirstMove();
        } else if (playerAnswerCheck === true && computerAnswer === true) {
          result = {
            computer: result.computer + Number.parseInt(playerAnswer),
            player: result.player - Number.parseInt(playerAnswer),
          };
          checkResult();
          if (checkFlag === true) {
            gameStart = false;
            playerFirstMove();
          }
        } else {
          result = {
            computer: result.computer - Number.parseInt(playerAnswer),
            player: result.player + Number.parseInt(playerAnswer),
          };
          checkResult();
          if (checkFlag === true) {
            gameStart = false;
            playerFirstMove();
          }
        }
      };

      if (computerFirst === true && answerPlayerFlag === true) {
        computerFirstMove();
      } else if (computerFirst === false && answerPlayerFlag === true) {
        playerFirstMove();
      } else {
        return;
      }
    };
  };
  window.Marble = game;
})();

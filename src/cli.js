import readlineSync from 'readline-sync';

export const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
};
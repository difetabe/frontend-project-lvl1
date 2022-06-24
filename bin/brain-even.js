// описание логики игры brain-even

// алгоритм
// 1. выдается строка с текстом Answer "yes" if the number is even, otherwise answer "no".
// 2. генерируется случайное число
// число проверяется на четность, значение присваевается перемменной correctAnswer(если число четное - присваетвается 'yes', в случае нечетного - 'no')
// 3. выдается строка "ваш ответ"
// 4. проверка ответа пользователя на истинность (если тру - текс "Correct!" и продолжить(повторить 3 раза), если фолс - 'usersAnswer' is wrong answer ;(. Correct answer was 'correctAnswer'.
// Let's try again, userName! выйти из цикла )
// 5. при выполнении цикла 3 раза - победа и текст "Congratulations, Username!"
const userName = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
console.log('Hi ' + userName + '!');

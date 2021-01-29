import Prompt from 'prompt-sync';

const prompt = Prompt();

console.log('이름을 입력해주세요.');
const name = prompt('> ');
console.log(`안녕하세요, ${name}! 만나서 반가워요!`);

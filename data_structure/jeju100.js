'use strict';

// 1
let nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

// 2
let arr = [200, 100, 300];
arr = arr.fill([10000, 300], 2).flat();
console.log(arr);

// 3. 4
// 4. 2
// 5. 4
// 6. 2
// 7. 2, 3
// 8. 84
// 9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
console.log(result);

const no10 = (num) => {
  for (let i = 0; i < num; i++) {
    const line = Array.from({ length: num - 1 - i }, () => ' ').concat(Array.from({ length: i }, () => '*'));
    const reverseLine = line.slice().reverse();
    console.log(line.concat('*').concat(reverseLine).join(''));
  }
};
const no11 = (num) => Array.from(Array(num + 1).keys()).reduce((a, c) => a + c);
const no11 = (num) => num * (num + 1) / 2;

// 12
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log('파이어볼');
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

const no13 = (index) => {
  const solarSystem = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  console.log(solarSystem[index - 1]);
}

const no14 = (num) => num % 3 === 0 ? '짝' : num;
const no15 = (name) => `안녕하세요. 저는 ${name}입니다.`;
const no16 = (string) => string.split('').reverse().join('');
const no17 = (height) => height > 150 ? 'YES' : 'NO';
const no18 = (scores) => Math.ceil(scores.split(' ').reduce((a, c) => Number(a) + Number(c))/3);
const no19 = (a, b) => Math.pow(a, b); //Array(b).fill(a).reduce((a, c) => a * c);
const no20 = (a, b) => `${Math.floor(a / b)} ${a % b}`;
// 21. 5
// 22. 2
// 23. X
const no24 = (string) => string.toUpperCase();
const no25 = (r) => r * r * Math.PI;
const no26 = (planet) => {
  const solarSystem = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
  };
  return solarSystem[planet];
}
const no27 = (std_name, score) => {
  const result = {};
  const scores = score.split(' ');
  std_name.split(' ').forEach((n, i) => result[n] = scores[i]);
  return result;
}
const no28 = (string) => Array.from({ length: string.length - 1 }, (_, i) => `${string[i]} ${string[i + 1]}`);
const no29 = (string) => string === string.toUpperCase() ? 'YES' : 'NO';
const no29 = (string) => string.charCodeAt() > 96 ? 'NO' : 'YES';
const no30 = (string, search) => string.indexOf(search);

console.log(no20(7, 2));
console.log(no24('asdf'));
console.log(no26('토성'));
console.log(no27('a b', '80 90'));
console.log(no28('Javascript'));
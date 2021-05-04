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
// const no11 = (num) => num * (num + 1) / 2;

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
// const no29 = (string) => string === string.toUpperCase() ? 'YES' : 'NO';
const no29 = (string) => string.charCodeAt() > 96 ? 'NO' : 'YES';
const no30 = (string, search) => string.indexOf(search);

// 31. 3, 5
const no32 = (string) => string.split(' ').length;
const no33 = (array) => array.reverse();
const no34 = (heights) => heights.split(' ').every((e, i, arry) => {
  if (i < arry.length - 1) {
    return +e < +arry[i + 1]
  } else {
    return true
  }
});
const no35 = (n) => {
  return (times) => Math.pow(n, times);
}
// const a = no35(2);
// console.log(a(10))

const no36 = (n) => Array.from({ length: 9 }, (_, i) => (i + 1) * n);
const no37 = (array) => {
  const base = {};
  let max = ['', 0];

  array.forEach((a) => base[a] = base[a] ? base[a] + 1 : 1 );
  Object.keys(base).forEach((key) => {
    if (base[key] > max[1]) max = [key, base[key]];
  });
  return `${max[0]}(이)가 총 ${max[1]}표로 반장이 되었습니다.`;
}
const no38 = (scores) => {
  const sortedScores = scores.split(' ').map((s) => +s).sort((a,b) => b - a);
  const result = [];
  let count = 0;
  for (let i = 0; i < sortedScores.length; i++) {
    if (result[result.length - 1] !== sortedScores[i]) {
      if (count > 2) break;
      count++;
    }
    result.push(sortedScores[i]);
  }
  return result.length;
}
const no39 = (string) => string.replace(/q/g, 'e');
const no40 = (limit, array) => {
  let total = 0;
  let count = 0;
  array.forEach((e) => {
    if (total + e < limit) {
      total += e;
      count += 1;
    }
  })
  return count;
}

console.log(no40(70, [20, 20, 20, 20, 20]))
// console.log(no39('querty hqllo my namq is hyqwon'));
// console.log(no38('97 86 75 66 55 97 85 97 97 95 86'))
// console.log(no37(['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']))
// console.log(no36(3))


// console.log(no34('1 2 3 4 5'))
// console.log(no34('1 2 3 4 5 0'))
// console.log(no20(7, 2));
// console.log(no24('asdf'));
// console.log(no26('토성'));
// console.log(no27('a b', '80 90'));
// console.log(no28('Javascript'));
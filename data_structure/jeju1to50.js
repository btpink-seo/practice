'use strict';

// 1
// let nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);
const no1 = (array) => array.slice(0, array.length - 2);
// 2
// let arr = [200, 100, 300];
// arr = arr.fill([10000, 300], 2).flat();
const no2 = (array) => array.fill([10000, 300], 2).flat();
// console.log(arr);

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
// console.log(result);

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
// console.log(x.health, x.mana, x.armor);
// x.attack();

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

const no41 = (num) => {
  const base = Array.from({ length: Math.ceil(Math.sqrt(num)) + 1 }, (_, i) => i);

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (base[i] === 0) continue;

    if (num % i === 0) return false;

    for (let j = 1; j * i < base.length; j++) base[j * i] = 0;
  }
  return true;
}
// let num = 1;
// while (num <= 100) {
//   if (no41(num)) console.log(num);
//   num++;
// }
// console.log(no41(4))

const no42 = (month, day) => {
  const dayCount = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const sumDayCount = [];
  const week = ['wed', 'thu', 'fri', 'sat', 'sun', 'mon', 'tue'];

  for (let i = 1; i < dayCount.length; i++) sumDayCount.push(dayCount.slice(0, i).reduce((a, c) => a + c));

  return week[(sumDayCount[month - 1] + day - 1) % 7]
}
// console.log(no42(12, 21))

const no43 = (num) => {
  let a = num;
  let b = '';

  while (a !== 0) {
    b = String(a % 2) + b;
    a = Math.floor(a / 2);
  }
  return b;
}

// console.log(no43(3))

const no44 = (num) => String(num).split('').reduce((a, c) => Number(a) + Number(c))

// console.log(no44(18234))
// console.log(no44(3849))

const no45 = () => new Date().getFullYear();

const no46 = () => Array.from({ length: 20 }, (_, i) => i + 1).join('').split('').reduce((a, c) => Number(a) + Number(c))
// console.log(no46())

const no47 = (data) => Array.from(new Set(data)).length;

const no48 = (string) => string.split('').map((s) => s.charCodeAt() > 96 ? s.toUpperCase() : s.toLowerCase()).join('');

// console.log(no48('AAABBBcccdddEEefFf'))

const no49 = (array) => array.sort()[array.length - 1];
// const no49 = (array) => Math.max(...array);

// console.log(no49([1,4,6,87,4,99,10]))


const no50 = (array) => {
  const tmp = array.slice();
  let limit = tmp.length;
  let sorted = true;

  while (sorted) {
    sorted = false;

    for (let i = 0; i < limit; i++) {
      if (tmp[i] > tmp[i + 1]) {
        [tmp[i], tmp[i + 1]] = [tmp[i + 1], tmp[i]];
        sorted = true;
      }
    }
    limit--;
  }
  return tmp;
}
console.log(no50([10, 4, 1, 3, 5, 2, 7, 9]))

// console.log(no40(70, [20, 20, 20, 20, 20]))
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

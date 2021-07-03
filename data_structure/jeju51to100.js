'use strict';

const no51 = (array) => {
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
  };

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(no51(left), no51(right));
};

// console.log('result', no51([3,1,5,9,2,7,6,8,4]))
// console.log('result', no51([4,2,7,1,3]))


const no52 = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return no52(left).concat(pivot).concat(no52(right));
};

// console.log('result', no52([3,1,5,9,2,7,6,8,4]))
// console.log('result', no52([4,2,7,1,3]))
// console.log('result', no52([5,3,8,4,9,1,6,2,7]))

const no53 = (string) => {
  const parentheses = [];
  const braces = [];
  const brackets = [];

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '(':
        parentheses.push(string[i]);
        break;
      case '{':
        braces.push(string[i]);
        break;
      case '[':
        brackets.push(string[i]);
        break;
      case ')':
        if (parentheses.length === 0) return false;
        parentheses.pop();
        break;
      case '}':
        if (braces.length === 0) return false;
        braces.pop();
        break;
      case ']':
        if (brackets.length === 0) return false;
        brackets.pop();
        break;
      default:
        break;
    }
  }

  return parentheses.length === 0 && braces.length === 0 && brackets.length === 0;
};


// console.log('result', no53('{sdfg}{}[rrr]]wer(ssd)serg'))
// console.log('result', no53('sssd[{werg()eg}](rg)wer[weg]'))
// console.log('result', no53('sdrg[sdrg{ser}()rrg]{we'))

const no54 = (nums) => {
  const target = nums.slice().sort();
  for (let i = 0; i < target.length - 1; i++) {
    if (target[i + 1] - target[i] !== 1) {
      return false;
    }
  }
  return true;
};

// console.log('result', no54([1, 2, 3, 4, 5]))
// console.log('result', no54([1, 4, 2, 6, 3]))

const route = [];
const no55 = (num, start, end, temp) => {
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  no55(num - 1, start, temp, end);
  route.push([start, end]);
  no55(num - 1, temp, end, start);
};

// no55(3, 'A', 'B', 'C');
// console.log(route);
// console.log(route.length);

const no56 = (data) => {
  let result = [];
  Object.keys(data).forEach((key) => {
    if (key !== 'korea') {
      result.push([key, Math.abs(data['korea'] - data[key])]);
    }
  });

  result.sort((a, b) => b[1] - a[1]);
  return result[result.length - 1].join(' ');
};
const data = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England': 242900
};
// console.log(no56(data))


const no57 = (num) => Array.from({ length: num }, (_, i) => i + 1).join('').replace(/([2-9]|0)/g, '').length;
// console.log(no57(1000))


const no58 = (num) => String(num).split('').reverse().map((n, i) => i && i % 3 === 0 ? [',', n] : n).flat().reverse().join('');
// console.log(no58(123456789))


const no59 = (string) => {
  const half = Math.floor((50 - string.length) / 2)
  const equals = Array.from({ length: half }, (_) => '=');
  const bonus = string.length % 2 !== 0 ? '=' : '';
  return [...equals, string, ...equals, bonus].join('');
};
// console.log(no59('hi'), no59('hi').length);
// console.log(no59('hio'), no59('hio').length);


const no60 = (students) => students.slice().sort().forEach((e, i) => console.log(`번호: ${i + 1}, 이름: ${e}`));
// console.log(no60(['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채언']))

const no61 = (string) => {
  const result = {};
  string.split('').forEach((s) => result[s] = result[s] ? result[s] + 1 : 1 );
  return Object.keys(result).map((key) => [key, result[key]]).flat().join('');
}
// console.log(no61('aaabbbbcdddd'))

// 20 1 90 9 23
const no62 = () => {
  return String('U'.charCodeAt() - 'A'.charCodeAt()) +
    String('B'.charCodeAt() - 'A'.charCodeAt()) +
    String('{'.charCodeAt() - '!'.charCodeAt()) +
    String('J'.charCodeAt() - 'A'.charCodeAt()) +
    String('X'.charCodeAt() - 'A'.charCodeAt());
};
// console.log(no62())


const no63 = (string) => string.split(' ').reduce((a, c) => a + c[0], '');
// console.log(no63('복잡한 세상 편하게 살자'))


const no64 = (num) => {
  for (let i = Math.floor(num / 7); i >= 0; i--) {
    for (let j = 0; j <= Math.floor(num / 3); j++) {
      if (7 * i + 3 * j === num) return [i, j, i + j];
    }
  }
  return -1;
};
// console.log(no64(24))
// console.log(no64(30))
// console.log(no64(25))
// console.log(no64(2))
// console.log(no64(8))

const no65 = (a, b) => a.map((aa, i) => i % 2 === 0 ? [aa, b[i]] : [b[i], aa]);
// console.log(no65([1, 2, 3, 4], ['a', 'b', 'c', 'd']))

const no66 = (array, role) => {
  const roles = role.split('');

  return array.map((string) => {
    const indexes = roles.map((r) => string.indexOf(r)).filter((e) => e > -1);
    return indexes.every((index, i) => {
      if (i === indexes.length - 1 || index === -1) return true;
      return index < indexes[i + 1];
    });
  });
};
// console.log(no66(['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ', 'ADB'], 'ABD'))

const no67 = (num) => {
  const sum = (num) => num * (num - 1) / 2;
  let people = 2;

  do {
    const sumResult = sum(people);
    if (num <= sumResult) return [num - sum(people - 1), people];
    people++;
  } while (true);
};
// console.log(no67(2))
// console.log(no67(3))
// console.log(no67(59))
// console.log(no67(66))

const no68 = (timeTable, current) => {
  return timeTable.map((time) => {
    const diff = (new Date(`1987/11/23 ${time}`) - new Date(`1987/11/23 ${current}`)) / 60000;
    if (diff < 0) {
      return '지나갔습니다';
    } else {
      const hour = Math.floor(diff / 60);
      return `${hour < 10 ? '0' + String(hour) : hour}시간 ${diff - 60 * hour}분`;
    }
  });
};
// console.log(no68(['12:30', '13:20', '14:13'], '9:40'))
// console.log(no68(['12:30', '13:20', '14:13'], '12:30'))
// console.log(no68(['12:30', '13:20', '14:13'], '12:40'))
// console.log(no68(['12:30', '13:20', '14:13'], '13:40'))
// console.log(no68(['12:30', '13:20', '14:13'], '15:40'))

const no69 = (num) => {
  const getPrimeNumbers = (number) => {
    const result = [];
    const used = [];
    for (let i = 2; i <= number; i++) {
      if (used[i]) continue;

      let isPrime = true;
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
        if (i !== j && i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        for (let k = 1; k < number; k++) {
          if (i * k <= number) {
            used[i * k] = true;
          } else {
            break;
          }
        }
        result.push(i);
      }
    }
    return result;
  };

  const primes = getPrimeNumbers(num);
  const result = [];
  const used = [];
  let endLoop = false;

  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j <= primes.length; j++) {
      if (primes[i] + primes[j] === num) {
        const diff = Math.abs(primes[i] - primes[j]);

        if (used[diff]) {
          endLoop = true;
          break;
        }
        used[diff] = true;
        result.push([primes[i], primes[j]]);
      }
    }
    if (endLoop) break;
  }
  return [result[0], result[result.length - 1]];
};
// console.log(no69(10))
// console.log(no69(100))
// console.log(no69(200))
// console.log(no69(98))
// console.log(no69(56))

const no70 = (a, b) => {
  // 1. 곱하지 못하면 -1
  if (a[0].length !== b.length && a.every((e) => e.length === a[0].length) && b.every((e) => e.length === b[0].length)) return -1;

  const newB = [];
  for (let i = 0; i < b.length; i++) {
    const col = [];
    for (let j = 0; j < b[0].length; j++) col.push(b[j][i]);

    newB.push(col);
  }
  // 2. 그 외에는 출력
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < newB[0].length; j++) {
      result[i] = result[i] ? result[i] : [];
      result[i][j] = a[i].reduce((ac, cu, i) => ac + cu * newB[j][i], 0)
    }
  }

  return result;
};
// console.log(no70([[1, 2], [2, 4]], [[1, 2], [4, 3]]))
// console.log(no70([[1, 2], [2, 4]], [[1, 0], [0, 3]]))


const no71 = (graph, start) => {
  const dfs = (data, key, call, result) => {
    result.push(key);
    const values = data[key];
    if (values.length === 1) return;

    const child = values.filter((value) => value !== call);

    child.forEach((value) => dfs(data, value, key, result));
  };

  const output = [start];
  graph[start].forEach((value) => dfs(graph, value, start, output));
  return output.join(' ');
};
// console.log(no71({
//   'E': ['D', 'A'],
//   'F': ['D'],
//   'A': ['E', 'C', 'B'],
//   'B': ['A'],
//   'C': ['A'],
//   'D': ['E', 'F'],
// }, 'E'))

const no72 = (graph, start) => {
  const bfs = (data, key, call, result) => {
    const values = data[key];
    if (values.length === 1) return;

    const child = values.filter((value) => value !== call);

    child.forEach((value) => {
      result.push(value);
      bfs(data, value, key, result)
    });
  };

  const output = [start].concat(graph[start]);
  graph[start].forEach((value) => bfs(graph, value, start, output));
  return output.join(' ');
};
// console.log(no72({
//   'E': ['D', 'A'],
//   'F': ['D'],
//   'A': ['E', 'C', 'B'],
//   'B': ['A'],
//   'C': ['A'],
//   'D': ['E', 'F'],
// }, 'E'))

const no73 = (graph, start, end) => {
  const search = (data, searchStart, targetEnd, call, result, cnt) => {
    cnt++;
    if (data[searchStart].includes(targetEnd)) return result.push(cnt);
    const child = data[searchStart].filter((value) => value !== call);
    child.forEach((value) => search(data, value, targetEnd, searchStart, result, cnt));
  };

  const result = [];
  const basic = graph[start];
  if (basic.includes(end)) return 1;

  basic.forEach((value) => search(graph, value, end, start, result, 1));
  return Math.min(...result);
};
// console.log(no73({
//   'A': ['B', 'C'],
//   'B': ['A', 'D', 'E'],
//   'C': ['A', 'F'],
//   'D': ['B'],
//   'E': ['B', 'F'],
//   'F': ['C', 'E'],
// }, 'D', 'C'))

const no74 = (graph, start, end) => {
  const result = [];
  const search = (target, used, cnt) => {
    cnt++;
    used.push(target);
    if (graph[target].includes(end)) {
      console.log(cnt, target, graph[target])
      result.push(cnt);
    }

    const child = graph[target].filter((value) => !used.includes(value));
    child.forEach((value) => {
      if (value !== end) {
        search(value, used, cnt)
      }
    });
  };

  graph[start].forEach((value) => search(value, [start], 1));
  return Math.max(...result);
};
// console.log(no74({
//   1: [2, 3, 4],
//   2: [1, 3, 4, 5, 6],
//   3: [1, 2, 7],
//   4: [1, 2, 5, 6],
//   5: [2, 4, 6, 7],
//   6: [2, 4, 5, 7],
//   7: [3, 5, 6],
// }, 1, 7))

const no75 = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (!/([^369])/.test(String(i))) {
      // console.log(i)
      count++;
    }
  }
  return count;
};
// console.log(no75(93))

const no76 = (size, searchSize, map) => {
  const count = [];
  const search = (x, y) => {
    let temp = 0;
    for (let i = 0; i < searchSize; i++) {
      for (let j = 0; j < searchSize; j++) {
        if (map[x + i][y + j]) temp++;
      }
    }
    count.push(temp);
  }

  for (let i = 0; i + searchSize <= size; i++) {
    for (let j = 0; j + searchSize <= size; j++) {
      search(i, j);
    }
  }
  return Math.max(...count);
};
// console.log(no76(5, 3, [
//   [1, 0, 0, 1, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0]
// ]))

const no77 = (stringA, stringB) => {
  // const basic = stringA.length > stringB.length ? stringB.split('') : stringA.split('');

  let basic, target;
  if (stringA.length > stringB.length) {
    basic = stringB.split('');
    target = stringA;
  } else {
    basic = stringA.split('');
    target = stringB;
  }

  const result = [];
  // console.log(basic, target)
  for (let i = basic.length; i > 0; i--) {
    for (let j = 0; j + i <= basic.length; j++) {
      const search = basic.slice(j, j + i).join('');

      console.log(i, basic.join(''), target, search, target.indexOf(search) > -1)

      if (target.indexOf(search) > -1) {
        console.log('match!!', search)
        // return i;
        result.push(search)
      }
    }
  }
  console.log(result)
  return 0;
};
// console.log(no77('THISISSTRINGS', 'THISIS')) // 6
// console.log(no77('THISISSTRINGS', 'TATHISISKKQQAEW')) // 6
// console.log(no77('THISISSTRINGS', 'KIOTHIKESSISKKQQAEW')) // 6
// console.log(no77('THISISSTRINGS', 'TKHKIKSIS')) // 3

const no78 = () => {};
// console.log(no78())

const no79 = () => {};
// console.log(no79())

const no80 = () => {};
// console.log(no80())


const no81 = () => {};
// console.log(no81())

const no82 = () => {};
// console.log(no82())

const no83 = () => {};
// console.log(no83())

const no84 = () => {};
// console.log(no84())

const no85 = () => {};
// console.log(no85())

const no86 = () => {};
// console.log(no86())

const no87 = () => {};
// console.log(no87())

const no88 = () => {};
// console.log(no88())

const no89 = () => {};
// console.log(no89())

const no90 = () => {};
// console.log(no90())


const no91 = () => {};
// console.log(no91())

const no92 = () => {};
// console.log(no92())

const no93 = () => {};
// console.log(no93())

const no94 = () => {};
// console.log(no94())

const no95 = () => {};
// console.log(no95())

const no96 = () => {};
// console.log(no96())

const no97 = () => {};
// console.log(no97())

const no98 = () => {};
// console.log(no98())

const no99 = () => {};
// console.log(no99())

const no100 = () => {};
// console.log(no100())


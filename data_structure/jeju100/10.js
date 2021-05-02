const chrismas = (num) => {
  for (let i = 0; i < num; i++) {
    const line = Array.from({ length: num - 1 - i }, () => ' ').concat(Array.from({ length: i }, () => '*'));
    const reverseLine = line.slice().reverse();
    console.log(line.concat('*').concat(reverseLine).join(''));
  }
};

chrismas(5);
chrismas(10);

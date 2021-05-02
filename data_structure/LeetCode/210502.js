// n개의 다른 온라인 코스가 넘버링 되어있습니다 1~n
// 주어진 courses (courses[i] = [기간, 마지막날])
// 반드시 기간동안 진행되어야하며, 마지막날 이전에 끝나야한다.
// 1일 부터 시작해야하며, 동시에 들을 수 없다.
// 들을 수 있는 최대 강의 갯수를 구하라

/**
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function(courses) {
  console.log(courses.sort((a, b) => a[1] - b[1]))

  heap = []
  t = 0
  c = 0

  for (let i = 0; i < courses.length; i++) {
    const element = courses[i];
    heap.push(element[0])
    t += element[0]

    if (t > element[1]) {
      t -= heap.sort((a, b) => a - b).pop()
      c -= 1
    }
    c += 1

    console.log(heap, c, t, element[1])
  }

  return c
};

// console.log(scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]]))
// console.log(scheduleCourse([[1,2]]))
// console.log(scheduleCourse([[3,2],[4,3]]))
// console.log(scheduleCourse([[1,2],[2,3]]))
// console.log(scheduleCourse([[1,19],[2,2],[1,17]]))
// console.log(scheduleCourse([[7,11],[1,11],[1,3],[2,6],[5,6],[7,7],[4,8],[2,20],[1,17],[8,11]])) // 6
console.log(scheduleCourse([[7,17],[3,12],[10,20],[9,10],[5,20],[10,19],[4,18], [8,11]])) // 4
// console.log(scheduleCourse([[5,5],[4,6],[2,6]])) // 2
// console.log(scheduleCourse([[5,11],[3,5],[10,20],[4,20],[10,16]])) // 2
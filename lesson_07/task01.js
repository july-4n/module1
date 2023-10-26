'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr, arr2) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!= (arr2[0] && arr2[1] && arr2[2])) {
      console.log(result)
      result.push(arr[i])
    }
  }

  // let result = arr.filter(x => !arr2.includes(x));
  return result
}

console.log(filter(allStudents, failedStudents));

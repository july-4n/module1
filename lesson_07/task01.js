'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr, arr2) => {
  let result = arr.filter(x => !arr2.includes(x));
  return result
}

console.log(filter(allStudents, failedStudents));

var sortNumber = function (number) {
   number.sort(function (a, b) {
<<<<<<< HEAD
       if (a == b) {
=======
       if (a === b) {
>>>>>>> d720ba7667398694fbb4e2124b5080665e7b8629
           return 0;
       }
       return a < b ? -1 : 1;
   });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);
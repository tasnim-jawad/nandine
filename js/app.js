// console.time("check")
//     console.log("tasnimul hasan")
//     console.error("error is showing")
//     console.warn("warn is showing")
//     console.table([1,2,3,4,5])
//     console.table({firstName: "Muhammad", lastName: "Hasan"})
// console.timeEnd("check")

// console.clear();
// document.write("Tasnimul hasan")

// let meat,cal,jatayat,fish,total;
// meat = 1.5*1000;
// cal = 3*130;
// meat = 1.5*1000
// jatayat = 120
// total =3000
// let totalSpand = meat+cal+meat+jatayat;
// let remainTaka =total-totalSpand;
// console.log(remainTaka);
// document.write(remainTaka)

let basic =10000
let hr =(basic/100)*60;
let ma =(basic/100)*12;
let td =(basic/100)*10;
let pf =(basic/100)*8;
let tax =(basic/100)*5;

let total =(basic+hr+ma+td+pf-tax)
console.log(total);
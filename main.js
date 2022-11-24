
//Menentukan Angka Ganjil Genap
function genap(num) {
  if (num % 2 == 0) {
    return true
  }
  return false
}
function ganjil(num) {
  if (num % 2 != 0) {
    return true
  }
  return false
}
console.log(ganjil(3));
console.log(ganjil(6));
console.log(genap(4));
console.log("-------------------------------");

// looping 1-15 

const pijarcamp = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fazztrack");
    } else if (i % 3 === 0) {
      console.log("fazz");
    } else if (i % 5 === 0) {
      console.log("track");
    } else {
      console.log(i);
    }
  }
};
pijarcamp(15);
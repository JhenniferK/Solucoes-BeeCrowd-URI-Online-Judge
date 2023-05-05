let line1 = lines.shift().split(' ');

let A = Number(line1.shift());
let B = Number(line1.shift());
let C = Number(line1.shift());

let delta = (B**2)-(4*A*C);

if(delta<0 || A==0){
  console.log("Impossivel calcular");
} else {
  R1 = (-B+(Math.sqrt(delta)))/(2*A);
  R2 = (-B-(Math.sqrt(delta)))/(2*A);
  console.log("R1 = " + R1.toFixed(5));
  console.log("R2 = " + R2.toFixed(5));
}

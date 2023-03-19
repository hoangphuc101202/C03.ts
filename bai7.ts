import { question } from "readline-sync";

let a : number  = parseFloat(question("Nhap a: "));
let b : number = parseFloat(question("Nhap b: "));
let c : number = parseFloat(question("Nhap c: "));
let delta  : number = (b*b) - (4*a*c);
if(a == 0 && b== 0){
    console.log("Phuong trinh vo so nghiem");
}
else if( delta < 0){
    console.log(" Phuong trinh vo nghiem");

}
else if(delta == 0){
    let x: number = (-b)/(2*a);
    console.log("Vay co nghiem kep :  ",x);

}
else{
   let x1 : number = (-b + Math.sqrt(delta))/(2*a);
   let x2 : number  = (-b - Math.sqrt(delta))/(2*a);
    console.log("Phuong trinh co 2 nghiem: x1 ",x1.toFixed(2) + " X2: ",x2.toFixed(2));
}

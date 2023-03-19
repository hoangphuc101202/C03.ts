import { question } from "readline-sync";

let a : number = Number(question("Nhap a: "));
let b : number = Number(question("Nhap b: "));
let c : number = Number(question("Nhap c: "));

if(a == b || a == c || b == c){
    console.log("La Tam Giac can");
}
else{
    console.log("Tam giac khong can");
}
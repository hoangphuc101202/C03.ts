import { question } from "readline-sync";

let x : number = Number(question("Nhap x: "));
let soquyenluc = Math.floor(x/100)%10;
if(soquyenluc == 9){
    console.log("So quyen luc");
}
else{
    console.log("Khong phai so quyen luc");
}
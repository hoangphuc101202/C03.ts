import { question } from "readline-sync";

let year : number = Number(question("Nhap vao 1 nam: "));
if( year% 400 == 0){
   console.log("La nam nhuan");

}
else if(year % 4 == 0 && year % 100 != 0){
    console.log("la nam nhuan");
}
else{
    console.log("Khong phai nam nhuan");
}


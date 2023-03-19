import { question } from "readline-sync";

let day : number = Number(question("Enter a day: "));
let month : number = Number(question("Enter a month: "));
let year : number = Number(question("Enter a year: "));


if(month == 1 || month == 3 || month == 7 || month == 10 || month == 12){
    if(day > 0 && day < 32){
        console.log("Ngay Thang nam Hop le");
    }
    else{
        console.log("Ngay thang nam khong hop le");
    }
    
}
if(month == 4 || month == 5 || month == 6 || month == 8 || month == 9 || month == 11){
    if(day > 0 && day < 31){
        console.log("Ngay thang nam hop le");
    }
    else{
        console.log("Ngay thang nam khong hop le");
    }

}
if(month == 2){
    if(day > 0 && day < 29){
        console.log("Ngay thang nam hop le");

    }
    else{
        console.log("Ngay thang nam khong hop le");
    }
}
else{
    console.log("Ngay thang nam khong hop le");
    
}
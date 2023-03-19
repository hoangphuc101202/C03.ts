import { question } from 'readline-sync';
let DTB : number = Number(question("nhap diem: "));
if( DTB >= 5 ){
    console.log("Dau");
}
else{
    console.log("Rot");
}
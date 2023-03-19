import { question } from "readline-sync";

let KW : number = Number(question("Nhap vao KW dien: "));
let sotien : number = 0 ;
if(KW < 100){
    sotien = KW*2000;
}
else if( 100 <= KW && KW < 200){
    sotien = KW * 2500;
}
else{
    sotien = KW * 3500;
}
console.log(sotien);
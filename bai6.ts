import { question } from "readline-sync";

const ky_tu : String = String(question("Nhap vao 1 ky tu: "));
if(ky_tu >= 'A' && ky_tu <= 'Z'){
    console.log("Hoa");
}
else if(ky_tu >= 'a' && ky_tu<='z'){
    console.log("thuong");
}
else if(ky_tu >= '0' && ky_tu <= '9'){
    console.log("So");
}
else{
    console.log("DB");
}
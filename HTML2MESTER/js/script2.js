var text = prompt("Ведіть даний текст");
var arr=Array();
for(let i=0; i<text.length; i++){
  if(text[i]=="a"){
   arr.push(i);
  }
}

alert(arr.toString());

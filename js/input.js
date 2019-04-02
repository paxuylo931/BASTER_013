function VIVOD () {
  var  a = document.getElementsByTagName('input');
  for (var i = 0; i < a.length; i++) {
        if (i==4){
          continue;
        }
        else if (a[i].type=="radio" && a[i].checked!=true) {
          continue;
          debug;
        }
        console.log(a[i].value);
  }
}

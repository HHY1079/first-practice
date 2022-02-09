var Links = {
  SetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = color;
      i = i + 1
    }
  }
}
var Body = {
  SetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
  },
  SetColor(color){
    document.querySelector('body').style.color = color;
  }
}

function NightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';
    Links.SetColor('red');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';
    Links.SetColor('black');
  }
}



let text = 'ANNA';

var textInverse = invertText(text);

if(text == textInverse){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertText(str){
  var strInverse = str.split('').reverse().join('');  
  return strInverse;
}


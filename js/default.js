var number = Math.floor(Math.random()*100);
var max = 99;
var min = 0;

var message = 'ありがとうございました';

while(1)
{
  var answer = parseInt(window.prompt('数当てゲーム！0~99の数字を入力してください！'/*,number*/));
  var result = false;

  if(answer === number)
   {
     message = 'あたり';
   }
  else if(answer < number)
    result = window.confirm('残念、もっと大きいよ\nこのまま続ける？');
  else if(answer > number)
    result = window.confirm('残念、もっと小さいよ\nこのまま続ける？');
  else
    result = window.confirm('0~99の数字を入力してね\nこのまま続ける？');

  if(result !== true)
    break;
}
document.getElementById('choice').textContent = message;

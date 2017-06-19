var number = Math.floor(Math.random()*100);
var result = 0;
var max = 99;
var min = 0;

while(1)
{
  var answer = parseInt(window.prompt('数当てゲーム！0~99の数字を入力してください！'/*,number*/));

  var message;

  if(answer < min && answer > max)
  {
    if(answer === number)
    {
      message = 'あたり';
      break;
    }
    esle if(answer < number)
      result = window.confirm('残念、もっと大きいよ\nこのまま続ける？');
    else if(answer > number)
      result = window.confirm('残念、もっと小さいよ\nこのまま続ける？');
  }
  else
    result = window.confirm('0~99の数字を入力してね\nこのまま続ける？');

  if(result === true)
    result = 0;
  else
    break;
}
document.getElementById('choice').textContent = message;

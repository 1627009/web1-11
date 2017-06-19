var number = Math.floor(Math.random()*3);
var result = 0;
while(1)
{
  var answer = parseInt(window.prompt('数当てゲーム！0~2の数字を入力してください！'));

  var message;
  if(answer === number)
  {
    message = 'あたり';
    break;
  }
  else if(answer < number)
    result = window.confirm('残念、もっと大きいよ\nこのまま続ける？');
  else if(answer > number)
    result = window.confirm('残念、もっと小さいよ\nこのまま続ける？');
  else
    result = window.confirm('0~2の数字を入力してね\nこのまま続ける？');

  document.getElementById('choice').textContent = message;
  
  if(result === true)
    result = 0;
  else
    break;
}
document.getElementById('choice').textContent = message;

var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数当てゲーム！0~2の数字を入力してください！'));

var message;
if(answer === number)
{
  message = 'あたり';
}
else if(answer < number)
{
  message = '残念、もっと大きいよ';
}
else if(answer > number)
{
  message = '残念、もっと小さいよ';
}
else
{
  message = '0~2の数字を入力してね';
}

document.getElementById('choice').textContent = message;

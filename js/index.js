document.getElementById('button').onclick = function(){
  calc_bmi();
}



function calc_bmi()
{
  /* 表單的輸入為『文字』，文字合併
  var h = document.getElementById('height').value;
  var w = document.getElementById('weight').value;
  var sum = parseInt(h) + parseInt(w);
  console.log(sum);
  */
  
  var h = parseFloat( document.getElementById('height').value );
  var w = parseFloat( document.getElementById('weight').value );

  var bmi = w / ( (h/100)*(h/100) );

  // 取兩位小數  
  bmi = Math.floor(bmi*100) / 100;  // 方法一
  bmi = bmi.toFixed(2); // 方法二

  console.log('bmi=' + bmi);

  // 判斷 
  var msg = '';
  var pic = '';
  var url = '';

  if( bmi<=18.5 )
  {
    msg = '太輕';
    pic = 'images/s4.jpg';
    url = 'page4.html';
  }
  else if( bmi>18.5 && bmi<=24 )
  {
    msg = '正常';
    pic = 'images/s3.jpg';
    url = 'page3.html';
  }
  else if( bmi>24 && bmi<=27 )
  {
    msg = '稍重';
    pic = 'images/s2.jpg';
    url = 'page2.html';
  }
  else if( bmi>=27 )
  {
    msg = '月巴 月半';
    pic = 'images/s1.jpg';
    url = 'page1.html';
  }
  else
  {
    msg = '看到這表示程式出錯了';
  }

  // output
  // alert('BMI= ' + bmi + '\n' + msg);
  // console.log('msg= ' + msg);
  
  var str = '<h3>你的狀況是：' + msg + '</h3>';
  
  document.getElementById('message').innerHTML = str;
  document.getElementById('picture').src = pic;
  document.getElementById('page').innerHTML = '<iframe src="'+url+'" width="500" height="200">';
}
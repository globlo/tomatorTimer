



/************************************************************* */
var point;
var sec;
var seconds;
var min;
var hour;
var start;
var now;
var time;
var id;

document.getElementById('start').addEventListener('click', function () {


    if (document.getElementById('start').innerHTML === 'START')
    {

        start = new Date();
        id = setInterval(goTimer, 10); //executing goTimer every in 10 milisecond

        document.getElementById('start').innerHTML = 'STOP'; /*Changing the label of botton start -> stop*/ 

        document.getElementById('buttonBox').classList.remove('button'); /* Changing color of the botton by changing class name   */
                                                                                        
        document.getElementById('buttonBox').classList.add('buttonbutton');

    }
    else  //Has to clear interval at fisrst time
    {
        clearInterval(id);
/**/
        document.getElementById('start').innerHTML = 'START';  //STOP -> START
        document.getElementById('timer').innerHTML = '25:00:00';

        document.getElementById('buttonBox').classList.remove('buttonbutton');
        document.getElementById('buttonBox').classList.add('button');
    }
});

var goTimer = function ()  //executing every 10 mili sec
{
    now = new Date();
    time = now.getTime() - start.getTime();  // time: The prcessed time

    point = Math.floor(time / 100);/*Math.floorは絶対値を表します。差分を100で割る事でここでは0.1秒毎の経過時間を取得。*/
    sec = Math.floor(time / 1000);/*1秒毎の時間を取得*/
    min = Math.floor(sec / 60);/*1分毎の時間を取得*/
    hour = Math.floor(min / 60);/*1時間毎の時間を取得*/
    seconds = Math.floor(time / 1000);/*1秒毎の時間を取得*/

    if (seconds < 1500) /*25分経過するまで*/
    {
        point = 9 - (point - sec * 10); 
      
        sec = 59 - (sec - min * 60);
        min = 25 - (min - hour * 60);

        point = addZero(point);
     
        sec = addZero(sec);
        min = addZero(min);

        document.getElementById('timer').innerHTML = min + ':' + sec + ':' + point; //表示
    } 
    else if (seconds >= 1500 && seconds < 1800) /*25分経過後  After 25 min*/
    {
        if(seconds == 1500)
            alert('25 minutes NOW!!');

        point = point - sec * 10;
        sec = sec - min * 60;
        min = min - 25;

        point = addZero(point);
        sec = addZero(sec);
        min = addZero(min);

        document.getElementById('timer').style.color = 'red';
        /*style.colorでid:timerを持つ要素内の文字色を赤色に変えています*/
        document.getElementById('timer').innerHTML = min + ':' + sec + ':' + point;

    } 
    else　　// After 30 min
    {
        clearInterval(id);
        document.getElementById('timer').innerHTML = '25:00:00';
        document.getElementById('timer').style.color = 'white';
        document.getElementById('start').innerHTML = 'START';

        document.getElementById('buttonBox').classList.remove('buttonbutton');
        document.getElementById('buttonBox').classList.add('button');
    }

}

var addZero = function (value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
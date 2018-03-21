var container = document.getElementById('container');
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div');
var audio = document.getElementById('audio');
var reduis = calculateRedius(96,20)

for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
    arr[i].style.WebkitTransform = "rotateY(" + 360 / arr.length * i + "deg) translatez("+reduis+"px)"
}

//  计算Z轴推开的距离
function calculateRedius(length, totalNum) {
    return Math.round(length/(2*Math.tan(Math.PI/totalNum)))-15;
}

//  播放音乐
$('#laba').on('tap',function(e){
    console.log(111)
    if(audio.paused){
        audio.play();
        $('#laba').text('🎺');
    }else{
        audio.pause();
        $('#laba').text('⏸');
    }
})

var startX = 0;
var x = 0;
var endX = 0;
var flag = true;

$('#box').on('touchstart', function(event) {
	event.preventDefault();
	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
})

$('#box').on('touchmove',function(e){
    if(flag){
        e.preventDefault();
        var touch = e.targetTouches[0];
        endX = touch.pageX;
        x = endX-startX;
        box.style.transform = 'rotateY('+x+'deg)';
    }else{
        return false;
    }
})

$('#box').on('touchend',function (e) {
    console.log('海涛好帅呀')
})

//  监听手机设备
window.addEventListener('deviceorientation', function(event) {

	var gamma = event.gamma;
	if (Math.abs(gamma) > 10) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 1 + 'deg)';
	} else {
		flag = true;
	}

})

var ad = ['adimg-1.png','adimg-2.png','adimg-3.png'];

var timeInterval = 1500;
setInterval(changeAd,timeInterval);
var NowNumber = 0
function changeAd(){
	var obj=document.getElementById("ADimg");
	if(NowNumber==ad.length-1){ //最後一張圖換回第一張圖
		NowNumber = 0;
	}else{
		NowNumber++;
	}
	obj.src="img/"+ad[NowNumber];

}

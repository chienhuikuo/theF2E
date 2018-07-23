var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d"); 


  canvas.width = 800
  canvas.height = 500
  var time = 0;
  var timeb = 0;
  var timec = 0;
  function draw(){
    
    ctx.clearRect(0,0,800,500)
    //line
    // ctx.beginPath()
    // ctx.strokeStyle = "#aaa"
    // for( var i=0; i<18; i++){
    //   let pos = i*50
    //   ctx.moveTo(pos,0)
    //   ctx.lineTo(pos,500)
    //   ctx.fillText(pos,pos,10)
    //   ctx.moveTo(0,pos)
    //   ctx.lineTo(800,pos)
    //   ctx.fillText(pos,0,pos)
    //   ctx.stroke()
    // }
    //大圓
    
    if( time>=300 ){
      time = 0;
    }else{
      time++
    }
    let a = time / 300
    ctx.beginPath()
      ctx.arc(400,250,time%300,0,360)
      ctx.strokeStyle = "rgba(255,255,255,"+(1-a)+")"
      ctx.stroke()
      
    //中圓
    
    if( timeb>=200 ){
      timeb = 0;
    }else{
      timeb++
    }
    let b = timeb / 200
    ctx.beginPath()
      ctx.arc(400,250,50+timeb%200,0,360)
      ctx.strokeStyle = "rgba(255,255,255,"+(1-b)+")"
      ctx.stroke()

    //小圓
    if( timec>=150 ){
      timec = 0;
    }else{
      timec++
    }
    let c = timec / 150
    ctx.beginPath()
      ctx.arc(400,250,100+timec%150,0,360)
      ctx.strokeStyle = "rgba(255,255,255,"+(1-c)+")"
      ctx.stroke()

    //橘園
    ctx.beginPath()
      ctx.arc(750-mouse.x/5,60+mouse.y/5,25,0,360)
      ctx.fillStyle = "#F5AF5F"
      ctx.fill()
    //三角形
    ctx.beginPath()
      ctx.moveTo(700-mouse.x/5,400-mouse.y/3)
      ctx.lineTo(675-mouse.x/5,450-mouse.y/3)
      ctx.lineTo(725-mouse.x/5,450-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle = "#3676BB"
      ctx.fill()
    //六邊形
    ctx.beginPath()
      ctx.moveTo(45.3+mouse.x/5,46.3+mouse.y/3)
      ctx.lineTo(76+mouse.x/5,40.5+mouse.y/3)
      ctx.lineTo(98+mouse.x/5,54+mouse.y/3)
      ctx.lineTo(97.9+mouse.x/5,72.2+mouse.y/3)
      ctx.lineTo(82.7+mouse.x/5,85.1+mouse.y/3)
      ctx.lineTo(56.9+mouse.x/5,74.3+mouse.y/3)
      ctx.closePath()
      ctx.fillStyle = "#E7465D"
      ctx.fill()
    
    //電池
    ctx.beginPath()
      ctx.fillStyle = "#fff"
      ctx.fillRect(387,165,26,8)
    ctx.beginPath()
      ctx.fillStyle = "#a7da2d"
      ctx.fillRect(375,175,50,100)
    ctx.beginPath()  
      ctx.fillStyle = "#459a05"
      ctx.fillRect(375,265,50,10)
    ctx.beginPath()
      ctx.moveTo(403.75,185.58)
      ctx.lineTo(400.34,201)
      ctx.lineTo(410.57,201)
      ctx.lineTo(396.93,221.83)
      ctx.lineTo(400.34,206)
      ctx.lineTo(390.96,206)
      ctx.closePath()
      ctx.fillStyle = "#fff"
      ctx.fill()

  }
  setInterval(draw,30)//一秒畫30次
  var mouse = {x:0,y:0}//物件
  canvas.addEventListener("mousemove",function(evt){
    mouse.x = evt.offsetX
    mouse.y = evt.offsetY
  })
 

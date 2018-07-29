var $opening = $('.opening')
var $openingStar = $('.opening>.star')
var $openingCircle = $('.opening>.circle')
var $openingSquare = $('.opening>.square')
var $textBlock = $('.text-block')

var $questions = $('.Questions')
var $qwrapper = $('.Q-wrapper')
var $shape = $('.shape')
var $shapeSquare = $('.shape>.square')
var $shapeTriangle = $('.shape>.triangle')
var $shapeCircle = $('.shape>.circle')
var $AnimationTime = 5

function opening(){
  TweenLite.to($openingStar, $AnimationTime, {rotation: 360,ease: Power1.easeOut})
  TweenLite.to($openingCircle, $AnimationTime, {rotation: -360,ease: Power1.easeOut})
  TweenLite.to($openingSquare, $AnimationTime, {rotation: -360,ease: Power1.easeInOut})

  TweenLite.to($openingCircle, $AnimationTime/3, {scale: 1.1,ease: Power1.easeInOut})
  TweenLite.to($openingCircle, $AnimationTime/3*2, {scale: 1,ease: Power1.easeInOut,delay:$AnimationTime/3})

  TweenLite.to($openingSquare, $AnimationTime/10, {scale: 5,ease: Power1.easeInOut,delay:$AnimationTime})
  TweenLite.to($openingCircle, $AnimationTime/10, {scale: 5,ease: Power1.easeInOut,delay:$AnimationTime+0.2})
  TweenLite.to($openingStar, $AnimationTime/10, {scale: 6,ease: Power1.easeInOut,delay:$AnimationTime+0.4})

  TweenLite.to($textBlock, $AnimationTime/5, {opacity: 0,ease: Power1.easeOut,delay:$AnimationTime+0.9})

}

function question(){
  TweenLite.to($questions, 2, {opacity: 1,ease: Power1.easeOut,delay:$AnimationTime+0.9,onComplete: function(){
    $opening.remove()
    $('body').removeClass('hidden')
  }})
  TweenLite.to($qwrapper, 2, {opacity: 1,ease: Power1.easeOut,delay:$AnimationTime+2.9})
}

function shape(){
  TweenLite.to($shape, 1, {right: 0,ease: Power1.easeOut,delay:$AnimationTime+3.9})
  TweenLite.to($shapeSquare, 1.2, {top: 15+'%',ease: Power1.easeOut,delay:$AnimationTime+4.9})
  TweenLite.to($shapeTriangle, 1, {top: 22+'%',ease: Power1.easeOut,delay:$AnimationTime+4.9})
  TweenLite.to($shapeCircle, 1, {top: 30+'%',ease: Power1.easeOut,delay:$AnimationTime+5.1})

  TweenLite.to($shapeSquare, 5, {rotation: 360,ease: Power1.easeInOut,delay:$AnimationTime+6.1})
  TweenLite.to($shapeTriangle, 5, {rotation: -360,ease: Power1.easeInOut,delay:$AnimationTime+6.1})
  TweenLite.to($shapeCircle, 5, {rotation: 360,ease: Power1.easeInOut,delay:$AnimationTime+6.1})
  TweenLite.to($shapeCircle, 2.5, {left: 22+'%',top: 26+'%',ease: Power1.easeInOut,delay:$AnimationTime+6.1})
  TweenLite.to($shapeCircle, 2.5, {left: 25+'%',top: 30+'%',ease: Power1.easeInOut,delay:$AnimationTime+8.6})


}
opening()
//$opening.css("display","none")
question()
//$qwrapper.css("opacity",1)
//$questions.css("opacity",1)
shape()


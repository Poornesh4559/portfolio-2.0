var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();




const text = document.querySelector('h1');
const popup = document.querySelectorAll('.fadeout')




$('.anim').each(function(){
//  let fadeup =  $(this).find('.fadeout')
const textAnim = TweenMax.fromTo($(this),1, { opacity: 0 }, { opacity: 1 });
//const textTrans = TweenMax.to($(this),1,{css:{transform:'Translate(0px,-10px)'}})

timeline.add(textAnim)//.add(textTrans)

let scene =  new ScrollMagic.Scene({
  triggerElement: this,
  triggerHook: 0.2
})
.setTween(textAnim)

// .addIndicators({name: "textH1"})
.addTo(controller)

})


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



const arrow = document.querySelector('.mouseArrows');
const arrow1 = document.querySelector('.mouseArrows1');




function blink_arrow() {
	$(arrow).fadeOut(500);
    $(arrow).fadeIn(500);	
    // $(arrow1).fadeOut(500);
    //  $(arrow1).fadeIn(500);
    sleep(200).then(()=>{
      $(arrow1).fadeOut(500);
    $(arrow1).fadeIn(500);
    })
    
    
}



setInterval(blink_arrow, 1000);



function wrapTog(){
  let ele = document.querySelector('.wrap-in')
  if (ele.style.height === '40vh'){
    ele.style.transition = "height 0.2s ease-in"
    ele.style.height = "2px"
  }else{
    ele.style.transition = "height 0.4s ease-in"
    ele.style.height = "40vh" 
  }
}

function rotate180(){
  let ele = document.querySelector('.wrap-arrow')
  if (ele.style.transform === 'rotate(180deg)'){
    ele.style.transform ='rotate(0deg)'
  }else{
    ele.style.transform ='rotate(180deg)'
  }
}
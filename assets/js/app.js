$(document).ready(function() {
  var $tickerWrapper = $(".tickerwrapper");
  var $list = $tickerWrapper.find("ul.list");
  var $clonedList = $list.clone();
  var listWidth = 10;

  $list.find("li").each(function (i) {
      listWidth += $(this, i).outerWidth(true);
  });

  var endPos = $tickerWrapper.width() - listWidth;

  $list.add($clonedList).css({
      "width" : listWidth + "px"
  });

  $clonedList.addClass("cloned").appendTo($tickerWrapper);

  var infinite = new TimelineMax({repeat: -1, paused: true});
  var time = 40;

  infinite
    .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
    .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
    .set($list, {force3D:true, rotation:0.01, x: listWidth})
    .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
    .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
    .progress(1).progress(0)
    .play();

  $tickerWrapper.on("mouseenter", function(){
      infinite.pause();
  }).on("mouseleave", function(){
      infinite.play();
  });
}); 



let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.item');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

const items = document.querySelectorAll('.item');
items.forEach(item => {
  const img = item.querySelector('img:not(.hover)');
  const hoverImg = item.querySelector('img.hover');

  item.addEventListener('mouseover', () => {
    img.style.opacity = '0';
    hoverImg.style.opacity = '1';
  });

  item.addEventListener('mouseout', () => {
    img.style.opacity = '1';
    hoverImg.style.opacity = '0';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.nav__list');

  burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navList.classList.toggle('active');
  });
});



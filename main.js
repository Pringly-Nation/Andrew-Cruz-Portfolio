console.log("JavaScript is working!")
var slideIndex = 1; // slide index is the current slide 
showDivs(slideIndex);

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) { // display none the current slide
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex"; // display blocks the next slide
}

var slideIndex2 = 1; // slide index is the current slide 
showDivs2(slideIndex2);

function showDivs2(n) {
  var i2;
  var x2 = document.getElementsByClassName("desc");
  if (n > x2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x2.length} ;
  for (i2 = 0; i2 < x2.length; i2++) { // display none the current slide
    x2[i2].style.display = "none";
  }
  x2[slideIndex2-1].style.display = "flex"; // display blocks the next slide
}

function plusDivsForBoth(n){
  showDivs(slideIndex += n);
  showDivs2(slideIndex2 += n);
  showDivs3(slideIndex3 += n);
  slideRight();
}

var slideIndex3 = 1; // slide index is the current slide 
showDivs3(slideIndex3);

function showDivs3(n) {
  var i3;
  var x3 = document.getElementsByClassName("headergallery");
  if (n > x3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x3.length} ;
  for (i3 = 0; i3 < x3.length; i3++) { // display none the current slide
    x3[i3].style.display = "none";
  }
  x3[slideIndex2-1].style.display = "flex"; // display blocks the next slide
}

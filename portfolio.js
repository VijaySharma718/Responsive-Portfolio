var myIndex = 0;
slider();

function slider() {
  var i;
  var x = document.getElementsByClassName("background-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slider, 2000); // Change image every 2 seconds
}

let texts = Array.from(document.querySelectorAll('.container h3'));
let i = 1; // starting from 1 because 0 already has is-visible, it would cause slight delay otherwise.

setInterval(() => {
  texts.forEach(text => {
    text.classList.remove('info-about');
  });
  texts[i].classList.add('info-about');
  i += 1;
  if (i >= texts.length) {
    i = 0;
  }
}, 2000);

let menuListbutton = document.getElementById("menuListbutton")
        menuListbutton.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuListbutton.style.maxHeight == "0px")
            {
                menuListbutton.style.maxHeight = "300px";
            }
            else{
                menuListbutton.style.maxHeight = "0px";
            }
          }
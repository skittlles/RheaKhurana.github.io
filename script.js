function popup() {
	   open("My Favorite Superhero.html");
	}
	
function changeImage() {
   var image = document.getElementById ('myImage');
   if (image.src.match("bulb_on.jpg")) {
	  image.src = "bulb_off.jpg";
    } 
    else {
	  image.src = "bulb_on.jpg";	
	}
}

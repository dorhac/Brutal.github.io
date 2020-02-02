

/*
function showIm(x) {
	var im = x.find('img');
	im.show()
	
}

function hideIm(x) {
	
	var im = x.find('img');
	im.hide()
}



object.onmouseover=function(){
    $("img").css("display","block");
};


 
object.addEventListener("mouseover", myCode);

*/


$(document).on('scroll', function (e) {
    var $this = $(this),
        $items = $("#items"),
        scrollPosition = $this.scrollTop();

    if (scrollPosition > ($this.data('scroll-position') || 0)) {
        // Scrolling down
        var threshold = $this.hight() *0.9;
      
      	if (scrollPosition > threshold) {
          	var $firstResult = $('.item:first-child');
            $items.append($firstResult);
          	scrollPosition -= $firstResult.hight();
            $this.scrollLeft(scrollPosition);
        }
    } else {
        // Scrolling up
        var threshold = $('.item:first-child').hight();
        if (scrollPosition < threshold) {
            var $lastResult = $('.item:last-child');
            $items.prepend($lastResult);
          	scrollPosition += $lastResult.hight();
            $this.scrollLeft(scrollPosition);
        }
    }
  	$this.data('scroll-position', scrollPosition)
});



/*
$(document).ready(function(){
  $("details").hover(function(){
    $("img").show();

    }, function(){
    $("img").hide();
  });



var img1 = document.getElementById("im1"),
		img2 = document.getElementById("im2"),d1 = document.getElementById("it1"),d2 = document.getElementById("it2");
		
d1.onmouseover = function(){
  img1.style.display = "block";
}

d1.onmouseout = function(){
  img1.style.display = "none";
}
d2.onmouseover = function(){
  img2.style.display = "block";
}

d2.onmouseout = function(){
  img2.style.display = "none";
}



$('#items').on('click', '.item.details', function (e) {
  	$(this).toggle();
});


$(document).ready(function(){
  $("details").hover(function(){
    $("img").show();

    }, function(){
    $("img").hide();
  });
});
*/
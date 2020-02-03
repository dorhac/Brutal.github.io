
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

$(document).ready(function(){ 
$("#myVideo").css("z-index","99");
sleep(6000).then(() => {
$("#myVideo").css("z-index","-1");

})


})


$('#right-column').on('scroll', function (e) {
    var $this = $(this),
        $items = $("#items"),
        scrollPosition = $this.scrollTop();

    if (scrollPosition > ($this.data('scroll-position') || 0)) {
        // Scrolling down
        var threshold = $this.width() *0.5;
      
      	if (scrollPosition > threshold) {
          	var $firstResult = $('.item:first-child');
            $items.append($firstResult);
          	scrollPosition -= $firstResult.width();
            $this.scrollLeft(scrollPosition);
        }
    } else {
        // Scrolling up
        var threshold = $('.item:first-child').height();
        if (scrollPosition < threshold) {
            var $lastResult = $('.item:last-child');
            $items.prepend($lastResult);
          	scrollPosition += $lastResult.width();
            $this.scrollLeft(scrollPosition);
        }
    }
  	$this.data('scroll-position', scrollPosition)
});
/*
function ShowPicture(id,Source) {
if (Source=="1"){
if (document.layers) document.layers[''+id+''].visibility = "show"
else if (document.all) document.all[''+id+''].style.visibility = "visible"
else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "visible"
}
else
if (Source=="0"){
if (document.layers) document.layers[''+id+''].visibility = "hide"
else if (document.all) document.all[''+id+''].style.visibility = "hidden"
else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "hidden"
}
}




$("#myVideo").on('ended',function(){ 
$("#myVideo").hide();
});
*/

function videoEnded() {
    window.alert('video ended');
}


function switchSRC(){
	
}
function ShowPicture(x,id,Source) {
if (Source=="1"){

if (document.layers) document.layers[''+id+''].visibility = "show"
else if (document.all) document.all[''+id+''].style.visibility = "visible"
else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "visible"
 
var random = 
    Math.floor(Math.random() * (78 )) + +1;
	
var sr = 'images/'+random+'.jpg';
$("img").attr("src",sr);

$("img").css("top",Math.random() * (400));
$("img").css("left",Math.random() * (1500));
}
else
if (Source=="0"){
if (document.layers) document.layers[''+id+''].visibility = "hide"
else if (document.all) document.all[''+id+''].style.visibility = "hidden"
else if (document.getElementById) document.getElementById(''+id+'').style.visibility = "hidden"
	

}
}





$('#right-column').on('scroll', function (e) {
    var $this = $(this),
        $items = $("#items"),
        scrollPosition = $this.scrollTop();

    if (scrollPosition > ($this.data('scroll-position') || 0)) {
        // Scrolling down
        var threshold = $items.width() - $this.width() - $('.item:last-child').width();
      
      	if (scrollPosition > threshold) {
          	var $firstResult = $('.item:first-child');
            $items.append($firstResult);
          	scrollPosition -= $firstResult.height();
            $this.scrollTop(scrollPosition);
        }
    } else {
        // Scrolling up
        var threshold = $('.item:first-child').height();
        if (scrollPosition < threshold) {
            var $lastResult = $('.item:last-child');
            $items.prepend($lastResult);
          	scrollPosition += $lastResult.height();
            $this.scrollTop(scrollPosition);
        }
    }
  	$this.data('scroll-position', scrollPosition)
});

$('#items').on('click', '.item', function (e) {
  	$(this).find('.details').toggle();
});

$('#newNumber').on('input', function (e) {
    var items = '';
    for (var n = 1; n <= $(this).val(); n++) {
        items += 
          '<div class="item" id="item' + n + '">' +
          '    <div class="main">Item ' + n + '</div>' +
          '    <div class="details">Details for item ' + n + '</div>' +
          '</div>';
    }
  	$('#items').html(items);
});
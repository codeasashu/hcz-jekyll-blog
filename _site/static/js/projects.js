(function($){
	$(document).ready(function(){
		$(document).on('click','.tag-filter',function(){
			$('span.tag-filter').removeClass("label-primary");
			$(this).addClass("label-primary");

			if( $(this).hasClass('all')){
				$('.project-item').showAll();
			}else{
				$('.project-item').filterTags( $(this).data('tag') );
			}
		});
	});

	$.fn.extend({
	  filterTags: function(tagName) {
	  	this.removeClass('not-show');
	    return this.each(function() {
	    	var itemTagArray = JSON.parse( $(this).attr('data-tags') );
			if($.inArray(tagName, itemTagArray) === -1){
				$(this).addClass('not-show');
			}
	    });
	  },
	  showAll: function(){
	  	return this.each(function() {
			if($(this).hasClass('not-show')){
				$(this).removeClass('not-show');
			}
	    });
	  }
	});
})(jQuery)
(function($){
	$(document).ready(function(){
		$(document).on('click','.tag-filter',function(){
			if( $(this).hasClass('all')){
				$('span.tag-filter').removeClass("label-primary");
				$('.project-item').showAll();
			}else{
				$('.project-item').filterTags( $(this).data('tag') );
			}
			$(this).addClass("label-primary");
		});
	});

	$.fn.extend({
	  filterTags: function(tagName) {
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

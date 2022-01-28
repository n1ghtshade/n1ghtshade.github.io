	  $(document).ready(function($) {
	    $("#twitter").tweet({
	      avatar_size: 0,
	      count: 1,
	      username: "theplayforge",
	      loading_text: "loading tweets..."
	    });   
	});
	
	
	$(document).ready(function() {

		$("a.lightbox").fancybox({
			'titleShow'		: false,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});
	
	});
	

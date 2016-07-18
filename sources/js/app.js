// Put here your own javascript code

(function($) {
	$.fn.outerHTML = function(s) {
		return (s) 
			? this.before(s).remove() 
			: $('<p>').append(this.eq(0).clone()).html();
	}
})(jQuery);

SyntaxHighlighter.defaults['gutter'] = false;
$(function() {
	$('.js-codeMe').each(function() {
		var html = $(this).outerHTML().replace(' js-codeMe', '').replace('js-codeMe', '')
		var escaped = $("<div>").text(html).html();
		console.log(html);

		if($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else  {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">'+escaped+'</pre>');

		SyntaxHighlighter.highlight()
	})
})
SyntaxHighlighter.defaults['gutter'] = false;
SyntaxHighlighter.highlight()

$(function() {
	$.fn.outerHTML = function(s) {
		return (s)
			? this.before(s).remove()
			: $('<p>').append(this.eq(0).clone()).html();
	}

	$('.js-codeMe').each(function() {
		var html = $(this).outerHTML().replace(' js-codeMe', '').replace('js-codeMe', '').replace(' class=""', '').replace('class=""', '');
		var escaped = $("<div>").text(html).html();

		if($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else  {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">'+escaped+'</pre>');

		SyntaxHighlighter.highlight()
	})

	$('.js-codeChild').each(function() {
		var html = $(this).html();
		var escaped = $("<div>").text(html).html();

		if($(this).parent().hasClass('sandbox') === true) {
			$item = $(this).parent();
		} else  {
			$item = $(this);
		}

		$item.after('<pre class="brush: html">'+escaped+'</pre>');

		SyntaxHighlighter.highlight()
	})

	// DEMOS:
	$('.js-suggestions').suggestions({
		data: [
			'Green',
			'GoldenRod',
			'Coral',
			'DodgerBlue',
			'DarkSeaGreen',
			'GhostWhite',
			'Chocolate',
			'Gray',
			'Blue',
			'Grey',
			'DeepPink',
			'DarkGrey',
			'DarkGray',
			'Gold',
			'Orange ',
			'CadetBlue',
			'DarkCyan',
			'DarkSalmon',
			'Crimson',
			'BurlyWood',
			'DarkViolet',
			'Fuchsia',
			'Cornsilk',
			'CornflowerBlue',
			'FloralWhite',
			'DimGrey',
			'PeachPuff',
			'DarkOrange',
			'Cyan',
			'Gainsboro',
			'Chartreuse',
			'DimGray',
			'FireBrick',
			'DeepSkyBlue',
			'DarkKhaki',
			'DarkBlue',
			'ForestGreen',
			'Brown'
		]
	});

	$('.sandbox a[href^="#"]').scrollAnchor({
		speed: 900,
		onScrollStart: function() {
			console.info('started scroll');
		},
		onScrollEnd: function() {
			console.info('finished scroll');
		}
	});

	$('.popup').popup({
		onOpen: function() {
			console.info('opened popup');
		},
		onClose: function() {
			console.info('closed popup');
		}
	});

	$('.js-open-new-popup').on('click', function () {
		$.createPopup({
			title: 'Hello',
			html: 'Message in a Popup',
			footer: 'The footer',
			button: [
				{
					title: 'BTN1',
					class: 'bt1-class',
					onClick: function() {
						alert('You clicked button 1');
					}
				},
				{
					title:'BTN2',
					class: 'bt2-class',
					onClick: function() {
						alert('You clicked button 2');
					},
					style: 'opacity: .5;'
				},
				{
					html: '<button class="btn" style="padding: 5px 15px;">Custom</button>'
				}
			],
			onOpen: function() {
				console.info('opened new popup');
			},
			onClose: function() {
				console.info('closed new popup');
			}
		});
	});
})

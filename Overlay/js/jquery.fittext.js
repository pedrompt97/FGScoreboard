/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {
	  
	function _sizing(prefix, ourText, func, max, maxHeight, maxWidth, minFontPixels, maxFontPixels) {
		while (minFontPixels < (Math.floor(maxFontPixels) - 1)) {

			var fontSize = Math.floor((minFontPixels + maxFontPixels) / 2);
			ourText.css('font-size', fontSize);
			var curSize = func.call(ourText);

			if (curSize <= max) {
				minFontPixels = fontSize;

				if (curSize == max) {
					break;
				}
			}
			else {
				maxFontPixels = fontSize;
			}
		}

		ourText.css('font-size', maxFontPixels);

		if (func.call(ourText) <= max) {
			minFontPixels = maxFontPixels;
		}
		return minFontPixels;
	}

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

		// Store the object
		var $this = $(this);
		var outText = $this;

		// 1. Calculate which `font-size` would
		//    be best for the Height
		var fontSizeHeight = undefined;

		if (Opts.widthOnly) {
			// We need to measure with nowrap otherwise wrapping occurs and the measurement is wrong
      		ourText.css('white-space', 'nowrap' );
		} else {
			fontSizeHeight = _sizing(
				'Height', ourText,
				$this.height, maxHeight,
				maxHeight, maxWidth,
				minFontPixels, maxFontPixels
			);
		}
		
		// 2. Calculate which `font-size` would
		//    be best for the Width
		var fontSizeWidth = undefined;

		fontSizeWidth = _sizing(
			'Width', ourText,
			$this.width, maxWidth,
			maxHeight, maxWidth,
			minFontPixels, maxFontPixels
		);

		var fontSizeFinal = Math.min(fontSizeHeight, fontSizeWidth);

		ourText.css('font-size', fontSizeFinal);

		// 3. Calculate actual font-size
		if (Opts.changeLineHeight) {
			ourText.parent().css(
				'line-height',
				(lineHeight * fontSizeFinal) + 'px'
				);
		}

		// Resizer() resizes items based on the object width divided by the compressor * 10
		var resizer = function () {
			$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
		};

		// Call once to set.
		resizer();

		// Call on resize. Opera debounces their resize by default.
		$(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

var haikus = {};
haikus.def = "Digestive system\nA haiku presentation\nJust hover the names\n\nDigestive system\nThe way of processing food\nGives materials";
haikus.mouth = "All starts at the mouth\nChewing is mandatory\nOr you can't swallow";
haikus.pharynx = "Second is the pharynx\nMaking sure you do not choke\nOn things you swallow";
haikus.esophagus = "The esophagus\nTransporting mush further down\nTowards your stomach";
haikus.stomach = "";
haikus.pancreas = "";
haikus.s_intes = "";
haikus.anus = "";
haikus.appendix = "";
haikus.l_intes = "";
haikus.gall = "";
haikus.liver = "";

var span;

String.prototype.repeat = function(count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
};

function resize() {
	$('.textcontainer').textfill({
		maxFontPixels: -1,
		widthOnly: false,
		minFontPixels: 4
	});
}

function update(haiku) {
	var text = haikus[haiku];
	text += "<br/>".repeat(7 - (text.match(/\n/gi) || []).length);
	text = text.replace(/\n/gi, '<br/>');

	span.html(text);
}

$(document).ready(function() {
	span = $('.textcontainer span');
	
	update('def');

	$(window).resize(function() {
		resize();
	}).resize();

	$('map').imageMapResize();

	$('area').hover(function () {
		update($(this).attr('title'));
		resize();
	}, function () {
		update('def');
		resize();
	});
});
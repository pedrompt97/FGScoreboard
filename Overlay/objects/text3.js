var text3 = {
	pVal : $('#mText3'),
	pText : true,
	pDisappear : {
		top : {
			start : 1,
			stop: 1,
			units: 'px',
			time: 0,
			duration: 0.5,
			effect:'easeIn'
		},
		opacity: {
			start: 100,
			stop: 0,
			time: 0,
			duration: 0.5,
			effect: 'easeIn'
		}
	},
	
	pAppear : {
		top: {
			start: 1,
			stop: 1,
			units: 'px',
			time: 0.5,
			duration: 0.5,
			effect:'easeOut'
		},
		opacity: {
			start: 0,
			stop: 100,
			time: 0.5,
			duration: 0.5,
			effect: 'easeOut'
		}
	}
};
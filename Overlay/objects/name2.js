var name2 = {
	pVal : $('#pName2'),
	pText : true,
	pDisappear : {
		top : {
			start : 7,
			stop: -50,
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
			start: -50,
			stop: 7,
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
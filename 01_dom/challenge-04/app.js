new Vue({
	el: '#challenge',
	data: {
		///////
		// challenge 1
		///////
		class1: 'destaque',
		// applyEffect: false,

		///////
		// challenge 2
		///////
		big: true,
		yfont: true,

		///////
		// challenge 3
		///////
		myClass: 'bg-red',

		///////
		// challenge 4
		///////
		bsize: true,
		classCSS: '',

		///////
		// challenge 5
		///////
		color: '',

		///////
		// challenge 6
		///////
		width: '0',
	},
	methods: {
		// challenge 1	
		iniciarEfeito() {
			this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			// console.log(this.applyEffect)
			// this.applyEffect = !this.applyEffect
		},

		// challenge 4	
		setBox(event) {
			console.log(event.target.value);
			if (event.target.value === 'true') {
				this.bsize = true
			}
			else if (event.target.value === 'false') {
				this.bsize = false
			}
		},

		// challenge 6
		iniciarProgresso() {
			let value = 0
			const timer = setInterval(() => {
				value += 5
				this.width = `${value}%`

				if(value == 100) clearInterval(timer)
			}, 500)
		}
	},
	// computed: {
	//  // challenge 1
	// 	includeEffect() {
	// 		return {
	// 			'destaque': this.applyEffect,
	// 			'encolher': !this.applyEffect,
	// 		}
	// 	}
	// },
})
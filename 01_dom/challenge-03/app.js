new Vue({
	el: '#challenge',
	data: {
		value: 0
	},
	computed: {
		result() {
			return this.value != 37 ? 'Valor Diferente' : 'Valor Igual'
		}
	},
	watch: {
		result(news, olds) {
			// console.log(news, olds)
			setTimeout(( ) => {
				this.value = 0
			}, 5000)
		}
	},
});
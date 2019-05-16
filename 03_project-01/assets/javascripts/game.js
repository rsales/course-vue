
new Vue({
	el: '#game',
	data: {
		players: [
			{ 
				name: 'player1',
				image:'assets/images/player1.svg',
				select: true,
			},
			{
				name: 'player2',
				image: 'assets/images/player2.svg',
				select: false,
			},
			{
				name: 'player3',
				image: 'assets/images/player3.svg',
				select: false,
			}
		]
	},
	methods: {

	},
	computed: {
	},
})
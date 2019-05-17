
new Vue({
	el: '#game',
	data: {
		muted: false,
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
		],
		playerSelect: 0,
	},
	methods: {
		music() {
			this.muted = this.muted == false ? true : false
		},		
		selectPlay(val) {
			document.getElementById('p' + val).checked = true;
			this.playerSelect = val;
		}
	},
	watch: {
		playerSelect(news, olds) {
			this.players[news].select = true
			this.players[olds].select = false
		},
		muted(news, olds) {
			document.querySelector("#controller > audio").muted = news
		}
	},
	computed: {
	},
})

new Vue({
	el: '#game',
	data: {
		muted: false,
		start: false,
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
		// Função para alterar o icone de ativar e desativar o audio
		music() {
			this.muted = this.muted == false ? true : false
		},
		// Função para marcar o 'radio button' do player selecionado
		selectPlay(val) {
			document.getElementById('p' + val).checked = true;
			this.playerSelect = val;
		},
		// Função para iniciar o jogo
		startGame() {
			this.start = true

			// Alterando 'soundtrack'
			document.querySelector("#audio-select").pause()
			document.querySelector("#audio-start").play()
		}
	},
	watch: {
		// Função para definir qual personagem foi selecionado
		playerSelect(news, olds) {
			this.players[news].select = true
			this.players[olds].select = false
		},
		// Função para selecionar o audio e deixar 'muted'
		muted(news) {
			document.querySelector("#controller > #audio-select").muted = news
			document.querySelector("#controller > #audio-start").muted = news
		}
	},
	computed: {
	},
})
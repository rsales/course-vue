
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
		simpleAttack: false,
		masterAttack: false,
		playerLife: 100,
		monsterLife: 100,
	},
	// Baixar o audio da música de fundo ao montar o layout
	mounted: function () {
		document.querySelector("#audio-select").volume = 0.2
		document.querySelector("#audio-choosing").volume = 0.3
		document.querySelector("#audio-start").volume = 0.1
	},
	computed: {
		hasResult() {
			return this.playerLife == 0 || this.monsterLife == 0
		}
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

			// Efeito sonoro de seleção
			document.querySelector("#audio-choosing").play()
		},
		// Função para iniciar o jogo
		startGame() {
			this.start = this.start == false ? true : false

			this.playerLife = 100
			this.monsterLife = 100

			// Alterando 'soundtrack'
			document.querySelector("#audio-select").pause()
			document.querySelector("#audio-start").play()
		},
		// Função para ataque
		attack(especial) {
			this.hurt('monsterLife', 5, 10, especial)
			this.hurt('playerLife', 7, 12, false)

			// Ataque simples
			if(!especial) {
				this.simpleAttack = true

				// Efeito animato de ataque
				setTimeout(() => {
					this.simpleAttack = false
				}, 500)
				// Efeito sonoro de ataque
				document.querySelector("#audio-atack").play()
			}
			// Ataque especial
			else {
				this.masterAttack = true

				// Efeito animato de ataque especial
				setTimeout(() => {
					this.masterAttack = false
				}, 2100)
				// Efeito sonoro de ataque especial
				document.querySelector("#audio-specialAtack").play()
			}
		},
		// Função para gerar ataque
		hurt(prop, min, max, especial) {
			const plus = especial ? 5 : 0
			const hurt = this.getRandom(min + plus, max + plus)
			this[prop] = Math.max(this[prop] - hurt, 0)
		},
		// Função para gerar valores aleatórios
		getRandom(min, max) {
			const value = Math.random() * (max - min) + min
			return Math.round(value)
		},
		healAndHurt() {
			this.heal(10, 15)
			this.hurt('playerLife', 7, 12, false)
		},
		// Função para curar
		heal(min, max) {
			const heal = this.getRandom(min, max)
			this.playerLife = Math.min(this.playerLife + heal, 100)

			// Efeito sonoro de cura
			// document.querySelector("#audio-specialAtack").play()
		},
		// Função para fugir da batalha
		endGame() {
			this.start = this.start == false ? true : false

			// Alterando 'soundtrack'
			document.querySelector("#audio-select").play()
			document.querySelector("#audio-start").pause()
		}
	},
	watch: {
		// Função para escutar hasResult
		// hasResult(value) {
		// 	if(value) {
		// 		this.start = false
		// 	}
		// },
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
	}
})
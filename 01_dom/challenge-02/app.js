new Vue({
    el: '#challenge',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Hello Alert! 👨‍💻')
        },
        inputValue(event) {
            this.valor = event.target.value
        }
    }
})
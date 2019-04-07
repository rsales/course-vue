new Vue({
  el: '#challenge',
  data: {
    myName: 'Rafael Sales',
    age: 25,
    googleImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa1-uOMoGygUdQEEZ8cNnNWwcjLBqernF00QCQcvQw7gtS19l'
  },
  methods: {
    ageMultiplied() {
      return this.age * 3
    },
    numberRandom() {
      return Math.floor(Math.random() * 2)
    }
  },
})
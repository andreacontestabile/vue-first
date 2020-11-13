var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    newTodo: "",
    todos: [
      {
        text: "Comprare il latte"
      },
      {
        text: "Comprare le uova"
      },
      {
        text: "Comprare la farina"
      }
    ]
  },
  methods: {
    createTodo: function () {
      var newTodo = {
        text: this.newTodo
      }
      this.todos.push(newTodo);
    }
  }
});
<!--
  Kravspecifikation TodoApp

  1. Kunna lägga till en todo via ett inputfält
  2. Man ska kunna se alla sina todos inklusive den senaste lagda 
 -->

<template>
  <section>
    <input type="text" id="todo-text" v-model="newTodo" />
    <button @click="addTodo">Lägg till todo</button>
    <article>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo.text }}</li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo });
    }
  }
}
</script>

<style scoped>
ul { 
  list-style-type: none;
}
</style>
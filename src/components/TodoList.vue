<template>
<div>
    <ul class="todo-list mt-4">
           <todo-item v-for="item in todos" :key="item.id" :item="item" >
           </todo-item>
    </ul>
    <div class="w-full flex relative items-center">
        <input @keyup.enter="addTask" class="mt-3 px-2 w-full bg-gray-200 focus:bg-white" type="text" v-model="newItem" placeholder="Start typing and hit enter to create a new ToDo">
        <button class="absolute right-1 bottom-0" @click="addTask">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
    </div>
</div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      items: [],
      newItem: ''
    }
  },
  created () {
    this.$store.dispatch('getTodos')
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('addTodo', {
        text: this.newItem,
        completed: false,
        new: true
      })
      this.newItem = ''
    }
  }
}
</script>

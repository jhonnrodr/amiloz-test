<template>
  <div class="home ">
    <div class="container px-3 py-3 md:max-w-lg mx-auto">
      <div class="bg-white rounded-2xl  px-6 py-6">
        <div class="title font-bold ">Todo List Headline</div>
        <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>
<script>

import TodoList from '../components/TodoList.vue'
export default {
  name: 'HomeView',
  components: {
    TodoList
  }
}
</script>

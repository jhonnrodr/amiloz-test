<template>
  <div class="home ">
    <div class="container px-3 py-3 md:max-w-lg mx-auto">
      <div class="bg-white rounded-2xl  px-6 py-6">
        <div class="title font-bold ">Todo List Headline</div>

         <ul class="todo-list mt-4">
          <li v-for="item in items" :key="item.id" class="flex justify-between items-center mt-3" >
            <div class="flex items-center" :class="{'line-through': item.completed}">
              <input class="" :class="{'text-black': item.completed}" type="checkbox" v-model="item.completed" @click="completeTask(item)" >
              <div class="capitalize ml-3 text-sm font-normal">{{ item.text }}</div>
            </div>
            <div>
            </div>
          </li>
        </ul>
        <div class="w-full flex relative items-center">
          <input @keyup.enter="addTask" class="mt-3 px-2 w-full bg-gray-200 focus:bg-white" type="text" v-model="newItem" placeholder="Start typing and hit enter to create a new ToDo">
          <button class="absolute border border-black  right-1 rounded rounded-full px-1 py-0 h-6 bottom-0" @click="addTask">
           +
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  data () {
    return {
      items: [
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Go to the gym', completed: true }
      ],
      newItem: ''
    }
  },
  methods: {
    getTasks () {

    },
    addTask () {
      this.items.push({
        id: this.items.length + 1,
        text: this.newItem
      })
      this.newItem = ''
    },
    completeTask (item) {
      item.completed = !item.completed
    }
  }
}
</script>

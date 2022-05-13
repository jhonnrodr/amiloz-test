<template>
  <div class="home ">
    <div class="container px-3 py-3 md:max-w-lg mx-auto">
      <div class="bg-white rounded-2xl  px-6 py-6">
        <div class="title font-bold ">Todo List Headline</div>

         <ul class="todo-list mt-4">
          <li v-for="item in items" :key="item.id" class="flex justify-between items-center mt-3" >
            <div class="flex items-center" :class="{'line-through': item.completed}">
              <input class="checkbox h-5 w-5" :class="{'text-black': item.completed}" type="checkbox" v-model="item.completed" @click="completeTask(item)" >
              <div class="capitalize ml-3 text-sm font-normal">{{ item.text }}</div>
            </div>
            <div>
            </div>
          </li>
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
    </div>
  </div>
</template>
<script>
import { db } from '../store/db.js'

export default {
  name: 'HomeView',
  data () {
    return {
      items: [],
      newItem: ''
    }
  },
  created () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      db.collection('todo').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.items.push(
              {
                id: doc.id,
                text: doc.data().text,
                completed: doc.data().completed
              }
            )
          })
        })
    },
    addTask () {
      db.collection('todo')
        .add({
          text: this.newItem,
          completed: false
        })
        .then(() => {
          this.items.push({
            text: this.newItem,
            completed: false
          })
          this.newItem = ''
        })
        .catch((error) => {
          console.log(error)
        })
    },
    completeTask (item) {
      item.completed = !item.completed
      db.collection('todo')
        .doc(item.id)
        .update({
          completed: item.completed
        }).then(() => {
          console.log('updated')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
 .checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    height: 32px;
    width: 32px;
    color: #000;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
}
.checkbox:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

import { createStore } from 'vuex'
import { db } from '../firebase'
export default createStore({
  state: {
    todos: []
  },
  getters: {
    todos (state) {
      return state.todos
    }
  },
  mutations: {
    addTodo (state, todo) {
      console.log('addTodo', todo)
      state.todos.push({
        id: todo.id,
        text: todo.text,
        completed: todo.completed,
        new: todo.new
      })
    },
    getTodos (state, todos) {
      state.todos = todos
    },
    updateTodo (state, todo) {
      const index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(index, 1, {
        completed: todo.completed
      })
    }
  },
  actions: {
    getTodos (context) {
      db.collection('todo').get()
        .then(snapshot => {
          const todos = []
          snapshot.forEach(doc => {
            todos.push(
              {
                id: doc.id,
                text: doc.data().text,
                completed: doc.data().completed
              }
            )
            context.commit('getTodos', todos)
          })
        })
    },
    addTodo (context, todo) {
      console.log(todo)
      db.collection('todo').add({
        text: todo.text,
        completed: todo.completed
      }).then(docRef => {
        context.commit('addTodo', {
          id: docRef.id,
          text: todo.text,
          completed: todo.completed,
          new: todo.new
        })
      })
    },
    completeTodo (context, todo) {
      todo.completed = !todo.completed
      db.collection('todo')
        .doc(todo.id)
        .update({
          completed: todo.completed
        }).then(() => {
          console.log('updated')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})

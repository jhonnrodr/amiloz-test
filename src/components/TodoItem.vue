<template>
    <li :key="item.id" class="flex justify-between items-center mt-3" :class="{'todo-new': item.new}" >
    <div class="flex items-center" :class="{'line-through': item.completed}">
        <input class="checkbox h-5 w-5" :class="{'text-black': item.completed}" type="checkbox" :checked="item.completed"  @click="completeTask(item)" >
        <div class="capitalize ml-3 text-sm font-normal">{{ item.text }}</div>
    </div>
    <div>
    </div>
    </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  methods: {
    completeTask (item) {
      this.$store.dispatch('completeTodo', {
        id: item.id,
        completed: false
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
.todo-new {
  animation: bounce-in .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

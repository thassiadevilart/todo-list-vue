<template>
  <HeaderComponent />

  <div class="main-content-wrapper">
    <DateComponent />
    <div class="list-content-wrapper">
      <TaskCreateComponent @taskCreated="addTaskToList" />
      <ol class="task-list">
        <li v-for="task in todoList" :key="task.title">
          <TaskItemComponent :task="task" />
        </li>
      </ol>
    </div>
  </div>

  <div class="line" />
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import DateComponent from './components/DateComponent.vue'
import TaskCreateComponent from './components/TaskCreateComponent.vue'
import TaskItemComponent from './components/TaskItemComponent.vue'

import { ref } from 'vue'
import Task from './data/task'

function addTaskToList(taskName) {
  let newTask = new Task(taskName, '')

  todoList.value.push(newTask)
}
const todoList = ref([])
</script>

<style>
body {
  background: var(--background);
  background-image: url(./assets/bg-image.png);
  background-size: cover;
  background-position: center;
  overflow-y: hidden;

  .line {
    width: 1px;
    height: 100vh;
    background: var(--gray);
    position: fixed;
    left: 50%;
    top: 0;
    margin: auto;
  }
}
.main-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
}

.list-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 50%;
}

.task-list {
  overflow-y: scroll;
  height: 400px;
}

.task-list::-webkit-scrollbar {
  display: none;
}

.task-list::-webkit-scrollbar-thumb {
  display: none;
}
</style>
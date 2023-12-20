<template>
  <HeaderComponent />

  <div class="main-content-wrapper">
    <DateComponent />
    <div class="list-content-wrapper">
      <TaskCreateComponent @taskCreated="addTaskToList" />
      <div class="task-list">
        <TaskItemComponent />

      </div>
    </div>
  </div>

  <div class="line" />
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import DateComponent from './components/DateComponent.vue'
import TaskCreateComponent from './components/TaskCreateComponent.vue'
import TaskItemComponent from './components/TaskItemComponent.vue'

function addTaskToList(taskName) {
  todoList.push(taskName)
  console.log(todoList) //todo: remove
}
const todoList = []
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

<template>
  <HeaderComponent />
  
  <DateComponent />
  <TaskCreateComponent @taskCreated="addTaskToList" />

  <div class="taskList">
    <TaskItemComponent />
  </div>

  <div class="line" />
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import DateComponent from './components/DateComponent.vue'
import TaskCreateComponent from './components/TaskCreateComponent.vue'
import TaskItemComponent from './components/TaskItemComponent.vue'

function addTaskToList(taskName){
  todoList.push(taskName)
  console.log(todoList)//todo: remove
}
const todoList = []

</script>

<style>
body {
  background: var(--background);
  background-image: url(./assets/bg-image.png);
  background-size: cover;
  background-position: center;

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
</style>

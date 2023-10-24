<template>
  <HeaderComponent />
  <DateComponent />
  <TaskCreateComponent />

  <div class="taskList">
    <TaskItemComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import DateComponent from './components/DateComponent.vue'
import TaskCreateComponent from './components/TaskCreateComponent.vue'
import TaskItemComponent from './components/TaskItemComponent.vue'
</script>

<style>
body {
  background: var(--background);

  background-image: url(./assets/bg-image.png);
  background-size: cover;
  background-position: center;
  width: 100%;
}
</style>

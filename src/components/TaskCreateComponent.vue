<template>
  <div class="taskCreateWrapper">
    <label>
      <font-awesome-icon :icon="['fas', 'pencil']" />
      <input type="text" maxlength="28" v-model="taskName" />
    </label>

    <button @click="addTask()" :disabled="disableButton()">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['taskCreated'])
const taskName = ref('')

function addTask() {
  emit('taskCreated', taskName.value)
  taskName.value = ''
}

function disableButton() {
  return taskName.value.trim() == ''
}
</script>

<style>
.taskCreateWrapper {
  border: 1px solid red;
}
</style>

<template>
  <div class="task-create-wrapper">
    <div class="task-create-input-wrapper">
      <font-awesome-icon class="task-create-icon" :icon="['fas', 'pencil']" />
      <input
        class="task-create-input"
        type="text"
        maxlength="28"
        placeholder="New Task"
        v-model="taskName"
      />

      <button class="task-create-button" @click="addTask()" :disabled="disableButton()">
        <font-awesome-icon class="task-create-icon-plus" :icon="['fas', 'plus']" />
      </button>
    </div>
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
.task-create-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-create-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  background: #4a555814;
  padding: 10px;
  border-radius: 5px;
}

.task-create-input {
  background: none;
  outline: none;
  border: none;

  margin-left: 5px;
  font-size: 1rem;
  color: var(--gray);
  padding: 5px;
  font-weight: 100;
}

.task-create-input::placeholder {
  opacity: 30%;
}

.task-create-icon {
  color: var(--gray);
  padding-left: 5px;
}

.task-create-button {
  background: none;
  border: none;
}

.task-create-icon-plus {
  border-left: 1px solid var(--gray);
  padding-left: 10px;
  cursor: pointer;
  font-size: 1rem;
}
</style>

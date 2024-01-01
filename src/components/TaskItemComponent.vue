<script setup>
import { ref } from 'vue'
import Task from '../data/task'

defineProps({ task: Task })

const taskDone = ref(false)
const expandTaskDescription = ref(false)

function toggle() {
  expandTaskDescription.value = !expandTaskDescription.value
}
</script>

<template>
  <div
    class="task-item-wrapper"
    :class="{
      'task-item-wrapper-colapsed': !expandTaskDescription,
      'task-item-wrapper-checked': taskDone
    }"
  >
    <div class="task-item-first-column">
      <input class="input-checkbox" v-model="taskDone" type="checkbox" id="checkbox" />
      <label class="input-checkbox-label" for="checkbox"> </label>

      <h1 class="task-name">{{ task.title }}</h1>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        @click="toggle()"
        :class="{ 'chevron-spin': expandTaskDescription }"
        class="chevron-down"
      />
    </div>

    <font-awesome-icon :icon="['fas', 'trash-can']" class="icon-trash" />
  </div>

  <div
    class="task-description"
    :class="{ 'task-description-checked': taskDone }"
    v-if="expandTaskDescription"
  >
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt perferendis
      laboriosam. Minima numquam praesentium at fugit iste commodi molestias autem a obcaecati
      inventore iusto eos, omnis porro, suscipit dicta?
    </p>
  </div>
</template>

<style>
.task-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 442px;
  height: 40px;

  border-radius: 5px 5px 0 0;
  border: 1px solid var(--blue);
  border-left: 10px solid var(--blue);

  padding: 10px;
  margin-top: 10px;
}

.task-item-wrapper-colapsed {
  border-radius: 5px;
}

.task-item-first-column {
  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    margin-right: 10px;
    color: var(--blue);
  }
}

.icon-trash {
  cursor: pointer;
  color: var(--blue);
  padding-right: 20px;
}

.task-description {
  width: 442px;

  border: 1px solid var(--blue);
  border-top: 0;
  border-left: 10px solid var(--blue);
  border-radius: 0 0 5px 5px;

  padding: 10px;
}

.task-item-wrapper-checked {
  border: 1px solid var(--pink);
  border-left: 10px solid var(--pink);

  & * {
    color: var(--pink);
  }
}

.task-description-checked {
  border: 1px solid var(--pink);
  border-left: 10px solid var(--pink);
  border-top: 0;

  color: var(--pink);
}

.input-checkbox {
  appearance: none;
  -webkit-appearance: none;

  width: 1.2rem;
  height: 1.2rem;

  border: solid 1px var(--blue);
  border-radius: 50%;

  cursor: pointer;
}

.input-checkbox:checked {
  background-image: url(../assets/icon-checked.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  border: none;
}

.chevron-down {
  transition: transform 0.5s;

  cursor: pointer;
}

.chevron-spin {
  transform: scaleY(-1);
  transition: transform 0.5s;
}
</style>
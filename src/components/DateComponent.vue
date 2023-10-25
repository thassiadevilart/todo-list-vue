<script setup>
import { computed } from 'vue'

let dayNumber = new Date().getDate()
let getWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' })
let getMonth = new Date().toLocaleDateString('en-US', { month: 'long' })

const currentDay = computed(() => {
  if (dayNumber < 10) {
    return '0' + dayNumber
  } else {
    return dayNumber
  }
})

const dayAbbreviation = computed(() => {
  if (dayNumber == 1 || dayNumber == 21 || dayNumber == 31) {
    return 'st'
  } else if (dayNumber == 2 || dayNumber == 22) {
    return 'nd'
  } else if (dayNumber == 3 || dayNumber == 23) {
    return 'rd'
  } else {
    return 'th'
  }
})
</script>

<template>
  <div class="dateWrapper">
    <div class="navigation">
      <font-awesome-icon :icon="['fa', 'chevron-left']" />
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </div>

    <span class="week">{{ getWeek }}</span>

    <div class="dayWrapper">
      <span class="day"> {{ currentDay }}</span>
      <span class="dayAbbreviation">{{ dayAbbreviation }}</span>
    </div>

    <span class="month">{{ getMonth }}</span>
  </div>
</template>

<style>
.dateWrapper {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 85vh; /* Todo: Fix height */
  width: 50%;
}

.week {
  color: var(--blue);
  font-weight: 400;
  margin-bottom: 15px;
}

.dayWrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 0;
}

.day {
  font-size: 10rem;
  font-weight: 200;
  color: var(--blue);
}

.dayAbbreviation {
  font-size: 1.5rem;
  font-weight: 200;
}

.month {
  color: var(--blue);
  font-size: 2.2rem;
  font-weight: 200;
}

.navigation {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--gray);
  position: absolute;

  display: none; /* Todo: Make arrow navigation */
}

.navigation > * {
  cursor: pointer;
  padding: 20px;
}
</style>

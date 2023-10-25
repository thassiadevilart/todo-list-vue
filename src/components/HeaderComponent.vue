<script setup></script>

<template>
  <div class="headerWrapper">
    <div class="headerGrid">
      <h1>Todo<mark>List</mark></h1>
      <input type="date" class="inputDate"/>
    </div>
  </div>
</template>

<style>
.headerWrapper {
  padding: 10px 0 10px 0;
  width: 50%;
  border-bottom: 1px solid var(--gray);
}

.headerGrid {
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

h1 mark {
  font-weight: 100;
  background: none;
  color: var(--blue);
  font-size: 1.8rem;
}

h1 {
  font-weight: 400;
  color: var(--blue);
  font-size: 1.8rem;
}

.inputDate {
  background: none;
  color: var(--blue);
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  outline: none;
}

input[type='date']::-webkit-datetime-edit-text {
  -webkit-appearance: none;
  display: none;
}

input[type='date']::-webkit-datetime-edit-month-field {
  -webkit-appearance: none;
  display: none;
}

input[type='date']::-webkit-datetime-edit-day-field {
  -webkit-appearance: none;
  display: none;
}

input[type='date']::-webkit-datetime-edit-year-field {
  -webkit-appearance: none;
  display: none;
}

input[type='date']::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 70%;
}
</style>
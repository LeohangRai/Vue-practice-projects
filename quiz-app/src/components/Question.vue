<script setup>
  import { defineProps } from 'vue';
  const { question } = defineProps(['question']);
</script>

<template>
  <div class="question-container">
    <h1 class="question">
      {{ question.text }}
    </h1>
  </div>
  <div class="options-container">
    <div v-for="option in question.options" :key="option.id" class="option">
      <p class="option-label">{{ option.label }}</p>
      <p class="option-value">{{ option.text }}</p>
    </div>
  </div>
</template>

<style scoped>
  .question-container {
    margin-top: 20px;
  }

  .question {
    font-size: 40px;
    margin-bottom: 20px;
  }

  .option {
    cursor: pointer;
    display: flex;
    margin-bottom: 20px;
  }

  .option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    margin: 0;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    height: 50px;
    margin: 0;
    font-size: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
</style>

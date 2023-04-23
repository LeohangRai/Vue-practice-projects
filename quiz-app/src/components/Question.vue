<template>
  <div class="question-container">
    <h1 class="question">What is the height of Mt. Everest?</h1>
  </div>
  <div class="options-container">
    <div class="option">
      <p class="option-label">A</p>
      <p class="option-value">8858 meters</p>
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
    /* display: flex; */
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
  }

  .option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
</style>

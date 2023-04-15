<script setup>
  import { ref } from "vue"
  const count = ref(0);
  const incrementCount = () => {
    count.value += 1;
    console.log("increment");
  }

  const decrementCount = () => {
    count.value -= 1;
    console.log("decrement");
  }
</script>

<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="decrementCount">-</button>
      <button @click="incrementCount">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    text-align: center;
  }
</style>
<script setup>
import { ref } from 'vue';
const showText = ref(true);
</script>

<template>
  <main>
    <h1 v-if="showText">Hello</h1>
    <button @click="showText = !showText">Toggle</button>
  </main>
</template>

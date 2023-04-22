<script setup>
import cars from "../data/cars.json";
import { useRoute, RouterView } from "vue-router";
const route = useRoute();
const car = cars.find((c) => c.id === Number(route.params.id));
</script>

<template>
  <div>
    <h1>Car View</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <RouterView />
  </div>
</template>

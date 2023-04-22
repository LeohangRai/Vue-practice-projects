<script setup>
import cars from "../data/cars.json";
import { useRoute, useRouter, RouterView } from "vue-router";
const route = useRoute();
const router = useRouter();

const car = cars.find((c) => c.id === Number(route.params.id));
</script>

<template>
  <div>
    <h1>Car View</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <button @click="router.push(`/cars/${car.id}/contact`)">
      Click for Contact Info
    </button>
    <RouterView />
  </div>
</template>

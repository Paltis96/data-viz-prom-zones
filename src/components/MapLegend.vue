<template>
  <AppMapCard>
    <div class="flex justify-end items-center">
      <div class="w-full text-left text-md text-zinc-100">
        Початкова ціна ₴/м2
      </div>
      <slot></slot>

    </div>
    <div class="flex flex-col w-full gap-2 mt-4">
      <div class="w-full h-3 rounded-full bg-gradient-legend"></div>
      <div class="flex w-full text-sm text-zinc-100">
        <div class="">15 000</div>
        <div class="flex flex-1 justify-center">55 000</div>
        <div class="">95 000</div>
      </div>
    </div>
  </AppMapCard>
</template>

<script setup>

import AppMapCard from "./MapCard.vue";
</script>

<style scoped>
.bg-gradient-legend {
  background: linear-gradient(0.25turn, #ffff00, #ff0000, #b80fae);
}
</style>

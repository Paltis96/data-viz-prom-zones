<template>
  <div class="absolute z-10 bottom-5 left-5 flex flex-col gap-2">
    <MapInfo />
    <MapLegend />
  </div>
  <AppMap />
</template>

<script setup>
import AppMap from "./components/AppMap.vue";
import MapLegend from "./components/MapLegend.vue";
import MapInfo from "./components/MapInfo.vue";
</script>

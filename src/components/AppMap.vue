<template>
  <div class="w-full h-full" ref="container"></div>
</template>

<script setup>
import { Map, addProtocol } from "maplibre-gl";
import { Protocol } from "pmtiles";

import {style} from "@/data/style.js";

import { ref, onMounted, shallowRef, markRaw } from "vue";

const container = ref(null);
const map = shallowRef(null);
let protocol = new Protocol();
addProtocol("pmtiles", protocol.tile);

onMounted(() => {
  map.value = markRaw(
    new Map({
      container: container.value, // container id
      style: style,
      center: [30.49354, 50.44423], // starting position [lng, lat]
      zoom: 11, // starting zoom
      maxZoom:15,
      minZoom:10,
      maxBounds:[[30.11529, 50.16268],[30.95087, 50.65882]]
    })
  );
});
</script>
49.9530,29.9678 50.7977,30.8892

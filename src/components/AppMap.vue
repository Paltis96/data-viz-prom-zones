<template>
  <div class="w-full h-full" ref="container"></div>
</template>

<script setup>
import { Map, addProtocol } from "maplibre-gl";
import { Protocol } from "pmtiles";
import { style } from "@/data/style.js";
import { ref, onMounted, shallowRef, markRaw, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
const emit = defineEmits(["clickFeature", "loaded"]);
const props = defineProps(["showCompetitors"]);
const container = ref(null);
const map = shallowRef(null);
const selectedFeature = ref(null);

let protocol = new Protocol();

addProtocol("pmtiles", protocol.tile);

function zoomTo(feature) {
  let mapZoom = map.value.getZoom();
  if (mapZoom > 13) {
    map.value.easeTo({
      center: [feature.properties.lon, feature.properties.lat - calcShift()],
      zoom: 13,
    });
  } else {
    map.value.easeTo({
      center: [feature.properties.lon, feature.properties.lat - calcShift()],
    });
  }
}

function showCompetitors(feature) {
  map.value
    .setFilter("competitor-layer", ["in", "promka_id", feature.properties.id])
    .setFilter("competitor-symbol", ["in", "promka_id", feature.properties.id]);
}

function hideCompetitors() {
  map.value
    .setFilter("competitor-layer", ["in", "promka_id", ""])
    .setFilter("competitor-symbol", ["in", "promka_id", ""]);
}

function calcShift() {
  let h = 0;
  if (width.value <= 768) {
    const bounds = map.value.getBounds();
    h = (bounds.getNorth() - bounds.getSouth()) /4;
  }
  return h;
}

watch(
  () => props.showCompetitors,
  (newVal) => {
    if (newVal) showCompetitors(selectedFeature.value);
    else hideCompetitors();
  }
);
onMounted(() => {
  map.value = markRaw(
    new Map({
      container: container.value,
      style: style,
      center: [30.49354, 50.44423],
      zoom: 11,
      maxZoom: 15,
      minZoom: 10,
      maxBounds: [
        [30.11529, 50.16268],
        [30.95087, 50.65882],
      ],
    })
  );
  map.value.on("load", () => {
    emit("loaded");
  });
  map.value.on("click", () => {
    hideCompetitors();
    map.value.setFilter("highlighted", ["in", "id", ""]);

    selectedFeature.value = null;
    emit("clickFeature", selectedFeature.value);
  });
  map.value.on("click", "prom", (e) => {
    let feature = e.features[0];
    zoomTo(feature);

    map.value.setFilter("highlighted", ["in", "id", feature.properties.id]);

    selectedFeature.value = feature;
    emit("clickFeature", selectedFeature.value.properties);

    if (props.showCompetitors) showCompetitors(selectedFeature.value);
  });
});
</script>

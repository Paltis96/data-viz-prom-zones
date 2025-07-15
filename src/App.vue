<template>
  <AppPreloader v-if="!loaded" />
  <AppModal title="FAQ" v-if="showModal">
    <template #default>
      <FAQ :data="q" />
    </template>
    <template #footer>
      <AppButton @click="switchModal" label="Ok"> </AppButton>
    </template>
  </AppModal>
  <div
    class="absolute z-10 bottom-0 md:bottom-5 md:left-5 flex flex-col md:gap-2 max-sm:w-full"
  >
    <MapInfo :data="mapInfo" @show-competitor="(e) => (competitor = e)" />
    <MapLegend>
      <AppButton rounded small variant="neutral" @click="switchModal">
        <LucideMessageCircleQuestion class="text-md" />
      </AppButton>
    </MapLegend>
  </div>
  <AppMap
    @click-feature="(e) => (mapInfo = e)"
    @loaded="loaded = true"
    :show-competitors="competitor"
  />
</template>

<script setup>
import { ref } from "vue";

import AppMap from "./components/AppMap.vue";
import MapLegend from "./components/MapLegend.vue";
import MapInfo from "./components/MapInfo.vue";
import AppModal from "./components/AppModal.vue";
import AppButton from "./components/AppButton.vue";
import LucideMessageCircleQuestion from "./components/icons/LucideMessageCircleQuestion.vue";
import AppPreloader from "./components/AppPreloader.vue";
import FAQ from "./components/FAQ.vue";
import faq from "./data/faq.json";
const mapInfo = ref(null);
const competitor = ref(false);
const showModal = ref(false);
const loaded = ref(false);
function switchModal() {
  showModal.value = !showModal.value;
}
const q = faq;
</script>

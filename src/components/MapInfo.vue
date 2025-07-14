<template>
  <AppMapCard v-if="data">
    <h2 class="text-xl text-zinc-100 font-bold mb-2"></h2>
    <div class="w-full inline-flex gap-4 pt-2 pb-4 border-b-1 border-zinc-800">
      <div class="inline-flex gap-2 items-center">
        <span class="text-zinc-300 text-sm">Клас:</span>
        <AppBadge :label="data.class" />
      </div>
      <div class="inline-flex gap-2 items-center">
        <span class="text-zinc-300 text-sm">Квартир:</span>
        <AppBadge :label="formatNum(data.cost)" />
      </div>
    </div>
    <div class="w-full flex gap-4 pt-2 pb-4 border-b-1 border-zinc-800">
      <div class="flex flex-col gap-2 items-start w-full">
        <span class="text-zinc-300 text-sm">Початкова ціна ₴/м2:</span>
        <span class="text-3xl font-bold text-blue-500">
          {{ formatNum(data.money_amount_text) }}</span
        >
      </div>
      <div class="flex flex-col gap-2 items-start w-full">
        <span class="text-zinc-300 text-sm">Потенціал діл млн ₴:</span>
        <span class="text-3xl font-bold text-emerald-500"
          >{{ formatNum(data.apartments) }}
        </span>
      </div>
    </div>
    <div class="mt-2">
      <AppButton
        @click="switchCompetitors"
        block
        label="Переглянути конкурентів"
        :variant="competitors ? 'main' : 'neutral'"
      ></AppButton>
    </div>
  </AppMapCard>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";

import AppMapCard from "./MapCard.vue";
import AppBadge from "./AppBadge.vue";
import AppButton from "./AppButton.vue";

const competitors = ref(false);
const props = defineProps(["data"]);
const emit = defineEmits(["showCompetitor"]);

function formatNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function switchCompetitors() {
  competitors.value = !competitors.value;
  emit("showCompetitor", competitors.value);
}
</script>

<style lang="scss" scoped></style>

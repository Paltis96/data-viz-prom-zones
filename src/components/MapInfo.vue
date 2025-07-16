<template>
  <AppMapCard v-if="data">
    <h2 class="text-xl text-zinc-100 font-bold mb-2">{{ data.street }}</h2>
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
      <AppToggle
        @checked="(e) => switchCompetitors(e)"
        :in-state="competitors"
        label="Показати конкурентів"
      />
    </div>
  </AppMapCard>
</template>

<script setup>
import { ref } from "vue";

import AppMapCard from "./MapCard.vue";
import AppBadge from "./AppBadge.vue";
import AppButton from "./AppButton.vue";
import AppToggle from "./AppToggle.vue";

const competitors = ref(false);
const props = defineProps(["data"]);
const emit = defineEmits(["showCompetitor"]);

function formatNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function switchCompetitors(e) {
  competitors.value = e;
  emit("showCompetitor", e);
}
</script>

<style lang="scss" scoped></style>

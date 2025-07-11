<template>
  <AppMapCard>
    <div class="flex justify-end items-center">
      <div class="w-full text-left text-md text-zinc-100">
        Початкова ціна ₴/м2
      </div>
      <AppButton rounded small variant="neutral">
        <LucideMessageCircleQuestion class="text-md" />
      </AppButton>
    </div>
    <div class="flex flex-col w-full gap-2 mt-4">
      <div class="w-full h-3 rounded-full bg-gradient-legend"></div>
      <div class="flex w-full text-sm text-zinc-100">
        <dib class="">15 000</dib>
        <dib class="flex flex-1 justify-center">55 000</dib>
        <dib class="">95 000</dib>
      </div>
    </div></AppMapCard
  >
</template>

<script setup>
import AppButton from "./ui/AppButton.vue";
import LucideMessageCircleQuestion from "./icons/LucideMessageCircleQuestion.vue";
import AppMapCard from "./MapCard.vue";
</script>

<style scoped>
.bg-gradient-legend {
  background: linear-gradient(0.25turn, #ffff00, #ff0000, #b80fae);
}
</style>

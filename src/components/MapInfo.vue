<template>
  <AppMapCard>
    <h2 class="text-xl text-zinc-100 font-bold mb-2">
      вул. Академіка Каблукова
    </h2>
    <div class="w-full inline-flex gap-4 pt-2 pb-4 border-b-1 border-zinc-800">
      <div class="inline-flex gap-2 items-center">
        <span class="text-zinc-300 text-sm">Клас:</span>
        <AppBadge label="конфорт" />
      </div>
      <div class="inline-flex gap-2 items-center">
        <span class="text-zinc-300 text-sm">Квартир:</span>
        <AppBadge label="конфорт" />
      </div>
    </div>
    <div class="w-full flex gap-4 pt-2 pb-4 border-b-1 border-zinc-800">
      <div class="flex flex-col gap-2 items-start w-full">
        <span class="text-zinc-300 text-sm">Початкова ціна ₴/м2:</span>
        <span class="text-3xl font-bold text-blue-500">27 264 </span>
      </div>
      <div class="flex flex-col gap-2 items-start w-full">
        <span class="text-zinc-300 text-sm">Потенціал діл млн ₴:</span>
        <span class="text-3xl font-bold text-emerald-500">27 264 </span>
      </div>
    </div>
    <div class="mt-2">
      <AppButton block label="Переглянути конкурентів"></AppButton>
    </div>
  </AppMapCard>
</template>

<script setup>
import AppMapCard from "./MapCard.vue";
import AppBadge from "./ui/AppBadge.vue";
import AppButton from "./ui/AppButton.vue";
</script>

<style lang="scss" scoped></style>

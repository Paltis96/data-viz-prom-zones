<template>
  <div v-auto-animate v-for="(item, idx) in data" :key="idx" class="pb-4 px-2 w-full">
    <div
      @click="switchActivbe(idx)"
      class="cursor-pointer flex items-center justify-between gap-1.5 px-4 py-2 bg-zinc-800 text-white"
    >
      <h2 class="md:text-lg font-medium">
        {{ item.title }}
      </h2>

      <svg
        class="block size-5 shrink-0 group-open:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          :d="[
            activeItem != idx
              ? 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              : 'M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
          ]"
        />
      </svg>
    </div>
    <div v-if="activeItem == idx">
      <p
        v-for="(descr, didx) in item.descr"
        :key="didx"
        class="px-4 pt-4 text-sm md:text-md text-white"
      >
        {{ descr }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(["data"]);

const activeItem = ref(-1);

function switchActivbe(idx) {
  if (activeItem.value == idx) activeItem.value = -1;
  else activeItem.value = idx;
}
</script>

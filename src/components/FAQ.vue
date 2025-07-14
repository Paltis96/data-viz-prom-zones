<template>
  <div v-for="(item, idx) in data" :key="idx" class="pb-4 px-2">
    <div class="">
      <div
        @click="switchActivbe(idx)"
        class="cursor-pointer flex items-center justify-between gap-1.5 rounded-md border p-4 border-zinc-700 bg-zinc-800 text-white"
      >
        <h2 class="md:text-lg font-medium">
          {{ item.title }}
        </h2>

        <svg
          class="size-5 shrink-0 transition-transform duration-300"
          :class="[activeItem == idx ? '-rotate-180' : '']"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
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

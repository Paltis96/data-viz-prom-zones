<template>
  <button
    class="transition-all inline-flex gap-2 items-center text-sm font-semibold text-zinc-100 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="
      [colorClass[variant]],
      block ? 'w-full justify-center' : '',
      rounded ? 'rounded-full' : 'rounded-md',
      small ? 'px-2.5 py-2.5' : 'px-3.5 py-2.5'
    "
  >
    <slot></slot>
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  variant: { type: String, default: "main", required: false },
  block: { type: Boolean, required: false },
  rounded: { type: Boolean, required: false },
  small: { type: Boolean, required: false },
});

const colorClass = {
  neutral: "bg-gray-500/10 hover:bg-gray-500/20",
  main: "bg-indigo-600 hover:bg-indigo-700",
};
</script>

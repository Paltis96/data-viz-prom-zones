<template>
  <button
    class="transition-all inline-flex gap-2 items-center rounded  text-sm font-medium text-white "
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
import { defineProps } from "vue";

const props = defineProps({
  label: { type: String, required: false },
  variant: { type: String, default: "main", required: false },
  block: { type: Boolean, required: false },
  rounded: { type: Boolean, required: false },
  small: { type: Boolean, required: false },
});

const colorClass = {
  neutral: "bg-gray-500/20 hover:bg-gray-500/40",
  main: "bg-indigo-600 hover:bg-indigo-700",
};
</script>

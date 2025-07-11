<template>
  <div
    class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-zinc-300/20 text-purple-100"
  >
    {{ label }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["label"]);
</script>

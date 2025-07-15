<template>
  <div
  @click="checked = !checked"
    class="inline-flex gap-2 px-2 py-4 rounded-lg w-full items-center bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer"
  >
    <label
      for="AcceptConditions"
      class="relative block h-6 w-12 rounded-full transition-colors [-webkit-tap-highlight-color:_transparent] bg-zinc-600 has-checked:bg-indigo-500"
    >
      <input
       @click.stop.prevent
        type="checkbox"
        id="AcceptConditions"
        v-model="checked"
        class="peer sr-only"
      />
      <span
        class="absolute inset-y-0 start-0 m-1 size-4 rounded-full transition-[inset-inline-start] peer-checked:start-6 bg-zinc-900"
      ></span>
    </label>
    <span class="text-zinc-100 text-md">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";

const props = defineProps(["label", "inState"]);
const emits = defineEmits(["checked"]);
const checked = ref(false);

watch(checked, (newVal) => {
  emits("checked", newVal);
});

onBeforeMount(() => {
  checked.value = props.inState;
});
</script>

<style lang="scss" scoped></style>

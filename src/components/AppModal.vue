<template>
  <div
    class="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modalTitle"
  >
    <div class="md:w-xl rounded-lg p-6 shadow-lg bg-zinc-900">
      <h2 id="modalTitle" class="text-xl font-bold sm:text-2xl text-white">
        {{ title }}
      </h2>

      <div class="mt-4 w-full h-[450px] overflow-x-auto">
        <slot> </slot>
      </div>

      <footer class="mt-6 flex justify-end gap-2">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
<script setup>
defineProps(["title"]);
</script>

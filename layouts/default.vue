<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'page'
  }
})
</script>
<template>
  <div class="bg-gray-100 min-h-[100svh] text-gray-800">
    <SharedTheHeader></SharedTheHeader>
    <div class="container mx-auto px-4">
      <slot />
    </div>
  </div>
</template>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

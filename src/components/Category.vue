<template>
  <div class="flex justify-between mt-[60px]">
    <div class="flex flex-col items-center">
      <img class="mb-5" :src="url" alt="">
      <p class="font-inter text-2xl font-medium">{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  url: string
  name: string
}>()
</script>

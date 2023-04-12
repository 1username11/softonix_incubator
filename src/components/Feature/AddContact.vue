<template>
  <span
    @click=""
  >
    Add Contact
  </span>
  <template v-if="addMode">
    <input
      ref="inputRef"
      v-model="localContact.name"
      type="text"
      class="block font-medium w-full"
    >
    <input
      v-model="localContact.description"
      type="text"
      class="block mt-1 text-gray w-full"
    >
  </template>
</template>

<script>
import { ref } from 'vue'

const addMode = ref(false)
async function triggerAddMode () {
  addMode.value = true
  return addMode.value
}
</script>

<style scoped>

</style>

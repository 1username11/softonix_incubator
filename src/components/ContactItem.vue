<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block w-full"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full"
            >
          </template>

          <template v-else>
            <p>{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image"
          alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2 text-xs">
        <template v-if="editMode">
          <span
            class="text-blue-500 cursor-pointer hover:underline"
            @click="editMode = false"
          >Cancel
          </span>

          <span
            :class="!isDisabled ? 'text-blue-500 cursor-pointer hover:underline'
              :'cursor-not-allowed text-gray'"
            @click="onSave"
          >Save
          </span>
        </template>

        <template v-else>
          <span
            class="text-blue-500 cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>

          <span
            class="text-red-500 cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
        border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()
const editMode = ref(false)

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  if (!isDisabled.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}

const isDisabled = computed(() => !!(!localContact.value.name || !localContact.value.description))

defineExpose({ triggerEditMode })
</script>

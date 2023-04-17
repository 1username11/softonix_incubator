<template>
  <div>
    <div class="flex items-center gap-4">
      <h3 class="font-medium m-0">Contact list</h3>
      <AppButton @click="createNewContact">
        <template #icon>
          <IconPlus class="w-5 h-5" />
        </template>
        Create Contact
      </AppButton>
      <AppInput v-model="searchParam" placeholder="Search..." class="max-w-[400px]" />
      <div class="pr-2 pl-2.5 pt-0.5 pb-0.5 border border-amber-100 bg-amber-200 rounded-3xl items-center">
        <select v-model="role" class="bg-amber-200">
          <option disabled value="">roles filter</option>
          <option
            v-for="(role, idx) in roles"
            :key="idx"
            class="text-gray font-semibold"
            :role="role"
          >
            {{ role }}
          </option>
        </select>
      </div>
      <div class="pr-2 pl-2.5 pt-0.5 pb-0.5 border border-amber-100 bg-amber-200 rounded-3xl items-center">
        <select v-model="sortingType" class="bg-amber-200">
          <option disabled value="">sorting</option>
          <option
            v-for="(sortingType, idx) in sortingTypeArr"
            :key="idx"
            class="text-gray font-semibold"
            :sortingType="sortingType"
          >
            {{ sortingType }}
          </option>
        </select>
      </div>
    </div>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-for="contact in filteredArr"
        :key="contact.id"
        class="cursor-pointer"
        :contact="contact"
        @click="editContact(contact.id)"
        @delete="deleteContact(contact)"
        @save="updateContact($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store'
import { storeToRefs } from 'pinia'
import AppInput from '@/components/AppInput.vue'
import { computed, ref } from 'vue'
import type { IContact } from '@/types'

const contactsStore = useContactsStore()
const { contacts, searchParam, roles } = storeToRefs(contactsStore)
const { deleteContact, updateContact, filterArr } = contactsStore
const router = useRouter()

const sortingType = ref('')
const role = ref('')

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}

const sortingTypeArr = [
  'default',
  'ascending',
  'descending'
]

function ascendingSort (a: IContact, b: IContact) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
  return 0
}

function descendingSort (a: IContact, b: IContact) {
  if (a.name > b.name) {
    return -1
  }
  if (a.name < b.name) {
    return 1
  }
  return 0
}

const filteredArr = computed(() => filterArr(contacts.value, searchParam.value)
  .filter((item) => item.role.includes(role.value))
  .sort(
    (a: IContact, b: IContact): any => {
      if (sortingType.value === 'ascending') {
        return ascendingSort(a, b)
      } else if (sortingType.value === 'descending') {
        return descendingSort(a, b)
      }
    }
  ))

</script>

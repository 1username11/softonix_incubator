import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'user'
    }
  ])
  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }
  const roles = ref(['all', 'admin', 'user'])
  function onContactSave (contact: IContact, index: number) {
    contacts.value[index] = { ...contact }
  }
  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  const searchParam = ref('')

  function filterArr (contacts: IContact[], searchParam: string) {
    return contacts.filter((item) => {
      return item.description.toUpperCase().includes(searchParam.toUpperCase()) ||
          item.name.toUpperCase().includes(searchParam.toUpperCase())
    })
  }
  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }
  return {
    contacts,
    deleteContact,
    addContact,
    filterArr,
    searchParam,
    updateContact,
    roles
  }
})

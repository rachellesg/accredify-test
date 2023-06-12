<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  title: string
}>()

const fetchDocument = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/document')
    const data = await response.json()
    documentData.value = data.data
  } catch (error) {
    console.error('Error fetching document data:', error)
  }
}

onMounted(fetchDocument)
</script>

<script lang="ts">
import RecentDocumentItem from './RecentDocumentItem.vue'

const documentData = ref<Document | null>(null)

interface DocumentData {
  data: Document[]
  links: {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

interface Document {
  id: number
  status: string
  document_name: string
  issuer_name: string
  issuer_logo_url: string
  recipient_name: string
  received_on: string | null
  expire_at: string | null
  created_at: string
  updated_at: string
  archived_at: string | null
  deleted_at: string | null
}

interface Link {
  url: string | null
  label: string
  active: boolean
}
</script>

<template>
  <section>
    <div class="row">
      <h4>{{ title }}</h4>
      <RouterLink to="/">View All Documents</RouterLink>
    </div>
    <div class="container document-wrapper">
      <RecentDocumentItem>
        <template #document-name>Documentation</template>
        <template #date>23 July 2023</template>
        <template #action><img src="@/assets/icons/kebab.svg" /> </template>
      </RecentDocumentItem>
    </div>
  </section>
</template>

<style scoped>
section {
  flex: 1;
}

.document-wrapper {
  display: flex;
  flex-direction: column;
}
</style>

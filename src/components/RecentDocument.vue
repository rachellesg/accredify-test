<script setup lang="ts">
import { ref, onMounted } from 'vue'
import moment from 'moment'

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
const documentData = ref<Document[] | null>(null)
</script>

<template>
  <section>
    <div class="row">
      <h4>{{ title }}</h4>
      <RouterLink to="/">View All Documents</RouterLink>
    </div>
    <div class="container document-wrapper">
      <table>
        <thead>
          <tr>
            <th colspan="2">Document Name</th>
            <th colspan="2">Received On</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in documentData" :key="item?.id">
            <td width="5%" align="left">
              <i>
                <slot name="icon">
                  <img src="@/assets/icons/file.svg" />
                </slot>
              </i>
            </td>
            <td width="75%" class="name">{{ item?.document_name }}</td>
            <td width="20%">
              {{ item?.received_on ? moment(item?.received_on).format('DD MMM YYYY') : '' }}
            </td>
            <td width="5%">
              <img src="@/assets/icons/kebab.svg" />
            </td>
          </tr>
        </tbody>
      </table>
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

table,
tbody {
  width: 100%;
}

thead {
  text-align: left;
}

thead tr th,
tbody tr .name {
  font-weight: bold;
}

tr {
  position: relative;
  height: 60px;
}

tr:after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #d0d2d6;
}

i img {
  display: block;
  width: 16px;
  height: 20px;
  margin-right: 5px;
  /* changes svg to  #493df5  */
  filter: invert(22%) sepia(88%) saturate(6110%) hue-rotate(246deg) brightness(100%) contrast(93%);
}

.title {
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #151f32;
}
</style>

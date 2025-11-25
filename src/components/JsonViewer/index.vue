<template>
  <div class="json-viewer root">
    <JsonViewerItem v-if="data !== undefined && data !== null" :data="data" :depth="0" />
    <span v-else>undefined</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import JsonViewerItem from './Item.vue'

export default defineComponent({
  name: 'JsonViewer',
  components: {
    JsonViewerItem,
  },
  props: {
    data: {
      type: [Object, Array, String, Number, Boolean],
      required: true,
    },
  },
})
</script>
<style scoped>
.json-viewer {
  font-family: monospace;
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;
}

span {
  color: #666;
}
</style>

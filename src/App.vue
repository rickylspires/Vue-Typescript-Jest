<template>
  <section class="section">
    <div class="container">
      <Timeline />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './timeline.vue'

export default defineComponent({
  components: {
    Timeline
  },
  name: 'App'
})
</script>

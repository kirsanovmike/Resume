<template>
  <div class="d-flex justify-center pt-4">
    <div class="d-flex flex-column mb-14" :key="props.title">
      <h2 ref="header" class="font--title-1 text-center text-info title--stroke">
        {{ props.title }}
      </h2>
      <svg viewBox="0 0 308 14" fill="none" xmlns="http://www.w3.org/2000/svg" :width="`${lineWidth}px`" height="14px">
        <path
          d="M1 13C34.5494 10.6795 68.5198 8.80571 102.595 7.16667C170.772 3.88733 238.249 2.65551 307 1"
          stroke="#F15E2F"
          :stroke-width="lineWidth < 200 ? 4 : 2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, computed, ref} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
})

const header = ref(null)

onMounted(() => {
  console.log(header.value.offsetWidth)
})

const lineWidth = computed(() => {
  return header.value ? header.value.offsetWidth : 0
})



</script>
<style>
.title--stroke {
  position: relative;
  display: block;
}
</style>

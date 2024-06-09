<template>
  <v-row>
    <v-col cols="2">
      <img
        class="image--style-round"
        src="@/assets/img/photo.svg"
      >
    </v-col>
    <v-col cols="10" class="pl-15">
      <h1 class="font--large-title">{{ name}}</h1>
      <h2 class="font--title-2 font-italic mb-6">{{ position }}</h2>
      <p class="font--text mb-9 text-info">{{ textAbout }}</p>
      <v-btn>
        {{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  language: {
    type: String,
    required: true
  }
})

const name = computed(() => {
  return props.data?.name?.[props.language] ?? ""
})
const position = computed(() => {
  return props.data?.position?.[props.language] ?? ""
})
const textAbout = computed(() => {
  return props.data?.textAbout?.[props.language] ?? ""
})
const buttonText = computed(() => {
  return props.data?.buttonText?.[props.language] ?? ""
})

</script>
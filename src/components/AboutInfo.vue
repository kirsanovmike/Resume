<template>
  <v-row>
    <v-col cols="2" class="d-flex">
      <div style="width: 260px; min-width: 260px;">
        <img
          class="image--style-round"
          src="@/assets/img/photo.svg"
        >
      </div>
    </v-col>
    <v-col cols="10" class="pl-6">
      <h1 class="font--large-title info--text">{{ name}}</h1>
      <h2 class="font--title-2 font-italic mb-6 info--text">{{ position }}</h2>
      <social-bar :class="{ 'fixed-middle-right': !mdAndDown }" :column="!mdAndDown" :links="links" />
      <p class="font--text mb-9 text-info">{{ textAbout }}</p>
      <v-btn class="button--primary">
        {{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()
import SocialBar from "@/components/SocialBar.vue";

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

const links = {
  github: "https://github.com/kirsanovmike",
  telegram: "https://t.me/kirsanovmike",
  whatsapp: "https://wa.me/79250546355",
  mail: "kirsanovmike@gmail.com",
  phone: "+7 (925) 054-63-55",
  linkedin: "https://linkedin.com/kirsanovmike",
}

</script>

<style>
.fixed-middle-right {
  position: fixed;
  top: 46%;
  right: 32px;
}

.info--text {
  color: rgb(var(--v-theme-info));
}
</style>
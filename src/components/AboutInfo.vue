<template>
  <v-row>
    <v-col class="d-flex" cols="12" lg="3" md="4">
      <div style="width: 260px; min-width: 260px">
        <img class="image--style-round" src="@/assets/img/photo.svg"/>
      </div>
    </v-col>
    <v-col class="pl-6" cols="12" lg="9" md="8">
      <h1 class="font--large-title info">{{ name }}</h1>
      <h2 class="font--title-2 font-italic mb-6 info">{{ position }}</h2>
      <social-bar
        :class="{ 'fixed-middle-right': !mdAndDown }"
        :column="!mdAndDown"
        :links="links"
      />
      <p class="font mb-9 text-info">{{ textAbout }}</p>
      <v-dialog max-width="1440">
        <template #activator="{ props: activatorProps }">
          <v-btn class="button--primary" v-bind="activatorProps">
            {{ buttonText }}
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card class="pa-0" style="height: 860px; max-width: 1440px; position: relative; overflow: hidden">
            <v-row>
              <v-col lg="6" md="12" sm="12" class="left-col-about">
                <v-card-title>
                  <div class="d-flex justify-space-between">
                    <p class="title abouttitle" style="margin-top: 56px">{{ detailTitle }}</p>
                    <v-btn v-if="mdAndDown" class="elevation-0" icon @click="isActive.value = false">
                      <font-awesome-icon
                        :icon="['fas', 'xmark']"
                        class="subtitle"
                        style="min-width: 52px; min-height: 52px"
                      />
                    </v-btn>
                  </div>
                </v-card-title>
                <v-card-text style="padding-right: 56px;">
                  <div class="d-flex align-center mb-9">
                    <font-awesome-icon
                      :icon="['fas', 'location-dot']"
                      class="textfield mr-2"
                      style="min-width: 25px; min-height: 25px"
                    />
                    <p class="textfield">{{ location }}</p>
                  </div>
                  <p
                    v-for="i in items"
                    :key="i"
                    class="font-text my-2"
                  >
                    <span class="textfield">
                      {{ i.param[props.language] }}: 
                    </span>
                    <span class="abouttitle">
                      {{ i.value[props.language] }}
                    </span>
                  </p>
                  <p class="abouttitle mt-9">
                    {{ detailTextAbout }}
                  </p>
                </v-card-text>
              </v-col>
              <v-col v-if="!mdAndDown" class="pb-12 right-col-about" cols="6">
                <template v-if="sentStatus !== 200">
                  <v-card-title>
                    <div class="d-flex justify-space-between">
                      <div>
                        <p class="title abouttitleright " style="margin-top: 56px; line-height: 48px;">Contact Form</p>
                        <p class="description abouttitleright mt-6">Have a project? Let me know!</p>
                      </div>
                      <v-btn v-if="!mdAndDown" icon @click="isActive.value = false">
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          class="subtitle"
                          style="min-width: 52px; min-height: 52px"
                        />
                      </v-btn>
                    </div>
                  </v-card-title>
                  <v-card-text style="padding-right: 56px;">
                    <contact-form
                      class="mt-12 pt-12"
                      :btn-width="200"
                      :labels="props.labels"
                      @submit="submit"
                    />
                  </v-card-text>
                </template>
                <template v-else>
                  <v-card-title style="position: absolute; right: 0" class="d-flex align-center justify-end">
                    <v-btn v-if="!mdAndDown" icon @click="isActive.value = false">
                      <font-awesome-icon
                        :icon="['fas', 'xmark']"
                        class="subtitle"
                        style="min-width: 52px; min-height: 52px"
                      />
                    </v-btn>
                  </v-card-title>
                  <div style="height: 100%; width: 100%;" class="d-flex align-center justify-center flex-column">
                    <img alt="" class="project-card--img" src="@/assets/img/OK.svg">
                    <p class="title abouttitleright" style="margin-top: 56px; line-height: 48px;">Success</p>
                    <p class="abouttitleright mt-6">{{ props.labels[4].title }}</p>
                  </div>
                </template>
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script setup>
import {computed, ref} from 'vue'
import {useDisplay} from 'vuetify'
import SocialBar from '@/components/SocialBar.vue'
import ContactForm from "@/components/ContactForm.vue";
import {md} from "vuetify/iconsets/md";

const {mdAndDown, mdAndUp} = useDisplay()

const props = defineProps({
  data: {
    type: Object,
    default: () => {
    }
  },
  labels: {
    type: Array,
    default: () => []
  },
  language: {
    type: String,
    required: true
  }
})

const sentStatus = ref(null);
const detailTitle = computed(() => {
  return props.data?.detailTitle?.[props.language] ?? ''
})
const name = computed(() => {
  return props.data?.name?.[props.language] ?? ''
})
const position = computed(() => {
  return props.data?.position?.[props.language] ?? ''
})
const textAbout = computed(() => {
  return props.data?.textAbout?.[props.language] ?? ''
})
const location = computed(() => {
  return props.data?.location?.[props.language] ?? ''
})
const detailTextAbout = computed(() => {
  return props.data?.detailTextAbout?.[props.language] ?? ''
})
const buttonText = computed(() => {
  return props.data?.buttonText?.[props.language] ?? ''
})
const items = computed(() => {
  return props.data?.items
})

const links = {
  github: 'https://github.com/kirsanovmike',
  telegram: 'https://t.me/kirsanovmike',
  whatsapp: 'https://wa.me/79250546355',
  mail: 'kirsanovmike@gmail.com',
  phone: '+7 (925) 054-63-55',
  linkedin: 'https://linkedin.com/kirsanovmike'
}

const emit = defineEmits(['submit'])

const submit = (event) => {
  sentStatus.value = 200
  emit('submit', event)
}
</script>

<style>
.fixed-middle-right {
  position: fixed;
  top: 46%;
  right: 32px;
}
</style>

<style scoped>
.title {
  color: rgb(var(--v-theme-info));
}

.desc {
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: rgb(var(--v-theme-info));
}

.subtitle {
  color: rgb(var(--v-theme-info));
}

.textfield {
  color: rgb(var(--v-theme-textfield));
}

.title {
  font-weight: 800;
  font-size: 48px;
}

.abouttitle {
  color: rgb(var(--v-theme-abouttitle));
}

.medal {
  color: rgb(var(--v-theme-medal));
}

.description {
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
}

.right-col-about {
  background: rgb(var(--v-theme-background));
  padding-left: 56px;
}

.abouttitleright {
  color: rgb(var(--v-theme-abouttitleright));
}

.left-col-about {
  background: rgb(var(--v-theme-backgroundlight));
  padding-left: 56px;
}
</style>

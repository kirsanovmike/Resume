<template>
  <v-dialog max-width="1440">
    <template #activator="{ props: activatorProps, isActive }">
      <v-card
        elevation="0"
        style="min-width: 350px; width: 463px; cursor: pointer; position: relative"
        v-bind="activatorProps"
      >
        <v-card-text class="pa-8 d-flex align-center justify-center">
          <div class="d-flex flex-column">
            <img width="100%" alt="" class="project-card--img" :src="project.img">
            <div class="project-card--content mt-6">
              <p class="title">{{ project.title }}</p>
              <p class="subtitle mb-0">{{ project.text }}</p>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <font-awesome-icon
        v-if="project.isMedal && isActive"
        :icon="['fas', 'medal']"
        class="medal--text"
        color="medal"
        style="min-width: 52px; min-height: 52px; position: absolute; top: 0;"
      />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card style="height: 860px; position: relative; overflow: hidden">
        <v-card-title class="pl-10">
          <div class="d-flex justify-space-between">
            <p class="title pt-10">{{ project.title }}</p>
            <v-btn class="elevation-0" icon @click="isActive.value = false">
              <font-awesome-icon :icon="['fas', 'xmark']" style="min-width: 52px; min-height: 52px;"
                 class="subtitle"
              />
            </v-btn>
          </div>
        </v-card-title>
        <v-row class="px-10 pt-0 pb-10">
          <v-col class="pl-0" md="12" sm="12" lg="6">

            <v-card-text>
              <p class="description subtitle mb-0">{{ project.description }}</p>
            </v-card-text>
          </v-col>
          <v-col class="d-flex align-center justify-center" md="12" sm="12" lg="6">
            <img alt="" class="project-card--img" :src="project.img"
                 :style="mdAndUp ? 'min-width: 610px; min-height: 400px;' : 'min-height: 60px;'">
          </v-col>
        </v-row>
        <font-awesome-icon
          v-if="project.isMedal"
          :icon="['fas', 'medal']"
          class="medal--text"
          color="medal"
          style="min-width: 72px; min-height: 72px; position: absolute; top: 0; right: 47%;"
        />
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed, ref} from "vue";
import { useDisplay } from 'vuetify'

const { mdAndUp, smAndDown } = useDisplay()
const {name} = useDisplay()

interface Project {
  title: string,
  text: string,
  isMedal: boolean,
  description: string
}

interface Props {
  project: Project,
}

const props = withDefaults(defineProps<Props>(), {
  project: () => {
    return {
      title: "Title",
      text: "Text",
      img: "",
      isMedal: false,
      description: "Lor...",
    }
  }
})

let openProjectDialogStatus = ref(false);


</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  color: rgb(var(--v-theme-info));
}

.subtitle {
  color: rgb(var(--v-theme-info));
}

.medal--text {
  color: rgb(var(--v-theme-medal));
}

.description {
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;

}
</style>

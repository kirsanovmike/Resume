<template>
  <v-dialog max-width="1440">
    <template #activator="{ props: activatorProps }">
      <v-card
        elevation="0"
        style="width: 463px; position: relative; cursor: pointer"
        v-bind="activatorProps"
      >
        <v-card-text class="pa-8 d-flex align-center justify-center">
          <div class="d-flex flex-column">
            <img alt="" class="project-card--img" src="@/assets/img/project.svg">
            <div class="project-card--content mt-6">
              <p class="title">{{ project.title }}</p>
              <p class="subtitle mb-0">{{ project.text }}</p>
            </div>
          </div>
        </v-card-text>
        <font-awesome-icon
          v-if="project.isMedal"
          :icon="['fas', 'medal']"
          class="medal--text"
          color="medal"
          style="min-width: 52px; min-height: 52px; position: absolute; top: 0; right: 20px;"
        />
      </v-card>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="pa-10" style="height: 860px; position: relative">
        <v-card-title>
          <div class="d-flex justify-space-between">
            <p class="title">{{ project.title }}</p>
            <v-btn icon @click="isActive.value = false">
              <font-awesome-icon :icon="['fas', 'xmark']" style="min-width: 52px; min-height: 52px;"
              />
            </v-btn>
          </div>
        </v-card-title>
        <v-row>
          <v-col>

            <v-card-text>
              <p class="description mb-0">{{ project.description }}</p>
            </v-card-text>
          </v-col>
          <v-col class="d-flex align-center justify-center">
            <img alt="" class="project-card--img" src="@/assets/img/project.svg"
                 style="min-width: 610px; min-height: 400px;">
          </v-col>
        </v-row>

      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

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

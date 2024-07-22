<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <v-col v-if="indexStore.getMenu && indexStore.getMenu[0] != null" cols="10" id="parent-container">
        <!-- hello -->
        <div :id="indexStore.getMenu[0].id">
          <section class="pt-14 pb-15 section-margin">
            <about-info
              :data="indexStore.getAbout"
              :language="indexStore.getSelectedLanguage"
            />
          </section>
        </div>
        <!-- /hello -->
        <!-- skills -->
        <section :id="indexStore.getMenu[1].id" class="pt-10 pb-15 section-margin">
          <header-card :title="indexStore.getHeaders[0].title[indexStore.getSelectedLanguage]" />
          <v-row>
            <v-spacer />
            <v-col cols="9" class="d-flex flex-wrap">
              <skill
                v-for="skill in indexStore.getSkills"
                :key="skill.id"
                :skill="skill"
              />
            </v-col>
            <v-spacer />
          </v-row>
        </section>
        <!-- /skills -->
        <!-- experience -->
        <section class="pt-10 pb-15 section-margin" :id="indexStore.getMenu[2].id">
          <div class="d-flex justify-center">
            <header-card :title="indexStore.getHeaders[1].title[indexStore.getSelectedLanguage]" />
          </div>
          <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ indexStore.getHeaders[2].title[indexStore.getSelectedLanguage] }}</h3>
          <experience-panels :items="indexStore.getEducationExperience"/>
          <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ indexStore.getHeaders[3].title[indexStore.getSelectedLanguage] }}</h3>
          <experience-panels :items="indexStore.getWorkExperience"/>
          <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ indexStore.getHeaders[4].title[indexStore.getSelectedLanguage] }}</h3>
          <experience-panels :items="indexStore.getCoursesExperience"/>
        </section>
        <!-- /experience -->
        <!-- projects -->
        <section :id="indexStore.getMenu[3].id" class="pt-10 pb-15 section-margin">
          <header-card :title="indexStore.getHeaders[5].title[indexStore.getSelectedLanguage]" />
          <v-row>
            <v-col
              v-for="project in indexStore.getProjects"
              :key="project.id"
              class="d-flex justify-center"
              cols="4"
              md="12"
              lg="6"
              xl="4"
              sm="12"
              xs="12"
            >
              <project-card :project="project" />
            </v-col>
          </v-row>
        </section>
        <!-- /projects -->
        <!-- contact -->
        <section :id="indexStore.getMenu[4].id" class="pt-10 pb-15">
          <v-row>
            <v-col cols="6">
              <div class="d-flex">
                <header-card :title="indexStore.getHeaders[6].title[indexStore.getSelectedLanguage]" class="mb-8" />
              </div>
              <h3 class="font--title-2 text-info mb-8">{{ indexStore.getHeaders[7].title[indexStore.getSelectedLanguage] }}</h3>
              <p
                v-for="contactDetail in indexStore.getContactDetails"
                :key="contactDetail.id"
                class="font-text"
              >
                <span class="title--text">
                  {{ contactDetail.propertyName }}:
                </span>
                <!-- TODO: Добавила type -->
                <a v-if="contactDetail.propertyName === 'Gmail'" target="_blank" rel="noreferrer noopener" :href="`mailto:${contactDetail.value}`" class="text-yellow">{{contactDetail.value}}</a>
                <a v-else-if="contactDetail.value.includes('+')" target="_blank" rel="noreferrer noopener" :href="`mailto:${contactDetail.value}`" class="text-yellow">{{contactDetail.value}}</a>
                <a v-else :href="contactDetail.value" target="_blank" rel="noreferrer noopener" class="text-yellow">{{contactDetail.value}}</a>
              </p>
            
            </v-col>
            <v-col cols="6">
              <v-form fast-fail @submit.prevent>
                <v-text-field
                  label="First name"
                />
                <v-text-field
                  label="Last name"
                />
                <v-text-field
                  label="Last name"
                />
                <v-btn
                  class="mt-2 button--primary"
                  @click="toast.success('Эта форма пока не работает!')"
                  type="submit"
                  block
                >Submit</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </section>
        <!-- /contact -->
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>
<script setup>
import {computed, ref, watch} from 'vue'
import { useRoute } from 'vue-router'
import AboutInfo from "@/components/AboutInfo.vue"
import HeaderCard from "@/components/HeaderCard.vue"
import TheWelcome from '@/components/TheWelcome.vue'
import Skill from "@/components/Skill.vue";
import ExperiencePanels from "@/components/common/ExperiencePanels.vue";
import { useToast } from "vue-toastification";

import {useIndexStore} from "@/stores/index";
import {useGoTo} from "vuetify";
import ProjectCard from "@/components/ProjectCard.vue";
const goTo = useGoTo()
const route = useRoute()
const indexStore = useIndexStore();

const query = computed(() => route.query);

const toast = useToast();

watch(query,(newValue) => {
  if (newValue?.block != null && document.getElementById(newValue?.block)) {
    document.getElementById(newValue?.block).scrollIntoView({
      behavior: 'smooth'
    });
  }
},
  {
    immediate: true
  })
</script>

<style>
.title--text {
  color: rgb(var(--v-theme-title));
}

.image--style-round {
  border-radius: 100px;
  width: 240px;
  height: 240px;
}

.skill-card {
  max-width: 180px;
  min-width: 180px;
}
.skill-card--icon {
  font-size: 45px
}

.section-margin {
  margin-bottom: 250px;
}

.project-card--img {
  max-width: 399px;
}


</style>

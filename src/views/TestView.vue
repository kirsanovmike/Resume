<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <v-col v-if="indexStore.getMenu && indexStore.getMenu[0] != null" cols="10" id="parent-container">
        <!-- hello -->
        <div :id="indexStore.getMenu[0].id" :class="{ 'cv-block':  mdAndUp}" v-intersect="onIntersect">
          <section class="pt-14 pb-15 section-margin">
            <about-info
              :data="indexStore.getAbout"
              :language="indexStore.getSelectedLanguage"
            />
          </section>
        </div>
        <!-- /hello -->
        <!-- skills -->
        <div :id="indexStore.getMenu[1].id" :class="{ 'cv-block':  mdAndUp}" v-intersect="onIntersect">
          <section class="pt-10 pb-15 section-margin">
            <header-card :title="getHeadersByIndex(0)" />
            <v-row>
              <v-spacer />
              <v-col cols="12" class="d-flex flex-wrap justify-center">
                <skill
                  v-for="skill in indexStore.getSkills"
                  :key="skill.id"
                  :skill="skill"
                />
              </v-col>
              <v-spacer />
            </v-row>
          </section>
        </div>
        <!-- /skills -->
        <!-- experience -->
        <div :class="{ 'cv-block':  mdAndUp}" :id="indexStore.getMenu[2].id" v-intersect="onIntersect">
          <section class="pt-10 pb-15 section-margin">
            <div class="d-flex justify-center">
              <header-card :title="getHeadersByIndex(1)" />
            </div>
            <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ getHeadersByIndex(2) }}</h3>
            <experience-panels :items="indexStore.getEducationExperience"/>
            <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ getHeadersByIndex(3) }}</h3>
            <experience-panels :items="indexStore.getWorkExperience"/>
            <h3 class="font--title-2 text-center mt-10 mb-6 text-info">{{ getHeadersByIndex(4) }}</h3>
            <experience-panels :items="indexStore.getCoursesExperience"/>
          </section>
        </div>
        <!-- /experience -->
        <!-- projects -->
        <section :id="indexStore.getMenu[3].id" class="pt-10 pb-15 section-margin" v-intersect="onIntersect">
          <header-card :title="getHeadersByIndex(5)" />
          <v-row class="d-flex justify-center">
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
        <div :class="{ 'cv-block':  mdAndUp}" :id="indexStore.getMenu[4].id" v-intersect="onIntersect">
          <section class="pt-10 pb-15">
          <v-row>
            <v-col cols="12" md="6">
              <div class="d-flex">
                <header-card :title="getHeadersByIndex(6)" class="mb-8" />
              </div>
              <h3 class="font--title-2 text-info mb-8">{{ getHeadersByIndex(7) }}</h3>
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
            <v-col cols="12" md="6">
              <v-form fast-fail @submit.prevent>
                <v-text-field
                  class="cv-input"
                  label="First name"
                />
                <v-text-field
                  class="cv-input"
                  label="Last name"
                />
                <v-text-field
                  class="cv-input"
                  label="Last name"
                />
                <v-btn
                  class="mt-2 button--primary"
                  @click="toast.error('Эта форма пока не работает!')"
                  type="submit"
                  block
                >Submit</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </section>
        </div>
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
import router from "@/router";
const goTo = useGoTo()
const route = useRoute()
const indexStore = useIndexStore();
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const query = computed(() => route.query);

const toast = useToast();

const getHeadersByIndex = (index) => (indexStore.getHeaders?.[index]?.title?.[indexStore?.getSelectedLanguage] ?? "");

const onIntersect = (isIntersecting, entries) => {
  const itemId = entries[0]?.target?.["__vnode"]?.el?.id
  if (isIntersecting && itemId != null) {
    router.push({query: {block: itemId}})
  }
}
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

.project-card--img {
  max-width: 399px;
}

.section-margin {
  width: 100%;
}

.cv-block {
  //height: 100vh;
  //margin-top: 10px;
  display: flex;
  align-items: center;
}
</style>

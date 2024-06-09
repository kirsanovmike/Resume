<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <v-col cols="10">
        <!-- hello -->
        <section class="pt-10 pb-15 section-margin">
          <about-info
            :data="indexStore.getAbout"
            :language="indexStore.getSelectedLanguage"
          />
        </section>
        <!-- /hello -->
        <!-- skills -->
        <section class="pt-10 pb-15 section-margin">
          <h2 class="font--title-1 text-center mb-14 text-info">
            Skills
          </h2>
          <v-row>
            <v-spacer />
            <v-col cols="9" class="d-flex flex-wrap">
              <v-card
                v-for="skill in skills"
                :key="skill.id"
                max-width="180"
                elevation="0"
                class="mr-8 mb-8 skill-card"
              >
                <v-card-text>
                  <div class="d-flex flex-column align-start">
                    <font-awesome-icon
                      :icon="skill.icon"
                      class="skill-card--icon mb-6"
                      :color="skill.iconColor"
                    />
                    <span class="font--title-3 mb-3">{{ skill.text }}</span>
                    тут кружочки
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer />
          </v-row>
        </section>
        <!-- /skills -->
        <!-- experience -->
        <section class="pt-10 pb-15 section-margin">
          <h2 class="font--title-1 text-center mb-14 text-info">Experience</h2>
          <h3 class="font--title-2 text-center mb-6 text-info">Education</h3>
          <v-expansion-panels elevation="0" class="mb-15">
            <v-expansion-panel class="mb-3">
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Место работы
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Описание
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Место работы
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Описание
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <h3 class="font--title-2 text-center mb-6 text-info">Work Experience</h3>
          <v-expansion-panels elevation="0" class="mb-15">
            <v-expansion-panel class="mb-3">
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Место работы
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Описание
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Место работы
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Описание
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </section>
        <!-- /experience -->
        <!-- projects -->
        <section class="pt-10 pb-15 section-margin">
          <h2 class="font--title-1 text-center mb-14 text-info">Projects</h2>
          <v-row>
            <v-col
              v-for="project in projects"
              :key="project.id"
              cols="4"
            >
              <v-card
                elevation="0"
              >
                <v-card-text class="pa-10">
                  <img class="project-card--img" src="@/assets/img/project.svg">
                  <div class="project-card--content">
                    <p class="font--title-2">{{ project.title }}</p>
                    <p class="font--text">{{ project.text }}</p>
                  </div>
                </v-card-text>
            </v-card>
            </v-col>
          </v-row>
        </section>
        <!-- /projects -->
        <!-- contact -->
        <section class="pt-10 pb-15">
          <v-row>
            <v-col cols="6">
              <h2 class="font--title-1 text-info">Contact Details</h2>
              <h3 class="font--title-2 text-info">Have a project? Let me know!</h3>
              <p
                v-for="contactDetail in contactDetails"
                :key="contactDetail.id"
                class="font-text"
              >
                {{ contactDetail.propertyName }}:
                <span class="text-yellow">{{ contactDetail.value }}</span>
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
                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
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
import { ref } from 'vue'
import AboutInfo from "@/components/AboutInfo.vue"

import {useIndexStore} from "@/stores/index";
const indexStore = useIndexStore();


const skills = ref([
  {
    id: 0,
    text: "JavaScript",
    icon: ["fab", "js"],
    iconColor: "#EFD81D"
  },
  {
    id: 1,
    text: "JavaScript",
    icon: ["fab", "vuejs"],
    iconColor: "#47BA87"
  },
  {
    id: 2,
    text: "HTML",
    icon: ["fab", "html5"],
    iconColor: "#FC4F13"
  },
  {
    id: 3,
    text: "css",
    icon: ["fab", "css3-alt"],
    iconColor: "#3C9CD6"
  },
  {
    id: 4,
    text: "Sass",
    icon: ["fab", "sass"],
    iconColor: "#D66FA4"
  },
  {
    id: 5,
    text: "Git",
    icon: ["fab", "git-alt"],
    iconColor: "#E94E31"
  },
  {
    id: 6,
    text: "Docker",
    icon: ["fab", "docker"],
    iconColor: "#0895E7"
  },

])

const projects = ref([
  {
    id: 0,
    title: "Case 0",
    text: "More information →"
  },
  {
    id: 1,
    title: "Case 1",
    text: "More information →"
  },
  {
    id: 2,
    title: "Case 2",
    text: "More information →"
  },
  {
    id: 3,
    title: "Case 3",
    text: "More information →"
  },
  {
    id: 4,
    title: "Case 4",
    text: "More information →"
  },
  {
    id: 5,
    title: "Case 5",
    text: "More information →"
  }
])

const contactDetails = ref([
  {
    id: 0,
    propertyName: "Gmail",
    value: "ivanov@gmail.com"
  },
  {
    id: 1,
    propertyName: "Linkedin",
    value: "@ivanov"
  },
  {
    id: 2,
    propertyName: "Telegram",
    value: "@ivanov"
  },
  {
    id: 3,
    propertyName: "WhatsApp",
    value: "@ivanov"
  },
  {
    id: 4,
    propertyName: "Phone",
    value: "+7 (123) 456-78-90"
  },
])
</script>

<style>
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

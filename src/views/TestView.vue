<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <v-col v-if="indexStore.getMenu && indexStore.getMenu[0] != null" cols="10" id="parent-container">
        <!-- hello -->
        <div :id="indexStore.getMenu[1].id">
          <section class="pt-10 pb-15 section-margin">
            <about-info
              :data="indexStore.getAbout"
              :language="indexStore.getSelectedLanguage"
            />
          </section>
        </div>
        <!-- /hello -->
        <!-- skills -->
        <section :id="indexStore.getMenu[0].id" class="pt-10 pb-15 section-margin">
          <div class="d-flex justify-center">
            <h2 class="font--title-1 text-center mb-14 text-info title--stroke">
              Skills
            </h2>
          </div>
          <v-row>
            <v-spacer />
            <v-col cols="9" class="d-flex flex-wrap">
              <skill
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
              />
            </v-col>
            <v-spacer />
          </v-row>
        </section>
        <!-- /skills -->
        <!-- experience -->
        <section class="pt-10 pb-15 section-margin">
          <div class="d-flex justify-center">
            <h2 :id="indexStore.getMenu[4].id" class="font--title-1 text-center mb-14 text-info title--stroke">Experience</h2>
          </div>
          <experience-panels :items="experienceItems"/>
          <h3 class="font--title-2 text-center mb-6 text-info">Education</h3>
          <experience-panels :items="experienceItems"/>
          <h3 class="font--title-2 text-center mb-6 text-info">Work Experience</h3>
          <experience-panels :items="experienceItems"/>
        </section>
        <!-- /experience -->
        <!-- projects -->
        <section :id="indexStore.getMenu[2].id" class="pt-10 pb-15 section-margin">
          <div class="d-flex justify-center">
            <h2 class="font--title-1 text-center mb-14 text-info title--stroke">Projects</h2>
          </div>
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
        <section :id="indexStore.getMenu[3].id" class="pt-10 pb-15">
          <v-row>
            <v-col cols="6">
              <div class="d-flex">
                <h2 class="font--title-1 text-info title--stroke mb-8">Contact Details</h2>
              </div>
              <h3 class="font--title-2 text-info mb-8">Have a project? Let me know!</h3>
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
                <v-btn class="mt-2 button--primary" type="submit" block>Submit</v-btn>
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
import TheWelcome from '@/components/TheWelcome.vue'
import Skill from "@/components/Skill.vue";
import ExperiencePanels from "@/components/common/ExperiencePanels.vue";

import {useIndexStore} from "@/stores/index";
import {useGoTo} from "vuetify";
const goTo = useGoTo()
const route = useRoute()
const indexStore = useIndexStore();


const skills = ref([
  {
    id: 0,
    text: "JavaScript",
    icon: ["fab", "js"],
    iconColor: "#EFD81D",
    level: 3,
  },
  {
    id: 1,
    text: "JavaScript",
    icon: ["fab", "vuejs"],
    iconColor: "#47BA87",
    level: 2,
  },
  {
    id: 2,
    text: "HTML",
    icon: ["fab", "html5"],
    iconColor: "#FC4F13",
    level: 5,
  },
  {
    id: 3,
    text: "css",
    icon: ["fab", "css3-alt"],
    iconColor: "#3C9CD6",
    level: 3,
  },
  {
    id: 4,
    text: "Sass",
    icon: ["fab", "sass"],
    iconColor: "#D66FA4",
    level: 1,
  },
  {
    id: 5,
    text: "Git",
    icon: ["fab", "git-alt"],
    iconColor: "#E94E31",
    level: 4,
  },
  {
    id: 6,
    text: "Docker",
    icon: ["fab", "docker"],
    iconColor: "#0895E7",
    level: 5,
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

const experienceItems = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",
    icon: ['fas', 'location-dot'],
    iconPostfix: "Moscow",
    title: "Assistant",
    period: "2020-2021",
    isSelected: false
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",
    icon: ['fas', 'location-dot'],
    iconPostfix: "Moscow",
    title: "Assistant",
    period: "2020-2021",
    isSelected: false
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",
    icon: ['fas', 'location-dot'],
    iconPostfix: "Moscow",
    title: "Assistant",
    period: "2020-2021",
    isSelected: false
  }
]

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

const query = computed(() => route.query);

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

.title--stroke {
  position: relative;
  display: block;
}

.title--stroke:before {
  content: "";
  position: absolute;
  top: 90%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/line.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

</style>

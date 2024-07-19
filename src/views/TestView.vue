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
          <header-card title="Skills" />
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
        <section class="pt-10 pb-15 section-margin" :id="indexStore.getMenu[2].id">
          <div class="d-flex justify-center">
            <header-card title="Experience" />
          </div>
          <experience-panels :items="experienceItems"/>
          <h3 class="font--title-2 text-center mt-10 mb-6 text-info">Education</h3>
          <experience-panels :items="experienceItems"/>
          <h3 class="font--title-2 text-center mt-10 mb-6 text-info">Work Experience</h3>
          <experience-panels :items="experienceItems"/>
        </section>
        <!-- /experience -->
        <!-- projects -->
        <section :id="indexStore.getMenu[3].id" class="pt-10 pb-15 section-margin">
          <header-card title="Projects" />
          <v-row>
            <v-col
              v-for="project in projects"
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
                <header-card title="Contact Details" class="mb-8" />
              </div>
              <h3 class="font--title-2 text-info mb-8">Have a project? Let me know!</h3>
              <p
                v-for="contactDetail in contactDetails"
                :key="contactDetail.id"
                class="font-text"
              >
                <span class="title--text">
                  {{ contactDetail.propertyName }}:
                </span>
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
    text: "More information →",
    isMedal: true,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
  },
  {
    id: 1,
    title: "Case 1",
    text: "More information →",
    isMedal: false,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
  },
  {
    id: 2,
    title: "Case 2",
    text: "More information →",
    isMedal: false,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
  },
  {
    id: 3,
    title: "Case 3",
    text: "More information →",
    isMedal: false,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
  },
  {
    id: 4,
    title: "Case 4",
    text: "More information →",
    isMedal: false,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
  },
  {
    id: 5,
    title: "Case 5",
    text: "More information →",
    isMedal: false,
    description: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"
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

<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <v-col v-if="hasMenu" cols="10" id="parent-container">

        <!-- About Info Section -->
        <section-block :id="getMenuId(0)" :class="cvBlockClass" @intersect="onIntersect">
          <about-info
              :data="indexStore.getAbout"
              :language="indexStore.getSelectedLanguage"
              :labels="indexStore.getLabels"
              :images="indexStore.getImages"
              @submit="submit"
          />
        </section-block>

        <!-- Skills Section -->
        <section-block :id="getMenuId(1)" :class="cvBlockClass" @intersect="onIntersect">
          <header-card :title="getHeadersByIndex(0)" />
          <v-row class="mx-n10">
            <v-spacer />
            <v-col cols="12" class="d-flex flex-wrap justify-center">
              <skill v-for="skill in indexStore.getSkills" :key="skill.id" :skill="skill" />
            </v-col>
            <v-spacer />
          </v-row>
        </section-block>

        <!-- Experience Section -->
        <section-block :id="getMenuId(2)" :class="cvBlockClass" @intersect="onIntersect">
          <header-card :title="getHeadersByIndex(1)" class="d-flex justify-center" />
          <experience-panels :items="indexStore.getEducationExperience" title="getHeadersByIndex(2)" class="mb-8" />
          <experience-panels :items="indexStore.getWorkExperience" title="getHeadersByIndex(3)" class="mb-8" />
          <experience-panels :items="indexStore.getCoursesExperience" title="getHeadersByIndex(4)" class="mb-8" />
        </section-block>

        <!-- Projects Section -->
        <section-block :id="getMenuId(3)" class="pt-10 pb-15 section-margin" @intersect="onIntersect">
          <header-card :title="getHeadersByIndex(5)" />
          <v-row class="d-flex justify-center">
            <v-col v-for="project in indexStore.getProjects" :key="project.id" class="d-flex justify-center" cols="12" lg="6" xl="4">
              <project-card :project="project" />
            </v-col>
          </v-row>
        </section-block>

        <!-- Contact Section -->
        <section-block :id="getMenuId(4)" :class="cvBlockClass" @intersect="onIntersect">
          <v-row>
            <v-col cols="12" md="6">
              <header-card :title="getHeadersByIndex(6)" class="mb-8" />
              <h3 class="font--title-2 text-info mb-8">{{ getHeadersByIndex(7) }}</h3>
              <contact-details :details="indexStore.getContactDetails" />
            </v-col>
            <v-col cols="12" md="6" class="pt-12">
              <contact-form :labels="indexStore.getLabels" @submit="submit" />
            </v-col>
          </v-row>
        </section-block>

      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useIndexStore } from "@/stores";
import { useStoreLetters } from "@/stores/frontLettersStore";
import { useDisplay } from 'vuetify';
import router from "@/router";
import SectionBlock from '@/components/common/SectionBlock.vue';
import ContactDetails from '@/components/common/ContactDetails.vue';
import AboutInfo from "@/components/AboutInfo.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import ExperiencePanels from "@/components/common/ExperiencePanels.vue";
import Skill from "@/components/Skill.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ContactForm from "@/components/ContactForm.vue";

const { mdAndUp } = useDisplay();
const route = useRoute();
const indexStore = useIndexStore();
const lettersStore = useStoreLetters();
const toast = useToast();

const query = computed(() => route.query);

const hasMenu = computed(() => indexStore.getMenu && indexStore.getMenu[0] != null);
const getMenuId = (index) => indexStore.getMenu?.[index]?.id ?? '';
const getHeadersByIndex = (index) => indexStore.getHeaders?.[index]?.title?.[indexStore.getSelectedLanguage] ?? '';

const submit = (event) => {
  lettersStore.addLetter(event);
  toast.success(indexStore.getLabels[4].title);
};

const onIntersect = (isIntersecting, entries) => {
  const itemId = entries[0]?.target?.id;
  if (isIntersecting && itemId) {
    router.push({ query: { block: itemId } });
  }
};

const cvBlockClass = computed(() => ({ 'cv-block pt-10 pb-15 section-margin': mdAndUp }));
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
  display: block;
  align-items: center;
}
</style>

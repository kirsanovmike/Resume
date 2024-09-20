<template>
  <v-app>
    <!-- Системный навбар -->
    <v-container id="top" class="pt-2 pb-2" fluid>
      <v-row>
        <v-spacer/>
        <v-col class="d-flex justify-end align-center" cols="10">
          <!-- Скачать резюме -->
          <div class="d-flex align-center ml-8">
            <font-awesome-icon :icon="['far', 'file']" class="text-info"/>
            <span class="font--callout-2 ml-1 text-info" style="cursor:pointer;" @click="openPdf">Open CV</span>
          </div>
          <!-- Смена языка -->
          <change-language
            v-model="selectedLanguage"
            :languages="indexStore.getLanguages"
          />
          <!-- Смена темы -->
          <font-awesome-icon
            id="switch-theme"
            :icon="['fas', 'circle-half-stroke']"
            class="ml-8 text-info"
            @click="switchTheme"
          />
        </v-col>
        <v-spacer/>
      </v-row>
    </v-container>
    <!-- Системный навбар -->
    <v-app-bar
      class="background cv-app-bar"
      elevation="0"
    >
      <v-container fluid>
        <v-row>
          <v-spacer/>
          <v-col cols="12" md="10">
            <nav-list style="flex-wrap: wrap" :items="indexStore.getMenu" @selectMenuOption="goToElem($event)"/>
            <!-- <nav-list :items="links" /> -->
          </v-col>
          <v-spacer/>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView/>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        color="info"
        icon
        style="position: fixed; bottom: 32px; right: 32px; z-index: 1"
        @click="toTop"
      >
        <font-awesome-icon
          style="max-width: 32px; max-height: 32px;"
          icon="chevron-up"
          color="info--text"
        />
      </v-btn>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {computed, type ComputedRef, onBeforeMount, ref, shallowRef, watch, onMounted} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {useUserStore} from "@/stores/user";
import {useIndexStore} from "@/stores/index";
import {useStoreLetters} from "@/stores/frontLettersStore";
import {getUserId} from "@/api/user";
import {useGoTo, useTheme} from "vuetify";
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import NavList from "@/components/common/NavList.vue";
import router from "@/router";
import {useAnimationExplosion} from "@/use/useAnimationExplosion"
import {useRoute} from "vue-router";

const theme = useTheme();
const userStore = useUserStore();
const indexStore = useIndexStore();
const lettersStore = useStoreLetters();
const {initDB, loadMenu, loadlanguages, loadEducationExperience, setSelectedLanguage,
  loadAbout, loadSkills, loadWorkExperience, loadCoursesExperience, loadContactDetails, loadProjects, loadHeaders, loadLabels, loadImages} = indexStore;
const {init} = lettersStore

const {fetchData} = userStore;
const statusUserId = computed(() =>
  userStore?.stateInfo?.userId?.responseStatus
)

const selectedLanguage = computed({
  get() {
    return indexStore.getSelectedLanguage
  },
  set(newValue) {
    setSelectedLanguage(newValue)
  }
})

onBeforeMount(async () => {
  initDB()
  init()
  fetchData({
    method: getUserId,
    model: "userId",
    payload: "sss"
  }, userStore)
  loadMenu()
  loadlanguages()
  loadAbout()
  loadSkills()
  loadWorkExperience()
  loadEducationExperience()
  loadCoursesExperience()
  loadContactDetails()
  loadProjects()
  loadHeaders()
  loadLabels()
  loadImages()
})

let themeCounter = ref(0);
const themeNames = ["dark", "light", "yellow", "orange"];

const systemTheme = computed(() =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)

watch(systemTheme, (systemTheme) => {
  if (systemTheme) {
    theme.global.name.value = themeNames[0];
    themeCounter.value = 0;
  } else {
    theme.global.name.value = themeNames[1];
    themeCounter.value = 1;
  }
}, {
  immediate: true
})

const switchTheme = () => {
  theme.global.name.value = themeNames[(themeCounter.value + 1) % themeNames.length];
  themeCounter.value++;
};

const route = useRoute()
const selectedId = computed<string>(() => {
  return route.query?.block ?? ""
})
const defId: ComputedRef<string> = computed(() => indexStore?.getMenu?.[0]?.id)
watch(defId, (newValue) => {
    if (newValue != null && selectedId.value === "") {
      router.push({query: {block: newValue}})
    }
  },
  {immediate: true}
)

const goToElem = (itemId: string) => {
  document.getElementById(itemId).scrollIntoView({
    behavior: 'smooth'
  });
  router.push({query: {block: itemId}})
}
let fab = ref(false);
const onScroll = (e: any) => {
  if (typeof window === 'undefined') return
  const top = window.scrollY || e.target.scrollTop || 0
  fab.value = top > 20
}
const goTo = useGoTo()
const responsive = ref()
const toTop = () => {
  document.getElementById("top")?.scrollIntoView({
    behavior: 'smooth'
  });
}

useAnimationExplosion(themeCounter)

const openPdf = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}files/TrokhovKirill_resume.pdf`;
  window.open(pdfUrl, '_blank');
};
</script>

<style lang="scss">
.v-app-bar.cv-app-bar.v-toolbar {
  position: sticky !important;
  top: 0;

  .v-toolbar__content {
    height: auto !important;
  }
}
#animation {
  position: fixed;
  top: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.v-application {
  background-color: transparent;
}
</style>

<template>
  <v-app>
    <!-- Системный навбар -->
    <v-container fluid class="pt-2 pb-2">
      <v-row>
        <v-spacer />
        <v-col cols="10" class="d-flex justify-end align-center">
          <!-- Скачать резюме -->
          <div class="d-flex align-center ml-8">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-info"  />
            <span class="font--callout-2 ml-1 text-info">Download CV</span>
          </div>
          <!-- Смена языка -->
          <change-language
            v-model="selectedLanguage"
            :languages="indexStore.getLanguages"
          />
          <!-- Смена темы -->
          <font-awesome-icon
            :icon="['fas', 'circle-half-stroke']"
            class="ml-8 text-info"
            @click="switchTheme"
          />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
    <v-container>
    </v-container>
    <!-- Системный навбар -->
    <v-app-bar
      class="mt-10 background"
      elevation="0"
      absolute="true"
    >
      <v-container fluid>
        <v-row>
          <v-spacer />
          <v-col cols="10">
            <nav-list :items="indexStore.getMenu" :selected-id="selectedId" @selectMenuOption="goToElem($event)" />
            <!-- <nav-list :items="links" /> -->
          </v-col>
          <v-spacer />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {type ComputedRef, ref, watch} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {useUserStore} from "@/stores/user";
import {useIndexStore} from "@/stores/index";
import {computed, onMounted, onBeforeMount } from "vue";
import {getUserId} from "@/api/user";
import {useTheme} from "vuetify";
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import NavList from "@/components/common/NavList.vue";
import { useGoTo } from 'vuetify'
import router from "@/router";

const theme = useTheme();
const userStore = useUserStore();
const indexStore = useIndexStore();
const {initDB, loadMenu, loadlanguages, setSelectedLanguage, loadAbout} = indexStore;

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
  fetchData({
    method: getUserId,
    model: "userId",
    payload: "sss"
  }, userStore)
  loadMenu()
  loadlanguages()
  loadAbout()
})

let themeCounter = ref(0);
const themeNames = ["dark", "light", "yellow", "orange"];

const systemTheme = computed(() =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)

watch(systemTheme, (systemTheme) => {
  if (systemTheme) {
    theme.global.name.value = themeNames[0]
  } else {
    theme.global.name.value = themeNames[1]
  }
}, {
  immediate: true
})

const switchTheme = () => {
  themeCounter.value++;
  theme.global.name.value = themeNames[themeCounter.value % themeNames.length];
};

const defId: ComputedRef<string> = computed(() => indexStore?.getMenu?.[0]?.id)

let selectedId = ref<string>("");
watch(defId, (newValue) => {
  if (newValue != null) {
    selectedId.value = newValue;
  }
},
  {immediate: true}
)


const goToElem = (itemId:string) => {
  router.push({ query: { block: itemId }})
  selectedId.value = itemId;
}
</script>

<template>
  <v-app>
    <!-- Системный навбар -->
    <v-container id="top" class="pt-2 pb-2" fluid>
      <v-row>
        <v-spacer/>
        <v-col class="d-flex justify-end align-center" cols="10">
          <!-- Скачать резюме -->
          <div class="d-flex align-center ml-8">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-info"/>
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
        <v-spacer/>
      </v-row>
    </v-container>
    <!-- Системный навбар -->
    <v-app-bar
      class="background"
      elevation="0"
    >
      <v-container fluid>
        <v-row>
          <v-spacer/>
          <v-col cols="10">
            <nav-list :items="indexStore.getMenu" :selected-id="selectedId" @selectMenuOption="goToElem($event)"/>
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
import {computed, type ComputedRef, onBeforeMount, ref, shallowRef, watch} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {useUserStore} from "@/stores/user";
import {useIndexStore} from "@/stores/index";
import {getUserId} from "@/api/user";
import {useGoTo, useTheme} from "vuetify";
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import NavList from "@/components/common/NavList.vue";
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

const defId: ComputedRef<string> = computed(() => indexStore?.getMenu?.[0]?.id)

let selectedId = ref<string>("");
watch(defId, (newValue) => {
    if (newValue != null) {
      selectedId.value = newValue;
    }
  },
  {immediate: true}
)


const goToElem = (itemId: string) => {
  router.push({query: {block: itemId}})
  selectedId.value = itemId;
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
</script>

<style lang="scss">
.v-app-bar.v-toolbar {
  position: sticky !important;
  top: 0;
}
</style>

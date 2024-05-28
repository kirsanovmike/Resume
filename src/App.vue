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
          <div class="d-flex align-center ml-8">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-info" />
            <span class="font--callout-2 ml-1 text-info">English</span>
          </div>
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
      class="mt-10"
      style="background-color: #302A3B;"
      elevation="0"
      absolute="true"
    >
      <v-container fluid>
        <v-row>
          <v-spacer />
          <v-col cols="10">
            <nav-item
              v-for="link in links"
              :key="link.id"
              class="font--label mr-8 text-info"
            >
              {{ link.text  }}
            </nav-item>
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
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {RouterLink, RouterView} from 'vue-router'
import {useUserStore} from "@/stores/user";
import {computed, onMounted} from "vue";
import {getUserId} from "@/api/user";
import {useTheme} from "vuetify";

const theme = useTheme();
const userStore = useUserStore();

const {fetchData} = userStore;
const statusUserId = computed(() =>
  userStore?.stateInfo?.userId?.responseStatus
)

onMounted(async () => {
  await fetchData({
    method: getUserId,
    model: "userId",
    payload: "sss"
  }, userStore)
})

const switchTheme = () => {
  console.log({theme})
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const links = ref([
  {
    id: 0,
    text: "About",
    href: "#"
  },
  {
    id: 1,
    text: "Skills",
    href: "#"
  },
  {
    id: 2,
    text: "Experience",
    href: "#"
  },
  {
    id: 3,
    text: "Projects",
    href: "#"
  },
  {
    id: 4,
    text: "Contacts",
    href: "#"
  },
])

</script>

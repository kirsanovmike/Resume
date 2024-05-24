<template>
  <v-app style="background-color: #2C2735;">
    <v-app-bar style="background-color: #2C2735;">
      <v-container>
        <a href="#"> меню </a>
        <a href="#"> ссылка </a>
      </v-container>
    </v-app-bar>
    <v-app-bar style="background-color: #302A3B;">
      <nav>
        <v-container>
          <a href="#"> ссылка </a>
          <a href="#"> ссылка </a>
          <a href="#"> ссылка </a>
          <a href="#"> ссылка </a>
          <v-btn color="info" @click="switchTheme">Кнопка смены темы</v-btn>
        </v-container>
      </nav>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
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
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<template>
  <div class="d-flex align-center ml-8">
    <v-menu>
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          class="language-active"
          @click="showLanguageMenu = !showLanguageMenu"
        >
          <font-awesome-icon
            :icon="['fas', showLanguageMenu ? 'chevron-up' : 'chevron-down']"
            class="text-info"
          />
          <span class="font--callout-2 ml-1 text-info">{{ activeLanguage }}</span>
        </div>
      </template>
      <v-list>
        <v-list-item
          v-for="(language, index) in languages"
          :key="index"
          :value="language.id"
          @click="handlerChangeLanguage(language.id)"
        >
          <v-list-item-title class="pl-6 font--callout-2">{{ language.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  languages: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const handlerChangeLanguage = (languageId) => {
  emit('update:modelValue', languageId)
  showLanguageMenu = !showLanguageMenu
}

const activeLanguage = computed(() => {
  return props.languages.find(language => language.id === props.modelValue)?.name
})

let showLanguageMenu = ref<Boolean>(false)
</script>

<style>
.language-active {
  cursor: pointer;
}
</style>
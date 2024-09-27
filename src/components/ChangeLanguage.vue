<template>
  <div class="d-flex align-center ml-8">
    <v-menu v-model="isLanguageMenuOpen">
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="language-active">
          <font-awesome-icon
              :icon="['fas', isLanguageMenuOpen ? 'chevron-up' : 'chevron-down']"
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
            @click="changeLanguage(language.id)"
        >
          <v-list-item-title class="pl-6 font--callout-2">{{ language.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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

const changeLanguage = (languageId) => {
  emit('update:modelValue', languageId)
}

const activeLanguage = computed(() =>
    props.languages.find(language => language.id === props.modelValue)?.name || ''
)

const isLanguageMenuOpen = ref(false)
</script>

<style>
.language-active {
  cursor: pointer;
}
</style>

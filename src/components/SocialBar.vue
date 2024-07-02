<template>
  <div class="d-flex align-center" :class="{'flex-column': column}">
    <a class="social-link" target="_blank" rel="noreferrer noopener" :href="props.links.whatsapp">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'whatsapp']"
        color="text"
      />
    </a>
    <a class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="props.links.telegram">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'telegram']"
        color="text"
      />
    </a>
    <a class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="props.links.github">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'github']"
        color="text"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Links {
  github: string,
  telegram: string,
  whatsapp: string,
}

interface Props {
  column: boolean,
  links: Links
}

const props = withDefaults(defineProps<Props>(), {
  column: false,
  links: () => {
    return {
      github: "",
      telegram: "",
      whatsapp: ""
    }
  }
})
</script>

<style>
.social-link {
  color: inherit;
}
</style>

<template>
  <div class="d-flex align-center" :class="{'flex-column justify-center': column}" :style="column ? 'height: 100%; top: 0' : undefined">
    <a v-if="props.links.whatsapp" class="social-link" target="_blank" rel="noreferrer noopener" :href="props.links.whatsapp">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'whatsapp']"
        color="text"
        class="social-icon"
      />
    </a>
    <a v-if="props.links.telegram" class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="props.links.telegram">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'telegram']"
        color="text"
        class="social-icon"
      />
    </a>
    <a v-if="props.links.github" class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="props.links.github">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'github']"
        color="text"
        class="social-icon"
      />
    </a>
    <a v-if="props.links.mail" class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="`mailto:${props.links.mail}`">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fas', 'envelope']"
        color="text"
        class="social-icon"
      />
    </a>
    <a v-if="props.links.phone" class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="`tel:${props.links.phone}`">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fas', 'phone']"
        color="text"
        class="social-icon"
      />
    </a>
    <a v-if="props.links.linkedin" class="social-link" target="_blank" :class="column ? 'mt-4' : 'ml-4'" rel="noreferrer noopener" :href="props.links.linkedin">
      <font-awesome-icon
        style="min-width: 36px; min-height: 36px;"
        :icon="['fab', 'linkedin']"
        color="text"
        class="social-icon"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Links {
  github?: string,
  telegram?: string,
  whatsapp?: string,
  mail?: string,
  phone?: string,
  linkedin?: string,
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

<style scoped>
.social-link {
  color: inherit;
}

.social-icon {
  color: rgb(var(--v-theme-title));
}
</style>

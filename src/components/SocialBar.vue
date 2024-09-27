<template>
  <div
      class="d-flex align-center mb-4"
      :class="{ 'flex-column justify-center': column }"
      :style="column ? { height: '100%', top: 0 } : undefined"
  >
    <template v-for="(link, key) in socialLinks" :key="key">
      <a
          v-if="links?.[link.key]"
          class="social-link"
          target="_blank"
          rel="noreferrer noopener"
          :href="link.href"
          :class="{[column ? 'mt-4' : 'ml-4']: key !== 0}"
      >
        <font-awesome-icon
            :icon="link.icon"
            class="social-icon"
            style="min-width: 36px; min-height: 36px;"
        />
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Links {
  github?: string;
  telegram?: string;
  whatsapp?: string;
  mail?: string;
  phone?: string;
  linkedin?: string;
}

interface Props {
  column: boolean;
  links: Links;
}

const props = withDefaults(defineProps<Props>(), {
  column: false,
  links: () => ({
    github: "",
    telegram: "",
    whatsapp: "",
    mail: "",
    phone: "",
    linkedin: ""
  })
});

const socialLinks = [
  { key: 'whatsapp', icon: ['fab', 'whatsapp'], href: `https://wa.me/${props.links.whatsapp}` },
  { key: 'telegram', icon: ['fab', 'telegram'], href: props.links.telegram },
  { key: 'github', icon: ['fab', 'github'], href: props.links.github },
  { key: 'mail', icon: ['fas', 'envelope'], href: `mailto:${props.links.mail}` },
  { key: 'phone', icon: ['fas', 'phone'], href: `tel:${props.links.phone}` },
  { key: 'linkedin', icon: ['fab', 'linkedin'], href: props.links.linkedin },
];
</script>

<style scoped>
.social-link {
  color: inherit;
}

.social-icon {
  color: rgb(var(--v-theme-title));
}
</style>

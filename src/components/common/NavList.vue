<template>
  <div class="d-flex align-center">
    <v-list-item
      v-for="item in items"
      :key="item.id"
      :title="item.name[selectedLanguage]"
      :value="item.href"
      class="label mr-8 text-info"
      :class="{'selected-item': selectedId === item.id}"
      style="cursor: pointer"
      @click.stop="$emit('selectMenuOption', item.id)"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, watch} from "vue";
import {useIndexStore} from "@/stores";
import {useRoute} from "vue-router";
const indexStore = useIndexStore();

interface ListElem {
  id: string,
  name: string,
  href: string
}

interface Props {
  items?: ListElem[],
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const route = useRoute()
const selectedId = computed<string>(() => {
  return route.query?.block ?? ""
})

const active = ref("")

const selectedLanguage = computed<string>(() =>
  indexStore.getSelectedLanguage
)

watch(props.items, value => {
  active.value = value?.[0]?.href ?? ""
}, {
  immediate: true
})
</script>

<style lang="scss">
.label.v-list-item .v-list-item__content .v-list-item-title {
  font-weight: 900 !important;
  font-size: 22px !important;
  line-height: 26.4px !important;
  color: rgb(var(--v-theme-title));
}

.selected-item {
  text-decoration: underline;
}
</style>

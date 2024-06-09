<template>
  <div class="d-flex align-center">
    <v-list-item
      v-for="item in items"
      :key="item.id"
      :title="item.text"
      :value="item.href"
      class="label mr-8 text-info"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";

interface ListElem {
  id: number,
  text: string,
  href: string
}

interface Props {
  items?: ListElem[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => []
})

const active = ref("")

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
</style>

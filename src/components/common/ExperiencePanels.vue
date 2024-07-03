<template>
  <v-expansion-panels variant="accordion">
    <v-row v-for="(item, i) in items" :key="i" style="width: 100%">
      <v-col cols="2" class="pt-0 pb-3">
        <p class="mb-0 title--text text-center align-content-center" style="height: 48px;">
          {{ item.period }}
        </p>
      </v-col>
      <v-col class="pt-0 pb-3">
        <v-expansion-panel
          :text="item.text"
          expand-icon="$expand"
          static
          @group:selected="selectItem({...$event, i})"
        >
         <template #title>
            <div class="d-flex align-center justify-space-between" style="min-width: 100%">
              <p class="title--text ma-0 pa-0">
               {{ item.title }}
              </p>
              <font-awesome-icon
                style="max-width: 32px; max-height: 32px;"
                icon="plus"
                class="skill-card--icon transition-all pannel-expand-icon"
                :class="selectedIndexes.includes(i) ? 'rotate-45' : 'rotate-0'"
                color="title"
              />
            </div>
         </template>
         <template #text>
           <div class="d-flex flex-column pt-2">
            <div class="d-flex align-center">
              <font-awesome-icon
                style="max-width: 20px; max-height: 20px;"
                :icon="item.icon"
                class="skill-card--icon pannel-expand-icon"
              />
              <p class="ml-2 title--text">
                {{item.iconPostfix}}
              </p>
            </div>
              <p class="mt-2 title--text">
                {{item.text}}
              </p>
           </div>
         </template>
        </v-expansion-panel>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {reactive} from "vue";

interface ExperiencePanel {
  text: string,
  icon?: string[],
  iconPostfix?: string,
  title: string,
  period?: string,
  selected?: boolean
}

interface Props {
  items: ExperiencePanel[]
}

interface EventOpen {
  value: boolean,
  i: number
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    {
      text: "",
      icon: [],
      iconPostfix: "",
      title: "",
      period: "",
      selected: false
    }
  ]
})

let selectedIndexes = reactive<number[]>([])

const selectItem = (e:EventOpen) => {
  if (!e.value) {
    selectedIndexes = selectedIndexes.filter(v => v !== e.i)
  } else {
    selectedIndexes.push(e.i)
  }
}
</script>

<style lang="scss">
.title--text {
  color: rgb(var(--v-theme-title));
}

.pannel-expand-icon {
  color: rgb(var(--v-theme-title));
}

.v-expansion-panel-title.v-expansion-panel-title--static {
  background: rgb(var(--v-theme-card));
}

.v-expansion-panel .v-expansion-panel-text .v-expansion-panel-text__wrapper{
  background: rgb(var(--v-theme-surface));
}

.transition-all {
  transition: all .3s ease-in;
}

.rotate-45 {
  transform: rotate(45deg);
}

.rotate-0 {
  transform: rotate(0);
}
</style>

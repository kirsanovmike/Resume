<template>
  <v-expansion-panels variant="accordion">
    <v-row v-for="(item, i) in items" :key="i" style="width: 100%">
      <v-col cols="2" class="pt-0 pb-3">
        <p class="mb-0 text--title text-center align-content-center" style="height: 48px;">
          {{ item.period }}
        </p>
      </v-col>
      <v-col class="pt-0 pb-3">
        <v-expansion-panel
          :text="item.text"
          :title="item.title"
          expand-icon="$expand"
          static
        >
         <template #text>
           <div class="d-flex flex-column pt-2">
            <div class="d-flex align-center">
              <font-awesome-icon
                :icon="item.icon"
                class="skill-card--icon"
                color="title"
              />
              <p class="ml-2 text--title">
                {{item.iconPostfix}}
              </p>
            </div>
              <p class="mt-2 text--title">
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

interface ExperiencePanel {
  text: string,
  icon?: string[],
  iconPostfix?: string,
  title: string,
  period?: string
}

interface Props {
  items: ExperiencePanel[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    {
      text: "",
      icon: [],
      iconPostfix: "",
      title: "",
      period: ""
    }
  ]
})
</script>

<style lang="scss">
.v-expansion-panel-title.v-expansion-panel-title--static {
  background: rgb(var(--v-theme-card));
}

.v-expansion-panel .v-expansion-panel-text .v-expansion-panel-text__wrapper{
  background: rgb(var(--v-theme-surface));
}
</style>

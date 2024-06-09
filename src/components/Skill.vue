<template>
  <v-card
    max-width="180"
    elevation="0"
    class="mr-8 mb-8 skill-card"
  >
    <v-card-text>
      <div class="d-flex flex-column align-start">
        <font-awesome-icon
          :icon="props.skill.icon"
          class="skill-card--icon mb-6"
          :color="props.skill.iconColor"
        />
        <span class="font--title-3 mb-3">{{ props.skill.text }}</span>
        <div class="d-flex">
          <div
            v-for="skillLevel in 5"
            :key="skillLevel"
            :class="['skill-level mr-2', props.skill.level <= skillLevel - 1 ? 'skill-level--active' : '']"
          />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true
  },
})
</script>
<style scoped>
.skill-level {
  width: 12px;
  height: 12px;
  background-color: #BAAED0;
  border-radius: 20px;
}

.skill-level--active {
  background-color: #615477
}
</style>
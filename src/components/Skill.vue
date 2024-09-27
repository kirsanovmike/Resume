<template>
  <v-card max-width="180" elevation="0" class="mx-3 my-3 skill-card">
    <v-card-text>
      <div class="d-flex flex-column align-start">
        <font-awesome-icon
          :icon="skill.icon"
          class="skill-card--icon mb-6"
          :color="skill.iconColor"
        />
        <span class="font--title-3 skill-text mb-3">{{ skill.text }}</span>
        <div class="d-flex">
          <div
            v-for="skillLevel in 5"
            :key="skillLevel"
            :class="['skill-level mr-2', skillLevel <= skill.level ? 'skill-level--active' : '']"
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
  }
})
</script>

<style scoped>
.skill-level {
  width: 12px;
  height: 12px;
  background-color: #BAAED0;
  border-radius: 20px;
}

.skill-text {
  color: rgb(var(--v-theme-info));
}

.skill-level--active {
  background-color: rgb(var(--v-theme-background));
}
</style>

<template>
  <div :id="id" :class="blockClass" v-intersect="handleIntersect">
    <slot />
  </div>
</template>

<script setup>
import { defineEmits, toRefs } from 'vue';

// Принятые пропсы
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  blockClass: {
    type: [String, Object],
    default: 'display-block'
  }
});

// Передаем событие пересечения наружу
const emit = defineEmits(['intersect']);

const handleIntersect = (isIntersecting, entries) => {
  emit('intersect', isIntersecting, entries);
};
</script>

<template>
  <div>
    <p v-for="contactDetail in details" :key="contactDetail.id" class="font-text">
      <span class="title--text">{{ contactDetail.propertyName }}:</span>
      <a
        v-if="contactDetail.propertyName === 'Gmail'"
        :href="`mailto:${contactDetail.value}`"
        target="_blank"
        rel="noreferrer noopener"
        class="text-yellow"
      >
        {{ contactDetail.value }}
      </a>
      <a
        v-else-if="isPhone(contactDetail.value)"
        :href="`tel:${contactDetail.value}`"
        target="_blank"
        rel="noreferrer noopener"
        class="text-yellow"
      >
        {{ contactDetail.value }}
      </a>
      <a
        v-else
        :href="contactDetail.value"
        target="_blank"
        rel="noreferrer noopener"
        class="text-yellow"
      >
        {{ contactDetail.value }}
      </a>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  details: {
    type: Array,
    required: true
  }
});

// Функция для проверки, является ли строка телефонным номером
const isPhone = (value) => {
  return value.includes('+');
};
</script>

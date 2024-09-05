<script setup lang="ts">
import { useToast } from "vue-toastification";

const toast = useToast();

const props = withDefaults(defineProps<{btnWidth: string}>(), {
  btnWidth: "100%"
})
const emit = defineEmits(['sumbit'])

const sumbit = () => {
  toast.error('Эта форма пока не работает!')
  emit('sumbit')
}
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field
      class="cv-input"
      label="Name"
    />
    <v-text-field
      class="cv-input"
      label="E-mail"
    />
    <v-textarea
      class="cv-input"
      label="Message"
    />
    <div :style="`width: ${props.btnWidth}px`">
      <v-btn
        class="mt-8 button--primary"
        @click="sumbit"
        type="submit"
        block
      >Submit</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { useToast } from "vue-toastification";
import {ref} from "vue"

const toast = useToast();

const form = ref({
  name: "",
  email: "",
  message: "",
})

interface Label {
  id: string,
  title: string,
}

interface Props {
  btnWidth: string,
  labels: Label[]
}

const props = withDefaults(defineProps<Props>(), {
  btnWidth: "100%",
  labels: () => []
})
const emit = defineEmits(['submit'])

const sumbit = () => {
  emit('submit', {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  })
  form.value.name = ""
  form.value.email = ""
  form.value.message = ""
}
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field
      v-model="form.name"
      class="cv-input"
      :label="props.labels[0].title"
    />
    <v-text-field
      v-model="form.email"
      class="cv-input"
      :label="props.labels[1].title"
    />
    <v-textarea
      v-model="form.message"
      class="cv-input"
      :label="props.labels[2].title"
    />
    <div :style="`width: ${props.btnWidth}px`">
      <v-btn
        class="mt-8 button--primary"
        @click="sumbit"
        type="submit"
        block
      >{{ props.labels[3].title }}</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>
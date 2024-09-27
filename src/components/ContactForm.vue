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

const validForm = ref(false)

const rules = ref({
  name: value => {
    if (/^.{3,}$/.test(value)) return true
    return 'От 3 символов.'
  },
  email: value => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value)) return true
    return 'Невалидный e-mail.'
  },
  required: value => {
    if (value) return true
    return 'Поле обязательно для заполнения.'
  }

})
const mailForm = ref(null)
const sumbit = () => {
  if (validForm.value) {
    emit('submit', {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    })
    mailForm.value.resetValidation()
    form.value.name = ""
    form.value.email = ""
    form.value.message = ""
  }
}

const updateModelValue = (event) => {
  validForm.value = event
}
</script>

<template>
  <v-form
    ref="mailForm"
    @submit.prevent="sumbit"
    @update:modelValue="updateModelValue"
  >
    <v-text-field
      v-model="form.name"
      :rules="[rules.required, rules.name]"
      class="cv-input"
      :label="props.labels[0] ? props.labels[0].title : ''"
    />
    <v-text-field
      v-model="form.email"
      :rules="[rules.required, rules.email]"
      class="cv-input"
      :label="props.labels[1] ? props.labels[1].title : ''"
    />
    <v-textarea
      v-model="form.message"
      :rules="[rules.required]"
      class="cv-input"
      :label="props.labels[2] ? props.labels[2].title : ''"
    />
    <div :style="`width: ${props.btnWidth}px`">
      <v-btn
        class="mt-8 button--primary"
        type="submit"
        block
      >{{ props.labels[3] ? props.labels[3].title : "" }}</v-btn>
    </div>
  </v-form>
</template>

<style scoped>

</style>
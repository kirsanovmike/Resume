import {type PiniaPluginContext} from 'pinia'
import {reactive, toRef} from "vue";
import {titleize} from "@/services/store/piniaFactoryHelpers";
import type {keyTitledKey} from "@/interfaces/PiniaIntefaces";

export function piniaFactoryPlugin(context: PiniaPluginContext) {
  const {store} = context;

  // установка переменной на `$state` позволяет сериализовать ее во время SSR
  store.$state.stateInfo = reactive(Object.keys(store.$state).reduce(
    (accumulator: any, key: string) => ({
      ...accumulator,
      [key]: {
        loading: false,
        responseStatus: undefined,
      },
    }), {})
  );

  store.stateInfo = toRef(store.$state, 'stateInfo');


  // обязательно установите контекст (`this`) на хранилище
  const originalReset = store.$reset.bind(store);

  // переопределение функции $reset
  return {
    $reset() {
      originalReset();
      Object.keys(store.stateInfo).forEach((key) => store.stateInfo[key] = {
        loading: false,
        responseStatus: undefined,
      });
    },
  }
}
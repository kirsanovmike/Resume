import {ref} from 'vue'
import {defineStore} from 'pinia'
import {fetchData} from "@/services/store/piniaFactoryHelpers";

export const useUserStore = defineStore('user', () => {
    const userId = ref<string>("");

    return {userId, fetchData}
  }
)

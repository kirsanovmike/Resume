import { defineStore } from "pinia"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/config/firebase"

let lettersCollectionRef: any = null

export const useStoreLetters = defineStore("storeLetters", {
  state: () => {
    return {}
  },
  actions: {
    /* Инициализация */
    init() {
      /* Путь к сообщениям в БД */
      lettersCollectionRef = collection(db, "letters")
    },
    /* Добавление сообщения */
    async addLetter({name, email, message}) {
      await addDoc(lettersCollectionRef, {
        date: new Date().getTime().toString(),
        authorName: name,
        authorEmail: email,
        authorMessage: message,
        isRead: false,
      })
    },
  },
  getters: {
  }
})
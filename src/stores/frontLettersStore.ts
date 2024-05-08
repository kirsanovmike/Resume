import { defineStore } from "pinia"
import { collection,addDoc } from "firebase/firestore"
import { db } from "@/config/firebase"

let lettersCollectionRef

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
    async addLetter({authorName, authorTelephoneNumber, authorEmail, authorMessage}) {
      await addDoc(lettersCollectionRef, {
        date: new Date().getTime().toString(),
        authorName,
        authorTelephoneNumber,
        authorEmail,
        authorMessage,
        isRead: false,
      })
    },
  },
  getters: {
  }
})
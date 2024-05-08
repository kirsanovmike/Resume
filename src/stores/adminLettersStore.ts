import { defineStore } from "pinia"
import {
  collection, onSnapshot,
  query, orderBy, updateDoc, doc
} from "firebase/firestore"
import { db } from "@/config/firebase"

let lettersCollectionQuery
let lettersCollectionRef
let getLettersSnapshot = null

export const useStoreLetters = defineStore("storeLetters", {
  state: () => {
    return {
      /* Сообщения */
      letters: [],
      /* Сообщения загружены */
      lettersLoaded: false
    }
  },
  actions: {
    /* Инициализация */
    init() {
      /* Путь к сообщениям в БД */
      lettersCollectionRef = collection(db, "letters")
      /* Запрос сообщений с сортировкой по дате */
      lettersCollectionQuery = query(lettersCollectionRef, orderBy("date", "desc"))
      this.loadLetters()
    },
    /* Загрузка сообщений */
    async loadLetters() {
      if (getLettersSnapshot) getLettersSnapshot()
      /* Получение сообщений из БД */
      getLettersSnapshot = onSnapshot(lettersCollectionQuery, (querySnapshot) => {
        const letters = []
        querySnapshot.forEach((doc) => {
          const letter = {
            id: doc.id,
            date: doc.data().date,
            authorName: doc.data().authorName,
            authorTelephoneNumber: doc.data().authorTelephoneNumber,
            authorEmail: doc.data().authorEmail,
            authorMessage: doc.data().authorMessage,
            isRead: doc.data().isRead,
          }
          letters.push(letter)
        })
        this.letters = [...letters]
        this.lettersLoaded = true
      }, error => {
        console.log("error.message: ", error.message)
      })
    },
    /* Обновляет статус прочтено ли сообщение */
    async updateLetterIsRead(id) {
      const letter = this.letters.find(letter => letter.id === id )
      await updateDoc(doc(lettersCollectionRef, id), {
        ...letter,
        isRead: true,
      })
    }
  },
  getters: {
    /* Получить все сообщения */
    getLetters: (state) => {
      return state.letters
    },
    /* Количить количество сообщений */
    getLettersCount: (state) => {
      return state.letters.length
    },
    /* Получить все непрочитанные сообщения */
    getNotReadLetters: (state) => {
      return state.letters.filter(letter => !letter.isRead)
    },
    /* Получить сообщение по id) */
    getLetterById: (state) => {
      return (id) => {
        return state.letters.find(letter => letter.id === id)
      }
    },
  }
})
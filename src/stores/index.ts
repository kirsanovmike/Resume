import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, orderBy, updateDoc, doc, DocumentReference, type DocumentData} from "firebase/firestore"
import { db } from "@/config/firebase"
import {type MenuItem, type LanguageItem, type AboutItem} from "@/interfaces/Index"

let menuCollectionQuery: any = null
let menuCollectionRef: any = null
let languagesCollectionQuery: any = null
let languagesCollectionRef: any = null
let aboutCollectionQuery: any = null
let aboutCollectionRef: any = null

export const useIndexStore = defineStore('index', () => {
  const languages = ref<LanguageItem []>([])
  const menu = ref<MenuItem []>([])
  const about = ref<AboutItem>({})

  let selectedLanguage = ref<string>("ru");

  async function initDB() {
    menuCollectionRef = collection(db, "menu")
    menuCollectionQuery = query(menuCollectionRef)
    languagesCollectionRef = collection(db, "languages")
    languagesCollectionQuery = query(languagesCollectionRef)
    aboutCollectionRef = collection(db, "about")
    aboutCollectionQuery = query(aboutCollectionRef)
  }

  async function loadMenu() {
    onSnapshot(menuCollectionQuery, (querySnapshot) => {
      const responceMenu: any[] = []
      querySnapshot.forEach((doc) => {
        const menuItem = {
          id: doc.id,
          name: doc.data().name
        }
        responceMenu.push(menuItem)
      })
      menu.value = [...responceMenu]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }
  async function loadlanguages() {
    onSnapshot(languagesCollectionQuery, (querySnapshot) => {
      const response: any[] = []
      querySnapshot.forEach((doc) => {
        const languageItem = {
          id: doc.id,
          name: doc.data().name
        }
        response.push(languageItem)
      })
      languages.value = [...response]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }
  async function loadAbout() {
    onSnapshot(aboutCollectionQuery, (querySnapshot) => {
      const response: any[] = []
      querySnapshot.forEach((doc) => {
        const aboutItem = {
          id: doc.id,
          buttonText: doc.data().buttonText,
          name: doc.data().name,
          position: doc.data().position,
          textAbout: doc.data().textAbout
        }
        response.push(aboutItem)
      })
      about.value = {...response[0]}
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  function setSelectedLanguage(value: string) {
    selectedLanguage.value = value
  }

  const getMenu = computed(() => menu.value)
  const getLanguages = computed(() => languages.value)
  const getAbout = computed(() => about.value)
  const getSelectedLanguage = computed(() => selectedLanguage.value)



  return { menu, initDB, loadMenu, loadlanguages, getMenu, getLanguages, loadAbout, getAbout, getSelectedLanguage, setSelectedLanguage }
})

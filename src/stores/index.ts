import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, orderBy, updateDoc, doc, DocumentReference, type DocumentData} from "firebase/firestore"
import { db } from "@/config/firebase"
import {type MenuItem, type LanguageItem, type AboutItem, type SkillItem, type WorkExperienceItem} from "@/interfaces/Index"

let menuCollectionQuery: any = null
let menuCollectionRef: any = null

let languagesCollectionQuery: any = null
let languagesCollectionRef: any = null

let aboutCollectionQuery: any = null
let aboutCollectionRef: any = null

let skillsCollectionQuery: any = null
let skillsCollectionRef: any = null

let workExperienceCollectionQuery: any = null
let workExperienceCollectionRef: any = null

export const useIndexStore = defineStore('index', () => {
  const languages = ref<LanguageItem []>([])
  const menu = ref<MenuItem []>([])
  const about = ref<AboutItem>({})
  const skills = ref<SkillItem []>([])
  const workExperience = ref<WorkExperienceItem []>([])

  let selectedLanguage = ref<string>("ru");

  async function initDB() {
    menuCollectionRef = collection(db, "menu")
    menuCollectionQuery = query(menuCollectionRef)
    languagesCollectionRef = collection(db, "languages")
    languagesCollectionQuery = query(languagesCollectionRef)
    aboutCollectionRef = collection(db, "about")
    aboutCollectionQuery = query(aboutCollectionRef)
    skillsCollectionRef = collection(db, "skills")
    skillsCollectionQuery = query(skillsCollectionRef)
    workExperienceCollectionRef = collection(db, "workexperience")
    workExperienceCollectionQuery = query(workExperienceCollectionRef)
  }

  async function loadMenu() {
    onSnapshot(menuCollectionQuery, (querySnapshot) => {
      const responceMenu: any[] = []
      querySnapshot.forEach((doc) => {
        const menuItem = {
          id: doc.id,
          name: doc.data().name,
          order: doc.data().order
        }
        responceMenu.push(menuItem)
      })
      menu.value = [...responceMenu.sort((a, b) => a.order - b.order)]
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
  async function loadSkills() {
    onSnapshot(skillsCollectionQuery, (querySnapshot) => {
      const responceSkills: any[] = []
      querySnapshot.forEach((doc) => {
        const skillItem = {
          id: doc.id,
          text: doc.data().text,
          icon: doc.data().icon,
          iconColor: doc.data().iconColor,
          level: doc.data().level,
        }
        responceSkills.push(skillItem)
      })
      skills.value = [...responceSkills]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadWorkExperience() {
    onSnapshot(workExperienceCollectionQuery, (querySnapshot) => {
      const responceWorkExperience: any[] = []
      querySnapshot.forEach((doc) => {
        const workExperienceItem = {
          id: doc.id,
          icon: doc.data().icon,
          iconPostfix: doc.data().iconPostfix,
          isSelected: doc.data().isSelected,
          period: doc.data().period,
          text: doc.data().text,
          title: doc.data().title
        }
        responceWorkExperience.push(workExperienceItem)
      })
      workExperience.value = [...responceWorkExperience]
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
  const getSkills = computed(() => skills.value)
  const getWorkExperience = computed(() => workExperience.value.map(el => ({
    ...el,
    title: el.title[selectedLanguage.value],
    text: el.text[selectedLanguage.value]
  })))


  return { menu, initDB, loadMenu, loadlanguages, loadSkills, loadWorkExperience, getMenu,
    getLanguages, loadAbout, getAbout, getSelectedLanguage, setSelectedLanguage,
    getSkills, getWorkExperience }
})

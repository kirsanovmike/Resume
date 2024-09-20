import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, orderBy, updateDoc, doc, DocumentReference, type DocumentData} from "firebase/firestore"
import { db } from "@/config/firebase"
import {type MenuItem, type LanguageItem, type AboutItem, type SkillItem, type WorkExperienceItem, type ImageItem,
  type ContactDetailsItem, type EducationExperienceItem, type CoursesExperienceItem, type HeaderItem, type LabelItem} from "@/interfaces/Index"

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

let educationExperienceCollectionQuery: any = null
let educationExperienceCollectionRef: any = null

let coursesExperienceCollectionQuery: any = null
let coursesExperienceCollectionRef: any = null

let contactDetailsCollectionQuery: any = null
let contactDetailsCollectionRef: any = null

let projectsCollectionQuery: any = null
let projectsCollectionRef: any = null

let headersCollectionQuery: any = null
let headersCollectionRef: any = null

let labelsCollectionQuery: any = null
let labelsCollectionRef: any = null

let imagesCollectionQuery: any = null
let imagesCollectionRef: any = null

export const useIndexStore = defineStore('index', () => {
  const languages = ref<LanguageItem []>([])
  const menu = ref<MenuItem []>([])
  const about = ref<AboutItem>({})
  const skills = ref<SkillItem []>([])
  const workExperience = ref<WorkExperienceItem []>([])
  const educationExperience = ref<EducationExperienceItem []>([])
  const coursesExperience = ref<CoursesExperienceItem []>([])
  const contactDetails = ref<ContactDetailsItem []>([])
  const projects = ref<ProjectItem []>([])
  const headers = ref<HeaderItem []>([])
  const labels = ref<LabelItem []>([])
  const images = ref<ImageItem []>([])

  const selectedLanguage = ref<string>("ru");

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
    educationExperienceCollectionRef = collection(db, "educationexperience")
    educationExperienceCollectionQuery = query(educationExperienceCollectionRef)
    coursesExperienceCollectionRef = collection(db, "coursesexperience")
    coursesExperienceCollectionQuery = query(coursesExperienceCollectionRef)
    contactDetailsCollectionRef = collection(db, "contactdetails")
    contactDetailsCollectionQuery = query(contactDetailsCollectionRef)
    projectsCollectionRef = collection(db, "projects")
    projectsCollectionQuery = query(projectsCollectionRef)
    headersCollectionRef = collection(db, "headers")
    headersCollectionQuery = query(headersCollectionRef)
    labelsCollectionRef = collection(db, "labels")
    labelsCollectionQuery = query(labelsCollectionRef)
    imagesCollectionRef = collection(db, "images")
    imagesCollectionQuery = query(imagesCollectionRef)
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
          detailTitle: doc.data().detailTitle,
          buttonText: doc.data().buttonText,
          name: doc.data().name,
          items: doc.data().items,
          position: doc.data().position,
          textAbout: doc.data().textAbout,
          detailTextAbout: doc.data().detailTextAbout,
          location: doc.data().location,
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

  async function loadEducationExperience() {
    onSnapshot(educationExperienceCollectionQuery, (querySnapshot) => {
      const responceEducationExperience: any[] = []
      querySnapshot.forEach((doc) => {
        const educationExperienceItem = {
          id: doc.id,
          icon: doc.data().icon,
          iconPostfix: doc.data().iconPostfix,
          isSelected: doc.data().isSelected,
          period: doc.data().period,
          text: doc.data().text,
          title: doc.data().title
        }
        responceEducationExperience.push(educationExperienceItem)
      })
      educationExperience.value = [...responceEducationExperience]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadCoursesExperience() {
    onSnapshot(coursesExperienceCollectionQuery, (querySnapshot) => {
      const responceCoursesExperience: any[] = []
      querySnapshot.forEach((doc) => {
        const coursesExperienceItem = {
          id: doc.id,
          icon: doc.data().icon,
          iconPostfix: doc.data().iconPostfix,
          isSelected: doc.data().isSelected,
          period: doc.data().period,
          text: doc.data().text,
          title: doc.data().title
        }
        responceCoursesExperience.push(coursesExperienceItem)
      })
      coursesExperience.value = [...responceCoursesExperience]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadContactDetails() {
    onSnapshot(contactDetailsCollectionQuery, (querySnapshot) => {
      const responceContactDetails: any[] = []
      querySnapshot.forEach((doc) => {
        const contactDetailsItem = {
          id: doc.id,
          propertyName: doc.data().propertyName,
          type: doc.data().type,
          value: doc.data().value,
        }
        responceContactDetails.push(contactDetailsItem)
      })
      contactDetails.value = [...responceContactDetails]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadProjects() {
    onSnapshot(projectsCollectionQuery, (querySnapshot) => {
      const responceProjects: any[] = []
      querySnapshot.forEach((doc) => {
        const projectsItem = {
          id: doc.id,
          title: doc.data().title,
          text: doc.data().text,
          img: doc.data().img,
          description: doc.data().description,
          isMedal: doc.data().isMedal,
        }
        responceProjects.push(projectsItem)
      })
      projects.value = [...responceProjects]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadHeaders() {
    onSnapshot(headersCollectionQuery, (querySnapshot) => {
      const responceHeaders: any[] = []
      querySnapshot.forEach((doc) => {
        const headersItem = {
          id: doc.id,
          title: doc.data().title,
        }
        responceHeaders.push(headersItem)
      })
      headers.value = [...responceHeaders]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadLabels() {
    onSnapshot(labelsCollectionQuery, (querySnapshot) => {
      const responceHeaders: any[] = []
      querySnapshot.forEach((doc) => {
        const labelsItem = {
          id: doc.id,
          title: doc.data().title,
        }
        responceHeaders.push(labelsItem)
      })
      labels.value = [...responceHeaders]
    }, (error: { message: any }) => {
      console.log("error.message: ", error.message)
    })
  }

  async function loadImages() {
    onSnapshot(imagesCollectionQuery, (querySnapshot) => {
      const responceHeaders: any[] = []
      querySnapshot.forEach((doc) => {
        const imagesItem = {
          id: doc.id,
          value: doc.data().value,
        }
        responceHeaders.push(imagesItem)
      })
      images.value = [...responceHeaders]
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
  const getEducationExperience = computed(() => educationExperience.value.map(el => ({
    ...el,
    title: el.title[selectedLanguage.value],
    text: el.text[selectedLanguage.value]
  })))
  const getCoursesExperience = computed(() => coursesExperience.value.map(el => ({
    ...el,
    title: el.title[selectedLanguage.value],
    text: el.text[selectedLanguage.value]
  })))
  const getContactDetails = computed(() => contactDetails.value)
  const getProjects = computed(() => projects.value.map(el => ({
    ...el,
    title: el.title[selectedLanguage.value],
    text: el.text[selectedLanguage.value],
    description: el.description[selectedLanguage.value],
  })))
  const getHeaders = computed(() => headers.value)
  const getLabels = computed(() => labels.value.map(el => ({
    ...el,
    title: el.title[selectedLanguage.value],
  })))
  const getImages = computed(() => images.value)


  return { menu, initDB, loadMenu, loadlanguages, loadSkills, loadWorkExperience, loadEducationExperience, loadCoursesExperience, loadContactDetails,
    loadProjects, loadHeaders, loadLabels, getMenu, getLanguages, loadImages, loadAbout, getAbout, getSelectedLanguage, setSelectedLanguage,
    getSkills, getWorkExperience, getEducationExperience, getCoursesExperience, getContactDetails, getProjects, getHeaders, getLabels, getImages }
})

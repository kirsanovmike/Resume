export interface MenuItem {
  id: string,
  name: string
}

export interface LanguageItem {
  id: string,
  name: string
}

export interface AboutItem {
  id: string,
  name: string,
  buttonText: string,
  position: string,
  textAbout: string,
}

export interface SkillItem {
  id: string,
  text: string,
  icon: Array<String>,
  iconColor: string,
  level: number,
}

export interface WorkExperienceItem {
  id: string,
  icon: Array<String>,
  iconPostfix: string,
  isSelected: boolean,
  period: string,
  text: {
    ru: string,
    en: string,
  },
  title: {
    ru: string,
    en: string,
  },
}
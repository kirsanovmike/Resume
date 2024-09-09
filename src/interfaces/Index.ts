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

export interface EducationExperienceItem {
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

export interface CoursesExperienceItem {
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

export interface ContactDetailsItem {
  id: string,
  propertyName: string,
  type: number,
  value: string,
}

export interface ProjectItem {
  id: string,
  title: {
    ru: string,
    en: string,
  },
  text: {
    ru: string,
    en: string,
  },
  description: {
    ru: string,
    en: string,
  },
  isMedal: boolean,
}

export interface HeaderItem {
  id: number,
  title: {
    ru: string,
    en: string,
  },
}

export interface LabelItem {
  id: number,
  title: {
    ru: string,
    en: string,
  },
}
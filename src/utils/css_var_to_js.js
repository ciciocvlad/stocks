import '../main.css'

export const getCssVar = name =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

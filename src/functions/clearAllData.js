import {
 personalInfoKey,
 experienceKey,
 educationKey,
 experienceFormsIdArrKey,
 educationFormsIdArrKey,
 submittedPersonalInfoKey,
 submittedExperienceKey,
 submittedEducationKey
} from "../config/localstorageKeys"
export const clearAllData = () => {
 const keys = [
  personalInfoKey,
  experienceFormsIdArrKey,
  educationFormsIdArrKey,
  submittedPersonalInfoKey,
  submittedExperienceKey,
  submittedEducationKey
 ];
 const expArr = JSON.parse(localStorage.getItem(experienceFormsIdArrKey))
 if (expArr) {
  expArr.map((id) => {
   localStorage.removeItem(experienceKey + id)
  })
 }
 const eduArr = JSON.parse(localStorage.getItem(educationFormsIdArrKey))
 if (eduArr) {
  eduArr.map((id) => {
   localStorage.removeItem(educationKey + id)
  })
 }
 keys.map((key) => localStorage.removeItem(key))
}
import { Education, PersonalInfo, GetStarted, Experience, Cv } from "../pages/index.js";

const ROUTES = {
 GETSTARTED: "/",
 PERSONAL: "personal-info",
 EXPERIENCE: "experience",
 EDUCATION: "education",
 CV: "cv",
};

const ROUTES_CONFIG = [
 {
  path: ROUTES.GETSTARTED,
  page: GetStarted
 }, {
  path: ROUTES.PERSONAL,
  page: PersonalInfo
 }, {
  path: ROUTES.EXPERIENCE,
  page: Experience
 }, {
  path: ROUTES.EDUCATION,
  page: Education
 }, {
  path: ROUTES.CV,
  page: Cv
 }
]



export default ROUTES;
export { ROUTES_CONFIG };

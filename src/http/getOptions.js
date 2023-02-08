import axios from "axios";

export const getOptions = async (setter) => {
 try {
  let dataFromLocalStorage = localStorage.getItem('DEGREE-OPTIONS');
  if (dataFromLocalStorage) {
   setter(JSON.parse(dataFromLocalStorage));
  } else {
   const response = await axios.get('https://resume.redberryinternship.ge/api/degrees', {
    headers: {
     accept: 'application/json',
    },
   });
   console.log(response.data);
   setter(response.data);
   localStorage.setItem('DEGREE-OPTIONS', JSON.stringify(response.data));
  }
 } catch (error) {
  console.error(error);
 }
}
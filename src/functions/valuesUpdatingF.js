export const saveValuesToLocalStorage = (values, key) => {
 localStorage.setItem(key, JSON.stringify(values));
};
export const getValuesFromLocalStorage = (key) => {
 const values = localStorage.getItem(key);
 return values
  ? JSON.parse(values)
  : {
   name: "",
   surname: "",
   image: "",
   message: "",
   email: "",
   mobile: "",
  };
};
export const imageHandler = (e, setFieldValue) => {
 console.log(e.target.files);
 const image = e.target.files[0];
 const reader = new FileReader();
 reader.readAsDataURL(image);
 reader.addEventListener("load", () => {
  setFieldValue("image", reader.result);
 });
};
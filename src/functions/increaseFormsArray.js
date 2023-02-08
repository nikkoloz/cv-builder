export const increaseFormsArray = (stateValue, setState) => {
 const newArray = [...stateValue];
 const lastElement = newArray[newArray.length - 1];
 newArray.push(lastElement + 1);
 setState(newArray);
};
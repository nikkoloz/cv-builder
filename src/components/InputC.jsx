import valid from "../assets/valid.svg";
import invalid from "../assets/invalid.svg";

function InputC({
  divClass,
  labelText,
  placeholder,
  id,
  pText,
  pClass,
  inpClass,
  isInvalid,
  isValid,
  inputType,
}) {
  return (
    <div className={`relative flex w-full flex-col  ${divClass}`}>
      <label className="mb-2 text-lb" htmlFor={id}>
        {labelText}
      </label>
      <div className="">
        <input
          className={`mb-2 w-full rounded-[4px] border-[1px] border-main-gray3 px-4 py-[14px] text-lbp focus:shadow-none focus:outline-2    
          ${inpClass} 
          ${isValid && "border-[1px] border-main-valid"} 
          ${isInvalid && "border-[1px] border-main-invalid"}`}
          type={inputType ? inputType : "text"}
          id={id}
          placeholder={placeholder}
          name={id}
        />
        <img
          src={invalid}
          alt="nwnw"
          className={`absolute right-[-30px] top-[47px] ${
            !isInvalid && "hidden"
          }`}
        />
        <img
          src={valid}
          alt="nwnw"
          className={`absolute right-[5px] top-[47px] ${!isValid && "hidden"}`}
        />
      </div>
      <p className={`${pClass} text-er`}>{pText}</p>
    </div>
  );
}

export default InputC;

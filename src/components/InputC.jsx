import valid from "../../public/assets/valid.svg";
import invalid from "../../public/assets/invalid.svg";

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
}) {
  return (
    <div className={`relative flex w-full flex-col  ${divClass}`}>
      <label className="mb-2" htmlFor={id}>
        {labelText}
      </label>
      <div className="">
        <input
          className={`mb-2 w-full rounded-[4px] px-4 py-[14px] 
          ${inpClass} 
          ${isValid && "border-[1px] border-main-valid"} 
          ${isInvalid && "border-[1px] border-main-invalid"}`}
          type="text"
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
      <p className={pClass}>{pText}</p>
    </div>
  );
}

export default InputC;

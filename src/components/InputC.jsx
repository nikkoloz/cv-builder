function InputC({divClass, labelText, placeholder, id, pText, pClass, inpClass}) {
  return (
    <div className={`flex w-full flex-col ${divClass}`}>
      <label className="mb-2" htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`mb-2 w-full rounded-[4px] px-4 py-[14px] ${inpClass}`}
        type="text"
        id={id}
        placeholder={placeholder}
        name={id}
      />
      <p className={pClass}>{pText}</p>
    </div>
  );
}

export default InputC;

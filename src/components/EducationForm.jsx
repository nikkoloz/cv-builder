import InputC from "./InputC";
function EducationForm() {
  return (
    <div>
      <InputC
        divClass="mb-[30px]"
        labelText="სასწავლებელი"
        placeholder="სასწავლებელი"
        id="school"
        pText="მინიმუმ 2 სიმბოლო"
        pClass=""
        inpClass=""
      />

      <div className=" flex w-full justify-between">
        <div className={`relative mr-[56px] flex w-full flex-col `}>
          <label className="mb-2 text-lb" htmlFor="degree">
            ხარისხი
          </label>
          <select
            defaultValue="DEFAULT"
            name="degree"
            id="degree"
            className="mb-2 w-full rounded-[4px] border-[1px] border-main-gray3 bg-white px-4 py-[14px] text-lbp focus:shadow-none focus:outline-2"
          >
            <option value="DEFAULT" disabled >
              აირჩიეთ ხარისხი
            </option>
            <option value="საშუალო სკოლის დიპლომი">
              საშუალო სკოლის დიპლომი
            </option>
            <option value="ზოგადსაგანმანათლებლო დიპლომი">
              ზოგადსაგანმანათლებლო დიპლომი
            </option>
            <option value="ბაკალავრი">ბაკალავრი</option>
            <option value="მაგისტრი">მაგისტრი</option>
            <option value="დოქტორი">დოქტორი</option>
            <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
            <option value="სტუდენტი">სტუდენტი</option>
            <option value="კოლეჯი (ხარისხის გარეშე)">
              კოლეჯი (ხარისხის გარეშე)
            </option>
            <option value="სხვა">სხვა</option>
          </select>
          <p className=""></p>
        </div>
        <InputC
          divClass="mb-8"
          labelText="დამთავრების რიცხვი"
          id="education-date"
          inputType="date"
          pClass=""
          inpClass=""
        />
      </div>
      <div className="mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
        <label className="mb-2 text-lb" htmlFor="about-job">
          აღწერა
        </label>
        <textarea
          className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
          name="about-job"
          id="about-job"
          placeholder="განათლების აღწერა"
        ></textarea>
      </div>
    </div>
  );
}

export default EducationForm;

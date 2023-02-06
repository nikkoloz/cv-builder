import InputC from "./InputC";
function ExperienceCom() {
  return (
    <div>
      <InputC
        divClass="mb-[30px]"
        labelText="თანამდებობა"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        id="position"
        pText="მინიმუმ 2 სიმბოლო"
        pClass=""
        inpClass=""
      />
      <InputC
        divClass="mb-[30px]"
        labelText="დამსაქმებელი"
        placeholder="დამსაქმებელი"
        id="employer"
        pText="მინიმუმ 2 სიმბოლო"
        pClass=""
        inpClass=""
      />
      <div className="mb-8 flex w-full justify-between">
        <InputC
          divClass="mb-8 mr-[56px]"
          labelText="დაწყების რიცხვი"
          placeholder="anzorr666@redberry.ge"
          id="email"
          inputType="date"
          pClass=""
          inpClass=""
        />
        <InputC
          divClass="mb-8"
          labelText="დამთავრების რიცხვი"
          placeholder="+995 551 12 34 56"
          id="mobile"
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
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        ></textarea>
      </div>
    </div>
  );
}

export default ExperienceCom;

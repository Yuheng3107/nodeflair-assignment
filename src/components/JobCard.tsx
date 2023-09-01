import LocationMarker from "./LocationMarker";
import Button from "./Button";
export default function JobCard() {
  return (
    <div className="w-11/12 bg-white h-44 m-1 rounded-md  shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col p-1">
      <div className="grid grid-cols-6 h-4/5 mt-2">
        <div id="logo" className="col-span-1 ">
          <img src="./GovTech.png" alt="" />
        </div>
        <div
          id="information"
          className="col-span-4 flex flex-col justify-center items-start p-1 gap-y-0.5"
        >
          <div className="flex gap-4 text-sm" id="mid-top">
            <p>GovTech</p>
            <p>4 ★ </p>
          </div>
          <div id="mid-mid" className="flex">
            <p className="text-left text-md font-semibold">
              Technical Product Manager (Cloud)
            </p>
          </div>
          <div className="mid-second-bottom text-xs flex justify-start items-center gap-2">
            <p className="text-left text-[#1fc76a] font-bold">
              less than a minute ago
            </p>
            <p className="flex">
              <LocationMarker></LocationMarker>
              <p className="ms-1 text-[#838383]">Singapore</p>
            </p>
          </div>
          <div
            id="salary-row"
            className="flex gap-2 justify-center items-center"
          >
            <p id="salary" className="text-sm font-medium">
              S$12,500 - S$20,250 / mth
            </p>
            <Button className="bg-[#F1F1F1] font-normal">EST</Button>
          </div>
        </div>
        <div id="role-type" className="">
          <Button className="text-[#1fc76a] bg-[#DDF7E9]">PM</Button>
        </div>
      </div>
      <div className="grow-0 border-t-2 mx-4">Hello</div>
    </div>
  );
}

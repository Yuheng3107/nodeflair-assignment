import LocationMarker from "./LocationMarker";
import Button from "./Button";
export default function JobCard({
  imageURL,
  organisation,
  rating,
  positionTitle,
  timePosted,
  location,
  roleType,
  skills,
  salaryRange,
  id,
  onClick,
  activeId,
}: {
  imageURL: string;
  organisation: string;
  rating: number;
  positionTitle: string;
  timePosted: string;
  location: string;
  roleType: string;
  skills: string[];
  salaryRange: string;
  id: number;
  activeId: number;
  onClick: any;
}) {
  return (
    <div
      className={`w-[97%] bg-white h-50 m-1 rounded-md  shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col p-1 ${
        id === activeId && "border-2 border-[#1fc76a]"
      }`}
      onClick={() => onClick(id)}
    >
      <div className="grid grid-cols-10 h-4/5 mt-2 py-2 mx-2">
        <div id="logo" className="col-span-2 m-2">
          <img src={imageURL} alt={organisation} />
        </div>
        <div
          id="information"
          className="col-span-6 flex flex-col justify-center items-start p-1 gap-y-0.5"
        >
          <div className="flex gap-4 text-sm" id="mid-top">
            <p>{organisation}</p>
            <p>{rating} ★ </p>
          </div>
          <div id="mid-mid" className="flex">
            <p className="text-left text-md font-semibold">{positionTitle}</p>
          </div>
          <div className="mid-second-bottom text-xs flex justify-start items-center gap-2">
            <p className="text-left text-[#1fc76a] font-bold">{timePosted}</p>
            <div className="flex">
              <LocationMarker></LocationMarker>
              <p className="ms-1 text-[#838383]">{location}</p>
            </div>
          </div>
          {salaryRange && (
            <div
              id="salary-row"
              className="flex gap-2 justify-center items-center"
            >
              <p id="salary" className="text-xs font-medium">
                {salaryRange}
              </p>
              <Button className="bg-[#F1F1F1] font-normal text-xs">EST</Button>
            </div>
          )}
        </div>
        <div
          id="role-type"
          className="col-span-2 flex flex-col flex-grow-0 items-end"
        >
          <Button className="text-[#1fc76a] bg-[#DDF7E9]">{roleType}</Button>
        </div>
      </div>
      <div className="border-t-2 mx-4 flex gap-0.5">
        {skills.map((skill) => (
          <Button className="bg-[#F1F1F1] text-[#838383] my-1" key={skill}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}

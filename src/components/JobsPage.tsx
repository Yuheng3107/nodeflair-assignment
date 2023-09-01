import JobCard from "./JobCard";
import { useState } from "react";
const data = [
  {
    id: 0,
    imageURL: "./GovTech.png",
    organisation: "GovTech",
    rating: 4,
    positionTitle: "Technical Product Manager (Cloud)",
    timePosted: "less than a minute ago",
    location: "Singapore",
    roleType: "PM",
    skills: ["play", "IAM"],
    salaryRange: "",
  },
  {
    id: 1,
    imageURL: "./Coupang.png",
    organisation: "Coupang",
    rating: 3.9,
    positionTitle: "Staff, Back-end Engineer (Coupang Pay)",
    timePosted: "37 minutes ago",
    location: "Singapore",
    roleType: "Backend",
    skills: ["Rest API", "API", "play", "Modular", "Node.js"],
    salaryRange: "S$12,500 - $20,250 / mth",
  },
  {
    id: 2,
    imageURL: "./Embed.png",
    organisation: "Embed",
    rating: 3.5,
    positionTitle: "Senior Software Engineer (.Net)",
    timePosted: "about 1 hour ago",
    location: "Singapore",
    roleType: "Fullstack",
    skills: ["Rest API", "Docker", "API", "TDD", "JavaScript"],
    salaryRange: "",
  },
];
export default function JobsPage() {
  const [title, setTitle] = useState<string>(data[0].positionTitle);
  const [activeId, setActiveId] = useState<number>(0);
  const onClick = (id: number) => {
    setActiveId(id);
    setTitle(data[id].positionTitle);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center md:grid md:grid-cols-5">
      <div
        id="leftPanel"
        className="bg-[#F1F1F1] w-screen h-full flex flex-col pt-4 mx-2 md:col-span-2 justify-center items-center md:w-full"
      >
        {data.map((cardData) => (
          <JobCard
            {...cardData}
            onClick={onClick}
            activeId={activeId}
            key={cardData["id"]}
          ></JobCard>
        ))}
      </div>
      <div
        id="rightPanel"
        className="hidden md:flex md:col-span-3 md:w-full md:h-full p-2 rounded-md pt-4"
      >
        <div className="md:bg-white md:w-full rounded-md shadow-[0_0_2px_rgba(0,0,0,0.25)]">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

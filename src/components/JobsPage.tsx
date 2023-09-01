import JobCard from "./JobCard";

const data = [
  {
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
  return (
    <div className="h-screen flex-col items-center justify-center">
      <div className="bg-[#F1F1F1] w-screen h-4/5 flex flex-col items-center pt-4 mx-2">
        <JobCard {...data[0]}></JobCard>
        <JobCard {...data[1]}></JobCard>
        <JobCard {...data[2]}></JobCard>
      </div>
    </div>
  );
}

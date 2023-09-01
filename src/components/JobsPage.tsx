import JobCard from "./JobCard";

export default function JobsPage() {
  return (
    <div className="h-screen flex-col items-center justify-center">
      <div className="h-1/5"></div>
      <div className="bg-[#F1F1F1] w-screen h-4/5 flex flex-col items-center pt-4">
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
      </div>
    </div>
  );
}

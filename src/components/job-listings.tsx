import JobListing from "./job-listing";

const JobListings = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-4  md:px-8">
      <h2 className="text-center font-bold text-xl">Recent Jobs</h2>
      <div className="my-4 space-y-4">
        <JobListing />
        <JobListing />
        <JobListing />
        <JobListing />
      </div>
    </section>
  );
};
export default JobListings;

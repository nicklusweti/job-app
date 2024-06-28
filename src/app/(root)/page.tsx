import Hero from "@/components/hero";
import JobListings from "@/components/job-listings";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-muted h-full">
        <JobListings />
      </div>
    </>
  );
};
export default Home;

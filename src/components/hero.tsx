import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl  font-bold mx-auto md:text-5xl">
            Discover Your Perfect Career Path
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore thousands of job opportunities across various industries.
            Connect with top employers and take the next step in your
            professional journey.
          </p>
          <form className="justify-center items-center gap-x-3 sm:flex">
            <Input type="text" placeholder="Search..." className="max-w-lg" />
            <Button className=" mt-3 w-full text-sm  duration-150  sm:mt-0 sm:w-auto">
              Search
            </Button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </section>
  );
};
export default Hero;

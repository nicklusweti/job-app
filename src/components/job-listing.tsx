const JobListing = () => {
  return (
    <div className="p-6 bg-background rounded-md flex w-full gap-6">
      <div className="content-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/336px-Spotify_logo_without_text.svg.png?20160123212544"
          alt=""
          className="size-20"
        />
      </div>
      <div className="grow space-y-2">
        <div>Spotify</div>
        <h1 className="font-bold text-xl">UI/UX Designer</h1>
        <div className="text-muted-foreground">
          Remote | New York, US | Full-time
        </div>
      </div>
      <div className="content-end text-muted-foreground text-sm font-semibold">
        2 weeks ago
      </div>
    </div>
  );
};
export default JobListing;

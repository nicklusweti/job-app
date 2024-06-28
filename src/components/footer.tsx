import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="font-bold text-2xl">
            Job<span className="text-primary">Board.</span>
          </Link>

          <p className="mt-4 text-center text-sm text-muted-foreground lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

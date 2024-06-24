import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/theme-toggle";

const Header = () => {
  return (
    <header>
      <nav className="items-center p-4 mx-auto max-w-screen-xl sm:px-8 flex justify-between sm:space-x-6">
        <Link href="/" className="font-bold text-2xl">
          Job<span className="text-muted-foreground">Board.</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Button size="sm">
              <Link href="/login">Login</Link>
            </Button>
          </li>
          <li>
            <Button size="sm" variant="outline">
              <Link href="/new-job">Post a job</Link>
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

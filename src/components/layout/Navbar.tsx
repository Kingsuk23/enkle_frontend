import Link from "next/link";
import Logo from "../svg/Logo";
import { MenuItems } from "../ui/Menu";
import Button from "../ui/Button";
import MobMenu from "../MobMenu";

const Navbar = () => {
  return (
    <header className="mt-2 flex justify-between items-center relative">
      {/* Mobile Menu */}
      <MobMenu />

      {/* Brand Logo */}
      <Link href="/">
        <Logo width={121} height={30} />
      </Link>

      {/* Navbar Links */}
      <nav className="gap-2 hidden md:block">
        <ul className="flex">
          <MenuItems />
        </ul>
      </nav>

      <div className="flex justify-center items-center gap-4">
        <Button variant="link" className="md:inline-flex hidden">
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/sign up">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

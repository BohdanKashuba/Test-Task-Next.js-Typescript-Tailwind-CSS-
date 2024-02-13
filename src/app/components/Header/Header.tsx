import Link from "next/dist/client/link";
import Image from "next/image";

import Container from "../Container";

import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-2 z-10 bg-gradient-to-r from-orange-200 to-green-200">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Pinapple Store"
              className="block w-10 h-auto"
            />
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

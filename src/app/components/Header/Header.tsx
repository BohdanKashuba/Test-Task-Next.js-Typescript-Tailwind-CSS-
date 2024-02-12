import Link from "next/dist/client/link";
import Image from "next/image";

import Container from "../Container";

import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed py-2 z-10 w-screen bg-gradient-to-r from-orange-200 to-green-200">
      <Container>
        <nav>
          <Link href="/">
            <Image
              src={Logo}
              alt="Pinapple Store"
              className="block w-10 h-auto"
            />
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
